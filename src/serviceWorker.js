export function registerSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = '/service-worker.js';
  
      navigator.serviceWorker.register(swUrl)
        .then(reg => {
          console.log('Service worker successfully registered.');
        })
        .catch(err => {
          console.error('Service worker failed to register:', err);
        });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
