/**
 * Events
*/
		document.addEventListener("backbutton", onBackKeyDown, false);
		function onBackKeyDown() {
			var prev=prevView.pop();
		    setView(prev,true,true);
		}
	
/**
 * Functions
*/
	
		function setView(newView,status_view,back){
			if(newView==null||newView==""){}else{
				if(newView=="login"){
					$("#MainBody").load("views/AllViews/login.html"); 
				}else{
					$("#MainPanel").load("views/AllViews/"+newView+".html",function(){
					if(!back||back==null&&newView!="challenge"){	prevView.push(currentView);	}
					currentView=newView;
					});
				}
			loadJS(newView,status_view);
			loadMenu(newView);	}
		}

		function loadJS(newView,status_view){
			if(!status_view){
				$.getScript("js/controllers/"+newView+".js");
				console.log(">>>Loading "+newView+" for 1st time");
			}else{
				console.log(">>>Reloading "+newView);
				recall = new Function("init_"+newView+"()");
				recall();  }
		}
		
		function loadMenu(newView){
			switch (newView){
				case "login":
				break;
				case "category":
					$("#MenuPanel").load("views/Menu/menu.html"); 
					$("#NavegacionCatego").load("views/Menu/categoryMenu.html"); 
					loadJS("categoryMenu",categoryMenu_js);
				break;
				case "challenge":
					$("#MenuPanel").load("views/Menu/challengeMenu.html"); 
					$("#NavegacionCatego").empty();
					loadJS("challengeMenu",challengeMenu_js);
				break;
				default:
					$("#MenuPanel").load("views/Menu/menu.html");
					$("#NavegacionCatego").empty();
					loadJS("menu",menu_js);
			}	
		}
		
		function get_Data(url_json,data){
			console.log("Recived Data: "+data);
			var json_data;
			return $.when( 
					$.ajax({
					url:url_json,
					dataType: 'json', 
				    data: data,
					success:function(json){
						console.log("get Data Success");
						json_data=$.map(json, function(elements) {return elements});},
					error:function(jqxhr, textStatus, error ){  
						var err = textStatus + ", " + error;
				        console.log( "Request Failed: " +url_json+" Error: "+ err );}
					})).then(function(){
				  return json_data;
			  });
		}
		

