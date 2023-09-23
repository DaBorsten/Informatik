
// Registriere die Funktion als Dienstarbeiter
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
            console.log('Registrierung erfolgreich. Der Scope ist ' + registration.scope)
        })
}

const cacheName = 'cache-v1'
const cacheNameImages = 'cache-images-v1'
const resourcesToPrecache = [
    '/informatik/',
    'index.html',
    'html.html',
    'javascript.html',
    'datenbanken.html',
    'aufgaben.html',
    'css/style.css',
    'js/script.js',

    'js/filterDifficulty.js',
    'js/showCourses.js',
    'js/theme.js',

    'pageConstructor/courses.js',
    'pageConstructor/html.js',
    'pageConstructor/javascript.js',
    'pageConstructor/aufgaben.js',
    'pageConstructor/datenbanken.js',

    'json/courses.json',
    'json/html.json',
    'json/javascript.json',
    'json/aufgaben.json',
    'json/datenbanken.json',

    'webmanifest.json'
]
const imagesToPrecache = [
    // HTML
    'pictures/HTML_Grundstruktur.webp',
    'pictures/HTML_Tags.webp',
    'pictures/HTML_tabelle.webp',
    // JavaScript
    'pictures/JS_JavaScript_Verlinken.webp',
    'pictures/JS_Variablen.webp',
    'pictures/JS_Einfache_Datentypen.webp',
    'pictures/JS_logische_Operatoren.webp',
    'pictures/JS_if_else.webp',
    'pictures/JS_locale_globale_var.webp',
    'pictures/JS_kopfgesteuerte_Schleifen.webp',
    // Aufgaben
    'pictures/A_schrauben_HTML.webp',
    'pictures/A_schrauben_JS.webp',
    'pictures/A_BMI_If_Statements_HTML.webp',
    'pictures/A_BMI_If_Statements_JS.webp',
    'pictures/A_quadratische_Gleichung_HTML.webp',
    'pictures/A_quadratische_Gleichung_JS.webp',
    'pictures/A_zahlenraten_HTML.webp',
    'pictures/A_zahlenraten_JS.webp',
    'pictures/A_Collatz_HTML.webp',
    'pictures/A_Collatz_JS.webp',
    'pictures/A_Tabelle_dynamisch_erstellen_HTML.webp',
    'pictures/A_Tabelle_dynamisch_erstellen_JS.webp',
    'pictures/A_Elefanten_HTML.webp',
    'pictures/A_Elefanten_JS.webp',
    'pictures/A_Primzahlen_HTML.webp',
    'pictures/A_Primzahlen_JS.webp',
    'pictures/A_Tage_pro_Monat_JS.webp',
    'pictures/A_Sieb_des_Eratosthenes_HTML.webp',
    'pictures/A_Sieb_des_Eratosthenes_JS.webp',
    //Datenbanken
    'database/Musiksammlung.xlsx',
    'database/Aufgabe 4.webp',
    // Icons
    'icons/home.svg',
    'icons/close.svg',
    'icons/menu.svg',
    'icons/learn.svg',
    'icons/links.svg',
    'icons/download.svg',
    'icons/searchFail.svg',
    // Course Icons
    'icons/courseIcons/code.svg',
    'icons/courseIcons/database.svg',
    'icons/courseIcons/dataObject.svg',
    'icons/courseIcons/description.svg',
    // Theme
    'icons/light_mode.svg',
    'icons/dark_mode.svg',
    // Favicons
    'favicons/favicon.svg',
    'favicons/favicon.ico',
    'favicons/favicon-16x16.png',
    'favicons/favicon-32x32.png',
    'favicons/android-chrome-192x192.png',
    'favicons/android-chrome-512x512.png',
    'favicons/android-chrome-192x192-2.png',
    'favicons/android-chrome-512x512-2.png'
]

self.addEventListener('install', event => {
    console.log('Service worker install event!')
    event.waitUntil(
        Promise.all([
            caches.open(cacheName).then(cache => {
                return cache.addAll(resourcesToPrecache)
            }),
            caches.open(cacheNameImages).then(cache => {
                return cache.addAll(imagesToPrecache)
            })
        ])
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(async cachedResponse => {
            if (!navigator.onLine) {
                return cachedResponse;
            }

            try {
                const networkResponse = await fetch(event.request);

                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    // Falls die Antwort nicht gültig ist, z.B. 404, geben Sie sie direkt zurück
                    return networkResponse;
                }

                const cacheToUse = imagesToPrecache.includes(event.request.url) ? cacheNameImages : cacheName;

                // Überprüfen, ob die Ressource aktualisiert wurde
                const cachedLastModified = cachedResponse.headers.get('last-modified');
                const networkLastModified = networkResponse.headers.get('last-modified');

                if (cachedLastModified !== networkLastModified) {
                    // Ressource hat sich geändert, also Cache aktualisieren
                    caches.open(cacheToUse).then(cache => {
                        cache.put(event.request, networkResponse.clone());
                    });
                }

                return networkResponse;
            } catch {
                return cachedResponse;
            }
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Activate event!')
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName && cache !== cacheNameImages) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});