const version = "0.7";
var staticCacheName = version + "staticfiles";

// install the serviceWorker
addEventListener("install", function(installEvent) {
  skipWaiting();
  installEvent.waitUntil(
    caches.open(staticCacheName).then(function(staticCache) {
      return staticCache.addAll([
        "./css/style.0.1.min.css",
        "./js/scripts.0.1.min.js",
        "./offline.html"
      ]);
    })
  );
});

// fetch event, or...the magic
addEventListener("fetch", function(fetchEvent) {
  var request = fetchEvent.request;
  fetchEvent.respondWith(
    caches
      .match(request)
      .then(function(responseFromCach) {
        if (responseFromCach) {
          return responseFromCach;
        } else {
          return fetch(request);
        }
      })
      .catch(function(error) {
        return caches.match("./offline.html");
      })
  );
});

// deleting an old cache
addEventListener("activate", function(activateEvent) {
  activateEvent.waitUntil(
    // clean up
    caches
      .keys()
      .then(cacheNames => {
        // loop through the cacheNames array
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName != staticCacheName) {
              // this cacheName needs to go
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(function() {
        return clients.claim();
      })
  );
});
