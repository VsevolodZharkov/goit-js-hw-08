!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",t)}));var o=localStorage.getItem("videoplayer-current-time");console.log(o),t.setCurrentTime(o).then((function(e){}))}();
//# sourceMappingURL=02-video.93b4e882.js.map
