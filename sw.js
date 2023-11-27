// install event
self.addEventListener('install', (e) => {
  console.log('[Service Worker] installed');
});

// active event
self.addEventListener('active', (e) => {
  console.log('[Service Worker] actived', e);
});

// fetch event
self.addEventListener('fetch', (e) => {
  console.log('[Service Worker] fetched resource ' + e.request.url);
});