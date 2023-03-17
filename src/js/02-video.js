
var throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(function (event) {
    console.log('played the video!');
    localStorage.setItem('videoplayer-current-time', event.seconds);
}), 1000);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const currentPause = localStorage.getItem('videoplayer-current-time');

if (currentPause) {
    player.setCurrentTime(currentPause);
}

