self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((caches) => {
      return caches.addAll([
        "./index.html",
        "./src/master.css",
        "./image/image128.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log(`fetch data ${e.request.url}`);
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
