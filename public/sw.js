self.addEventListener('push', event => { /* eslint-disable-line no-restricted-globals */
  const title = event.data.text();

  event.waitUntil(
    self.registration.showNotification(title, { /* eslint-disable-line no-restricted-globals */
      body: 'Do what is important to you.'
    })
  );
});
