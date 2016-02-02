
/* JavaScript content from js/controllers/login/function.js in folder common */



	function DoLogin(user,pass){
		console.log("Login "+user+pass);
		var data_login="UserName="+user+"&UserPass="+pass;
		$.when(get_Data(Login_Json,data_login)).then(function(login_data){
			if(login_data[0].id==0){DoFail();}
			else{
				$.when(DoSuccess(login_data)).then(function(){
					setView("index", index_js, false);
				});
			}
		});
	}
	
	function DoFail(){
		alert("User Not Found");
	}
	
	function DoSuccess(login_data){
		global_UserId=login_data[0].id;
		global_UserName=login_data[0].Name;
	}