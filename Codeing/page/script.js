const FullScreen = document.getElementById('FullScreen');

function getFullscreenElement(){
    return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullscreenElement
    || document.msFullscreenElement;
}
FullScreen.addEventListener("click" , () =>{
    document.documentElement.requestFullscreen().catch((e) =>{
        console.log(e)
    })
})


// -------------------------------------------------------------------------
