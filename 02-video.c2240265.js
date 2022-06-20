const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(e=>{const{seconds:t}=e;localStorage.setItem("videoplayer-current-time",t)}));const o=localStorage.getItem("videoplayer-current-time");console.log(o),t.setCurrentTime(o).then((function(e){}));
//# sourceMappingURL=02-video.c2240265.js.map
