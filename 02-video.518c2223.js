const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("timeupdate",(e=>{const{seconds:o}=e;console.log(o),localStorage.setItem("videoplayer-current-time",o)}));const t=localStorage.getItem("videoplayer-current-time");console.log(t),o.setCurrentTime(t);
//# sourceMappingURL=02-video.518c2223.js.map
