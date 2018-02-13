
let deferredInstallPrompt = null;

// Register service worker here to make sure it's registered wherever the user first access the site.
// check if service worker is supported by the browser
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function() {
            console.log("Service worker registered");
        })
}

window.addEventListener("beforeinstallprompt", function(event) {
    console.log("beforeinstallprompt fired");
    deferredInstallPrompt = event;
})
