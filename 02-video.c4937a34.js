!function(){var e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("timeupdate",(function(e){var o=e.seconds;console.log(o),localStorage.setItem("videoplayer-current-time",o)}));var t=localStorage.getItem("videoplayer-current-time");console.log(t),o.setCurrentTime(t)}();
//# sourceMappingURL=02-video.c4937a34.js.map
