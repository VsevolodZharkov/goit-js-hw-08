import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
// const _ = require('lodash');
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(onTime, 1000)
);
function onTime (event) {
	const { seconds } = event;
	console.log(seconds);
	localStorage.setItem('videoplayer-current-time', seconds);
}
const theme = localStorage.getItem('videoplayer-current-time');
console.log(theme);
player.setCurrentTime(theme);
