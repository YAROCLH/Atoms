

	function setView(newView,status_view,back){
		//console.log(">>>"+newView+status_view+"<<<");
		if(newView==null||newView==""){
			//loadJS(newView,status);
		}else{
		$("#MainPanel").load("views/AllViews/"+newView+".html",function(){
			//lastView=currentView;
			if(!back||back==null){
			prevView.push(currentView);}
			currentView=newView;
			//console.log(prevView);
		});
		loadJS(newView,status_view);
			if(newView=="category"){
				$("#MenuPanel").load("views/Menu/categoryMenu.html"); 
				loadJS("categoryMenu",categoryMenu_js);
			}else{
			if(newView=="challenge"){
				$("#MenuPanel").load("views/Menu/challengeMenu.html"); 
				loadJS("challengeMenu",challengeMenu_js);
				//alert("Challenge menu");
			}else{
				if(newView=="login"){}else{
				$("#MenuPanel").load("views/Menu/menu.html");
				loadJS("menu",menu_js);
				//console.log("MainMenu")
				}	
			}}}
	}
	
	function loadJS(newView,status_view){
	//	console.log("#>>>"+newView+status_view+"<<<");
		if(!status_view){
			$.getScript("js/controllers/"+newView+"/init.js");
			$.getScript("js/controllers/"+newView+"/bind.js");
			$.getScript("js/controllers/"+newView+"/function.js");
			console.log(">>>Loading "+newView+" for 1st time");
		}else{
			console.log(">>>Reloading "+newView);
			recall = new Function("init_"+newView+"()");//execute the init in the function controller of the view
			recall();  }
	}


	function get_Data(url_json,data){
		console.log("Recived Data: "+data);
		var json_data;
		return $.when( 
				$.ajax({
				url:url_json,
				dataType: 'json', 
			    data: data,
			    tryCount : 0,
			    retryLimit : 3,
				success:function(json){
					console.log("get Data Success");
					json_data=$.map(json, function(elements) {return elements});},
				error:function(jqxhr, textStatus, error ){  
					var err = textStatus + ", " + error;
			        console.log( "Request Failed: " + err );
					}
				})).then(function(){
			  return json_data;
		  });
	}
	
	document.addEventListener("backbutton", onBackKeyDown, false);
	function onBackKeyDown() {
		var prev=prevView.pop();
	   setView(prev,true,true);
	}

