const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",_.throttle((e=>{const{seconds:t}=e;console.log(t),localStorage.setItem("videoplayer-current-time",t)}),1e3));const o=localStorage.getItem("videoplayer-current-time");console.log(o),t.setCurrentTime(o);
//# sourceMappingURL=02-video.dc82c5e6.js.map
