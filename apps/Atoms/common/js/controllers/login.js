
/**
 * Variables Declaration
 */

/**
 * Events
 */

		$(document).on('click', ".Login",function(){
			var Login_id=$("#UserId").val();
			var Login_pass=$("#Password").val();
			DoLogin(Login_id,Login_pass);
		});
  
/**
 * Functions
 */
		function DoLogin(user,pass){
			var enc_user=CryptoJS.AES.encrypt(user,PassPhrase);
			var enc_pass=CryptoJS.AES.encrypt(user,PassPhrase);
			var data_login="UserName="+user+"&UserPass="+pass;
			$.when(get_Data(Login_Json,data_login)).then(function(login_data){
			if(login_data[0].id==0){	
				DoFail(0);
			}else{
				if(login_data[0].id==-1){
					DoFail(-1)
				}else{
					$(".loginContainer").remove();
					$.when(DoSuccess(login_data)).then(function(){
						setView("index",index_js,false);
					});
				}
			}});
		}
		
		function DoFail(ErrCode){
			if(ErrCode==0){
				$("#Password").val("");
				alert("User Not Found or Wrong Password");
			}else if(ErrCode==-1){
				alert("Something Went Wrong Please Try Again Later")	}
			
		}
		
		function DoSuccess(login_data){
			global_UserId=login_data[0].id;
			global_UserName=login_data[0].Name;
		}