self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/404.html',
          '/css/normalize.css',
          '/css/main.css',
          '/css/bootstrap.min.css',
          '/css/animate.min.css',
          '/css/fontawesome-all.min.css',
          '/fonts/flaticon.css',
          '/css/owl.carousel.min.css',
          '/css/owl.theme.default.min.css',
          '/style.css',
          '/js/modernizr-3.6.0.min.js',
          '/js/jquery-3.3.1.min.js',
          '/js/popper.min.js',
          '/js/bootstrap.min.js',
          'js/plugins.js',
          'js/owl.carousel.min.js',
          'js/smoothscroll.min.js',
          'js/main.js',
          '/manifest.json',
          '/img/icons/icon-96x96.png',
          '/img/icons/icon-144x144.png',
          '/img/icons/icon-192x192.png',
          '/img/icons/icon-384x384.png',
          '/img/icons/icon-512x512.png'
        ])
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        return res;
      })
  );
});