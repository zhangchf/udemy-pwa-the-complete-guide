// check if service worker is supported by the browser
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function() {
            console.log("Service worker registered");
        })
}