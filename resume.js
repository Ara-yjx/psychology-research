function main(){
    var canvas = document.getElementById("resumecanvas");
    var ctx = canvas.getContext("2d");
    var imageData = window.sessionStorage.getItem("mk");
    ctx.drawImage(imageData, 0, 0)
}
main()
