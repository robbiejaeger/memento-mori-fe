const applicationServerPublicKey = 'BC55I1Q9r_xqe9M0forl3l8bRqRPWa2fY43uaZS45ikGGrhOmwuKhhBQV2Ycv89f0vP48_TFur3Vs7rf9p93m0I'; // VAPID public key

function requestNotificationsPermission() {
  return Notification.requestPermission()
    .then(result => {
      console.log('Notification permission:', Notification.permission);
      return result;
    })
}

export function subscribeUser() {
  requestNotificationsPermission()
    .then(result => {
      if (result === 'granted' && 'serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function(reg) {

          reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: applicationServerPublicKey
          }).then(function(subscription) {
            console.log(subscription);
            // const uid = getUidForLoggedInUser();
            // submitOrUpdateSubscriptionOnServer(uid, subscription);
            // console.log('Subscription object:', subscription);
          }).catch(function(err) {
            // if (Notification.permission === 'denied') {
            //   userInfoMsg.textContent = 'This page has notifications disabled. Turn notificaions on.';
            //   console.warn('Permission for notifications was denied');
            // } else {
            //   userInfoMsg.textContent = 'Unable to subscribe to notifications for this device.';
            //   console.error('Unable to subscribe to push:', err);
            // }
          });
        });
      }
    })
    .catch(err => {
      console.error('Something went wrong with notification permission request:', err);
    });
}