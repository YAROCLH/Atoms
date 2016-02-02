/**
 * 
 */

	$(document).on('click', ".Login",function(){
		var Login_id=$("#UserId").val();
		var Login_pass=$("#Password").val();
		DoLogin(Login_id,Login_pass);
	});
	
	