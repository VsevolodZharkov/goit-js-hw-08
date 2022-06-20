
	// const _ = require('lodash');
	const iframe = document.querySelector('iframe');

  const player = new Vimeo.Player(iframe);

  player.on('timeupdate', event => {
  const { seconds } = event;
		
	localStorage.setItem('videoplayer-current-time', seconds)
});

	const theme = localStorage.getItem("videoplayer-current-time");
	console.log(theme);
	player
  .setCurrentTime(theme)
  .then(function (seconds) {
  })


