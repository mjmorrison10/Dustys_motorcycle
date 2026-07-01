const CACHE_NAME = 'dustys-moto-v7';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/llms.txt',
  '/content/santiago-canyon-ride-ready-checklist.md',
  '/content/pre-purchase-motorcycle-inspection-checklist.md',
  '/content/dustys-motorcycle-service.md',
  '/mcp-actions.json',
  '/agent-permissions.json',
  '/llms-full.txt',
  '/sitemap.xml',
  '/robots.txt',
  '/images/favicon.png',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/hero_bg.webp',
  '/images/yelp_2.webp',
  '/guides/pre-purchase-motorcycle-inspection-checklist.html',
  '/guides/santiago-canyon-ride-ready-checklist.html',
  '/guides/how-to-choose-motorcycle-mechanic-orange-ca.html',
  '/content/how-to-choose-motorcycle-mechanic-orange-ca.md',
  '/guides/motorcycle-repair-pricing-orange-ca.html',
  '/content/motorcycle-repair-pricing-orange-ca.md'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
