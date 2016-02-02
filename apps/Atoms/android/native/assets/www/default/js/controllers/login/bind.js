
/* JavaScript content from js/controllers/login/bind.js in folder common */
/**
 * 
 */

	$(document).on('click', ".Login",function(){
		var Login_id=$("#UserId").val();
		var Login_pass=$("#Password").val();
		DoLogin(Login_id,Login_pass);
	});
	
	