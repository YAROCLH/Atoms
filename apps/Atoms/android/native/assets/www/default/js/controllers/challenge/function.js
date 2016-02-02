
/* JavaScript content from js/controllers/challenge/function.js in folder common */

	$(document).ready(function(){
		init_challenge();
	});
		
	
	function init_challenge(){
		challenge_js=true;
		console.log("Challenge again");
		//alert("This is the challenge: "+currentChallenge);
	}
	
	
	function takePicture(){
		navigator.camera.getPicture(onSucces,onFail, {
		quality: 50, 
		sourceType: source,
		destinationType: destinationType.FILE_URI
		});
	}
	
	function onSucces(image_uri){
		img_uri=image_uri;
		console.log("Camera Success"+image_uri);
		setView("crop",crop_js);
		
	}

	function onFail(message){
		 console.log("Camera Failed: "+ message);
	}