import { CheckCircle2, WifiOff, X } from 'lucide-react';
import React from 'react';
import { useOfflinePrecache, useOnlineStatus } from '../hooks/usePWA';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();
  const { offlineReady, dismissOfflineReady } = useOfflinePrecache();

  if (!isOnline) {
    return (
      <div
        role="status"
        data-testid="offline-banner"
        className="fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-lg border border-amber-500/40 bg-amber-600 px-3.5 py-2 text-xs font-semibold text-white shadow-lg"
      >
        <WifiOff className="h-3.5 w-3.5 shrink-0" />
        <span>Mod Luar Talian — Semua 13 Bab berfungsi tanpa internet.</span>
      </div>
    );
  }

  if (offlineReady) {
    return (
      <div
        role="status"
        data-testid="offline-ready-toast"
        className="fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-slate-900 px-3.5 py-2 text-xs font-semibold text-emerald-800 dark:text-emerald-300 shadow-lg"
      >
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
        <span>Sedia Luar Talian — 13 Bab &amp; rumus disimpan di pelayar.</span>
        <button
          type="button"
          onClick={dismissOfflineReady}
          aria-label="Tutup pemberitahuan luar talian"
          className="ml-1 rounded p-0.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    );
  }

  return null;
};
