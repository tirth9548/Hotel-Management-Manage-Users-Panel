const CACHE_NAME = 'manage-users-v1';
const urlsToCache = [
  './Manage Users.html',
  './Manage Users.js',
  './admin.css',
  './Hotel Grand Plaza Logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
