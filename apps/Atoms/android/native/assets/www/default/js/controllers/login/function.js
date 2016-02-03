
/* JavaScript content from js/controllers/login/function.js in folder common */



	function DoLogin(user,pass){
		
		var data_login="UserName="+user+"&UserPass="+pass;
		$.when(get_Data(Login_Json,data_login)).then(function(login_data){
			if(login_data[0].id==0){DoFail(0);}
			else{
			if(login_data[0].id==-1){DoFail(-1)}
			else{
				console.log(">>Login "+user+pass);
				$.when(DoSuccess(login_data)).then(function(){
					setView("index", index_js, false);
				});
			}}
		});
	}
	
	function DoFail(ErrCode){
		if(ErrCode==0){
		$("#Password").val("");
		alert("User Not Found or Wrong Password");
		}else if(ErrCode==-1){alert("Something Went Wrong Please Try Again Later")}
		
	}
	
	function DoSuccess(login_data){
		global_UserId=login_data[0].id;
		global_UserName=login_data[0].Name;
	}