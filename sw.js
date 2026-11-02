// Bilgi Evreni 4D Service Worker
const CACHE_NAME = 'be4d-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './assets/css/style.css',
  './assets/js/courses_data.js',
  './assets/js/app.js',
  './assets/js/lab3d.js',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // Do not cache API routes
  if (url.pathname.includes('/api/')) return;

  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request).then((res) => {
        if (res.status === 200 && (e.request.url.includes('/assets/') || e.request.url.endsWith('.html'))) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone)).catch(() => {});
        }
        return res;
      }).catch(() => cached);
    })
  );
});

