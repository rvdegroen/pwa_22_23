// src: https://stackoverflow.com/questions/55925496/pwa-best-practice-web-or-local-fonts/66132921#66132921

// is triggered when the service worker is first installed.
self.addEventListener('install', function (e) {
	// (waitUntil) method ensures that the service worker will stay active on the background and doesn't become idle until the cache has been "filled" with the assigned files.
	e.waitUntil(
		// (caches.open) method creates a new cache called "the-office".
		caches
			.open('the-office')
			.then(function (cache) {
				// (cache.adAll) method adds a list of files to the cache.
				return cache.addAll([
					'/',
					'/manifest.json',
					'/fonts/work-sans-v18-latin-regular.woff',
					'/fonts/work-sans-v18-latin-regular.woff2',
					'/style/style.css',
					'/style/variables.css',
					'/offline/offline.html',
					'/images/offline.png',
				]);
			})
			.catch(function (error) {
				// Log any errors that occur while caching files to the console.
				console.error('Failed to cache files:', error);
			})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches
			.match(event.request)
			.then(function (response) {
				// if the request is going to this url, it will not cache it
				if (event.request.url.includes('/api/quotes') || event.request.url.endsWith('/game')) {
					// if we're requesting an html page (document), it will not cache it to show an offline page (the pages are generated dynamically so they cannot be cached)
					// if (event.request.destination === "document") {

					return fetch(event.request);
				}
				// If the resource is in the cache, it is returned, otherwise, the resource is fetched using the `fetch` method.
				return (
					response ||
					// add: return response only if im offline
					fetch(event.request).then(function (fetchResponse) {
						// The fetched response is cloned to be stored in the cache and returned as the response.
						const responseToCache = fetchResponse.clone();
						caches.open('the-office').then(function (cache) {
							cache.put(event.request, responseToCache);
						});
						return fetchResponse;
					})
				);
			})

			.catch(function (error) {
				console.error('Error fetching the resource:', error);
				// Return an offline fallback page or a custom error response
				return caches.match('/offline/offline.html');
			})
	);
});
