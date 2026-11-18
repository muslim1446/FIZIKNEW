import assert from 'node:assert/strict';
import test from 'node:test';
import {
  classifyFontCacheTarget,
  isIOSUserAgent,
  shouldWarmCacheUrl,
} from './pwa.ts';

test('isIOSUserAgent detects iPhone/iPad/iPod and excludes desktop/Android', () => {
  assert.equal(
    isIOSUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)'),
    true
  );
  assert.equal(
    isIOSUserAgent('Mozilla/5.0 (iPad; CPU OS 16_6 like Mac OS X)'),
    true
  );
  assert.equal(
    isIOSUserAgent('Mozilla/5.0 (Linux; Android 14; Pixel 8)'),
    false
  );
  assert.equal(
    isIOSUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36'),
    false
  );
});

test('shouldWarmCacheUrl accepts same-origin app assets and rejects raw PDFs and cross-origin URLs', () => {
  const origin = 'http://localhost:3000';
  assert.equal(shouldWarmCacheUrl('http://localhost:3000/', origin), true);
  assert.equal(shouldWarmCacheUrl('http://localhost:3000/src/App.tsx', origin), true);
  assert.equal(shouldWarmCacheUrl('http://localhost:3000/assets/index-abc.js', origin), true);
  assert.equal(
    shouldWarmCacheUrl('http://localhost:3000/assets/aistudio/FIZIK_TING_4.pdf', origin),
    false
  );
  assert.equal(shouldWarmCacheUrl('http://localhost:3000/guide.pdf', origin), false);
  assert.equal(shouldWarmCacheUrl('http://localhost:3000/__vite_ping', origin), false);
  assert.equal(
    shouldWarmCacheUrl('https://fonts.googleapis.com/css2?family=DM+Sans', origin),
    false
  );
});

test('classifyFontCacheTarget separates Google Fonts CSS and woff2 buckets cleanly', () => {
  assert.equal(
    classifyFontCacheTarget('https://fonts.googleapis.com/css2?family=DM+Sans'),
    'google-fonts-cache'
  );
  assert.equal(
    classifyFontCacheTarget('https://fonts.gstatic.com/s/dmsans/v14/abc.woff2'),
    'gstatic-fonts-cache'
  );
  assert.equal(classifyFontCacheTarget('http://localhost:3000/src/App.tsx'), null);
});

