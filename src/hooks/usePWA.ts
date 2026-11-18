import { useCallback, useEffect, useState } from 'react';
import { registerSW } from 'virtual:pwa-register';
import {
  classifyFontCacheTarget,
  isIOSUserAgent,
  shouldWarmCacheUrl,
} from '../utils/pwa';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    setIsInstalled(isStandalone);
    setIsIOS(isIOSUserAgent(window.navigator.userAgent));

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const install = useCallback(async () => {
    if (!deferredPrompt) return false;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setDeferredPrompt(null);
      return true;
    }
    return false;
  }, [deferredPrompt]);

  return {
    isInstallable: !!deferredPrompt,
    isInstalled,
    isIOS,
    install,
  };
}

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

async function warmActiveSessionAssets(): Promise<void> {
  if (typeof window === 'undefined' || !('caches' in window)) return;
  try {
    const cache = await window.caches.open('app-runtime-cache');
    const origin = window.location.origin;
    const candidates = new Set<string>([
      `${origin}/`,
      `${origin}/index.html`,
      `${origin}/manifest.webmanifest`,
      `${origin}/icon.svg`,
      `${origin}/pwa-192x192.png`,
      `${origin}/pwa-512x512.png`,
    ]);

    const fontUrlsByBucket: Record<
      'google-fonts-cache' | 'gstatic-fonts-cache',
      Set<string>
    > = {
      'google-fonts-cache': new Set<string>(),
      'gstatic-fonts-cache': new Set<string>(),
    };

    if (typeof document !== 'undefined') {
      document
        .querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')
        .forEach((linkEl) => {
          const bucket = classifyFontCacheTarget(linkEl.href);
          if (bucket) fontUrlsByBucket[bucket].add(linkEl.href);
        });
    }

    if (typeof performance !== 'undefined' && performance.getEntriesByType) {
      const resources = performance.getEntriesByType(
        'resource'
      ) as PerformanceResourceTiming[];
      for (const entry of resources) {
        if (shouldWarmCacheUrl(entry.name, origin)) {
          candidates.add(entry.name);
        } else {
          const fontBucket = classifyFontCacheTarget(entry.name);
          if (fontBucket) {
            fontUrlsByBucket[fontBucket].add(entry.name);
          }
        }
      }
    }

    await Promise.all([
      ...Array.from(candidates).map(async (url) => {
        try {
          const existing = await cache.match(url, { ignoreVary: true });
          if (!existing) {
            await cache.add(url);
          }
        } catch {
          // Ignore transient fetch errors for individual resources
        }
      }),
      ...(['google-fonts-cache', 'gstatic-fonts-cache'] as const).map(
        async (bucketName) => {
          const urls = Array.from(fontUrlsByBucket[bucketName]);
          if (urls.length === 0) return;
          const fontCache = await window.caches.open(bucketName);
          await Promise.all(
            urls.map(async (url) => {
              try {
                const existing = await fontCache.match(url, { ignoreVary: true });
                if (!existing) {
                  await fontCache.add(url);
                }
              } catch {
                // Ignore if offline or blocked by CORS
              }
            })
          );
        }
      ),
    ]);
  } catch {
    // Cache Storage unavailable
  }
}

export function useOfflinePrecache() {
  const [offlineReady, setOfflineReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    const updateSW = registerSW({
      immediate: true,
      onOfflineReady() {
        setOfflineReady(true);
      },
      onRegisteredSW(_swUrl, registration) {
        if (registration) {
          void warmActiveSessionAssets().then(() => {
            if (import.meta.env.DEV) {
              setOfflineReady(true);
            }
          });
        }
      },
    });

    // If SW is already controlling from an earlier visit, make sure runtime cache is warm
    if (navigator.serviceWorker.controller) {
      void warmActiveSessionAssets();
    }

    return () => {
      void updateSW;
    };
  }, []);

  const dismissOfflineReady = useCallback(() => {
    setOfflineReady(false);
  }, []);

  return {
    offlineReady,
    dismissOfflineReady,
  };
}
