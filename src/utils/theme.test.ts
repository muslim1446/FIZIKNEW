import assert from 'node:assert/strict';
import test from 'node:test';
import {
  parseThemeMode,
  resolveInitialTheme,
  toggleThemeMode,
} from './theme.ts';

test('parseThemeMode accepts only explicit light/dark values', () => {
  assert.equal(parseThemeMode('dark'), 'dark');
  assert.equal(parseThemeMode('light'), 'light');
  assert.equal(parseThemeMode(null), null);
  assert.equal(parseThemeMode('invalid'), null);
});

test('resolveInitialTheme honors saved preference before OS preference', () => {
  assert.equal(resolveInitialTheme('dark', false), 'dark');
  assert.equal(resolveInitialTheme('light', true), 'light');
  assert.equal(resolveInitialTheme(null, true), 'dark');
  assert.equal(resolveInitialTheme(null, false), 'light');
  assert.equal(resolveInitialTheme('corrupt', true), 'dark');
});

test('toggleThemeMode switches between light and dark cleanly', () => {
  assert.equal(toggleThemeMode('light'), 'dark');
  assert.equal(toggleThemeMode('dark'), 'light');
});
