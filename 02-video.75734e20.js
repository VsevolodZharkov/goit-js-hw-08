const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(e=>{const{seconds:t}=e;localStorage.setItem("videoplayer-current-time",t)}));const o=localStorage.getItem("videoplayer-current-time");console.dir(o),t.setCurrentTime(o).then((function(e){}));
//# sourceMappingURL=02-video.75734e20.js.map
