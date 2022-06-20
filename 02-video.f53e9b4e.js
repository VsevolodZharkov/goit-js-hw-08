var iframe=document.querySelector("iframe"),player=new Vimeo.Player(iframe);player.on("timeupdate",(function(e){var r=e.seconds;localStorage.setItem("videoplayer-current-time",r)}));var theme=localStorage.getItem("videoplayer-current-time");console.dir(theme),player.setCurrentTime(theme).then((function(e){}));
//# sourceMappingURL=02-video.f53e9b4e.js.map
