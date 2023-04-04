
const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const refs = {
    notification: document.querySelector('.js-alert'),
};

showNotification();

refs.notification.addEventListener('click', onNotificationClick);


function onNotificationClick() {
    hideNotification();
    clearTimeout(timeoutId);
}

function showNotification() {
    refs.notification.classList.add('is-visible');

   timeoutId = setTimeout(() => {
        console.log('треба закрити сповіщення');
        hideNotification();
    }, NOTIFICATION_DELAY);
}

function hideNotification() {
    refs.notification.classList.remove('is-visible');
}