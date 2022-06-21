
	// const _ = require('lodash');
	const iframe = document.querySelector('iframe');

  const player = new Vimeo.Player(iframe);

  player.on('timeupdate', _.throttle((event) => {
  const { seconds } = event;
		console.log(seconds);
	localStorage.setItem('videoplayer-current-time', seconds);
}, 1000));



	const theme = localStorage.getItem("videoplayer-current-time");
	console.log(theme);
	player
  .setCurrentTime(theme);



