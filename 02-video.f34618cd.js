!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",t)}));var r=localStorage.getItem("videoplayer-current-time");console.dir(r),t.setCurrentTime(r).then((function(e){}))}();
//# sourceMappingURL=02-video.f34618cd.js.map
