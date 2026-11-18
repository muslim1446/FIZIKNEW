export type ThemeMode = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'fizik_kssm_t4_theme_v1';

export function parseThemeMode(raw: string | null): ThemeMode | null {
  if (raw === 'dark' || raw === 'light') {
    return raw;
  }
  return null;
}

export function resolveInitialTheme(
  savedRaw: string | null,
  prefersDark: boolean
): ThemeMode {
  const parsed = parseThemeMode(savedRaw);
  if (parsed !== null) {
    return parsed;
  }
  return prefersDark ? 'dark' : 'light';
}

export function toggleThemeMode(current: ThemeMode): ThemeMode {
  return current === 'dark' ? 'light' : 'dark';
}

export function applyThemeToDocument(theme: ThemeMode): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
}
