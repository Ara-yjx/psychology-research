function main() {
    document.querySelector('#field').innerHTML = 
		`<video id="video" style="width:640px;height:360px" autoplay></video>` + 
		`<canvas id="canvas"/>`

	videoConstraints = { width: 1366, height: 768 };
	videoNode = document.querySelector('#video');
	navigator.mediaDevices.getUserMedia({ audio: true, video: videoConstraints })
	.then( stream =>{
		videoNode.srcObject = stream;
		videoNode.play();
	})
	
	document.querySelector('#in').onclick = ()=>{	
		const canvas = document.querySelector('#canvas');
		const context = canvas.getContext('2d');
		canvas.width = 640;
		canvas.height = 360;
		context.drawImage(videoNode, 0, 0, canvas.width, canvas.height);
		console.log(canvas.toDataURL("image/jpeg"))
		
		dataURL = canvas.toDataURL("image/jpeg")
		window.sessionStorage.setItem("mk", 666);
		console.log(window.sessionStorage.getItem("mk"));	
	}	
}

main();

// Author: Jiaxi Ye - https://github.com/ara-yjx
