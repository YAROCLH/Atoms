
/* JavaScript content from js/controllers/challenge/function.js in folder common */

	$(document).ready(function(){
		init_challenge();
	});
		
	
	function init_challenge(){
		challenge_js=true;
		console.log("This is the challenge: "+currentChallenge);
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
		camera_success=true;
		//$('#AtomsModal').modal('show');
		$("#prefoto").attr("src",image_uri);
	}

	function onFail(message){
		 console.log("Camera Failed: "+ message);
	}
	function DoSubmit(){
		var comment=$("#commentFoto").val();
		if(camera_success&&comment!=""){
			var data_submit="idUser="+global_UserId+"&idChallenge="+currentChallenge+
							"&Attach="+comment+"&Photo=NO PHOTO BY NOW";
			$.when(get_Data(Submit_Json,data_submit)).then(function(challenge_data){
				if(challenge_data[0].STATUS==1){
					submitSuccess();
				}else{
					submitFail();
				}	
			});
		}else{
			alert("Photo and Comment is required");
		}
	}
	
	function submitSuccess(){
		setView("category", true, false);
		alert("Challenge Completed");
	}
	
	function submitFail(){
		setView("category", true, false);
		alert("Something Went Wrog Try Again Later");
	}
	
	