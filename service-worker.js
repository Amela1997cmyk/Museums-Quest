const CACHE_NAME = 'graz-quiz-v1';
const urlsToCache = [
    './',
    'index.html',
    'impressum.html',
    'manifest.json',
    'Uhrturm.png',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap'
];

// Installation: Cache wichtige Assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache).catch(err => {
                console.warn('Fehler beim Caching einiger Assets:', err);
                // Nicht-kritische Assets skippen
                return cache.addAll(
                    urlsToCache.filter(url => !url.includes('fonts.googleapis'))
                );
            });
        })
    );
    self.skipWaiting();
});

// Activation: Alte Caches löschen
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch: Cache-First-Strategie
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // Aus Cache laden, wenn vorhanden
            if (response) {
                return response;
            }
            // Sonst vom Netzwerk abrufen
            return fetch(event.request)
                .then(response => {
                    // Nicht-Fehlerresponses in Cache speichern
                    if (!response || response.status !== 200 || response.type === 'error') {
                        return response;
                    }
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache);
                    });
                    return response;
                })
                .catch(() => {
                    // Offline: Fallback
                    console.warn('Offline – versuche Cache zu nutzen');
                    return caches.match('index.html');
                });
        })
    );
});

