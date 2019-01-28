const version = '0.3'
const cacheName = `highlighter-${version}`

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll([
      '/',
      '/index.html',
      '/main.css',
      '/bundle.js',
    ])
      .then(() => self.skipWaiting())),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => response || fetch(event.request)),
  )
})
