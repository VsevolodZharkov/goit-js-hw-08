!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",_.throttle((function(e){var t=e.seconds;console.log(t),localStorage.setItem("videoplayer-current-time",t)}),1e3));var o=localStorage.getItem("videoplayer-current-time");console.log(o),t.setCurrentTime(o)}();
//# sourceMappingURL=02-video.5e07263d.js.map
