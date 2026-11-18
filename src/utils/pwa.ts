export function isIOSUserAgent(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(ua);
}

/**
 * Determines whether a resource URL should be proactively warmed in Cache Storage
 * so the app remains 100% functional offline even after a single first visit.
 * Skips cross-origin tracking, Vite HMR pings, and the raw uploaded PDF assets.
 */
export function shouldWarmCacheUrl(rawUrl: string, currentOrigin: string): boolean {
  try {
    const parsed = new URL(rawUrl, currentOrigin);
    if (parsed.origin !== currentOrigin) {
      return false;
    }
    const path = parsed.pathname;
    if (path.startsWith('/assets/aistudio/')) return false;
    if (path.includes('__vite_ping')) return false;
    if (path.endsWith('.pdf')) return false;
    return true;
  } catch {
    return false;
  }
}

export type FontCacheBucket = 'google-fonts-cache' | 'gstatic-fonts-cache' | null;

export function classifyFontCacheTarget(rawUrl: string): FontCacheBucket {
  try {
    const parsed = new URL(rawUrl);
    if (parsed.origin === 'https://fonts.googleapis.com') {
      return 'google-fonts-cache';
    }
    if (parsed.origin === 'https://fonts.gstatic.com') {
      return 'gstatic-fonts-cache';
    }
    return null;
  } catch {
    return null;
  }
}

