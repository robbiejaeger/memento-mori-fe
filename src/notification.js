const applicationServerPublicKey = 'BHeDRim9JDOpnTUAfGZp2FfoA-3MAm_3RC-rql8YR8z0GfI1Oz1aXWPh6a1IrgxUPbTuk7wb49Wp5tbTYPADhlI'; // VAPID public key

function requestNotificationsPermission() {
  return Notification.requestPermission()
    .then(result => {
      console.log('Notification permission:', Notification.permission);
      return result;
    })
}

export function subscribeUser(uid) {
  return requestNotificationsPermission()
    .then(result => {
      if (result === 'granted' && 'serviceWorker' in navigator) {
        return navigator.serviceWorker.ready.then(function(reg) {
          return reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: applicationServerPublicKey
          }).then(function(subscription) {
            return submitOrUpdateSubscriptionOnServer(uid, subscription);
          }).catch(function(err) {
            if (Notification.permission === 'denied') {
              console.warn('Permission for notifications was denied');
              return 'This page has notifications disabled. Turn notifications on.';
            } else {
              console.error('Unable to subscribe to push:', err);
              return 'Unable to subscribe to notifications for this device.';
            }
          });
        });
      }
    })
    .catch(err => {
      console.error('Something went wrong with notification permission request:', err);
    });
}

function submitOrUpdateSubscriptionOnServer(uid, subscription) {
  return fetch('http://localhost:3001/subscriptions', {
    method: 'POST',
    body: JSON.stringify({ uid, subscription }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function(response) {
    if (response.ok) {
      response.json().then(function(message) { console.log(message); });
      return 'Your device has been signed up to be reminded!';
    } else {
      response.json().then(function(message) { console.log('Error:', message); });
      return 'Something went wrong with your reminder...';
    }
  })
  .catch(function(err) {
    console.error('Posting subscription failed:', err);
  });
}
