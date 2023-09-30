"use strict";
let online = navigator.onLine;
let notificationShown = false;
window.addEventListener('online', () => {
    updateStatus();
});
window.addEventListener('offline', () => {
    updateStatus();
});
function updateStatus() {
    online = navigator.onLine;
}
document.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains('actionButton')) {
        if (!online) {
            e.preventDefault();
            if (!notificationShown) {
                const offlineNotification = document.querySelector('.offline');
                if (offlineNotification) {
                    offlineNotification.dataset.offline = online ? 'false' : 'true';
                    notificationShown = true;
                    setTimeout(() => {
                        offlineNotification.dataset.offline = 'false';
                        notificationShown = false;
                    }, 3000);
                }
            }
        }
    }
});
