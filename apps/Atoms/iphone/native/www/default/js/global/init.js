
/* JavaScript content from js/global/init.js in folder common */

/**
 * Variables Declaration
*/

		// Json url   change this when web service is online
		//http://atoms.mybluemix.net/Pages/
		//http://127.0.0.1:12884/liberty-HelloWorld/Pages/
		var Server="http://127.0.0.1:12884/liberty-HelloWorld/Pages/",
			Login_Json=Server+"Login.jsp",
			myScore_Json=Server+"UserScore.jsp",
			Uncompleted_Json=Server+"Challenges.jsp",
			Status_Json=Server+"Status.jsp",
			TopRank_Json=Server+"Top10.jsp",
			MyRank_Json=Server+"UserRank.jsp",
			Categories_Json=Server+"Categories.jsp",
			Submit_Json=Server+"SubmitChallenge.jsp";
		
		//PassPhrase used for AES Encryption
		var PassPhrase="BB85B8C1336755EAD02368931499380D"; 
		var IV="31fbf42ee1d26041";
		//Device OS
		var devicePlatform;
		
		//Navigation variables
		var currentView="",
			lastView="";
		var prevView=[];
		var currentChallenge;
		var ChallengesView;
		var isLogin;
		//used for only load the js controllers once
		var index_js=false,
			challenge_js=false,
			badges_js=false,
			category_js=false,
			rank_js=false,
			categoryMenu_js=false,
			challengeMenu_js=false,
			menu_js=false,
			status_js=false,
			crop_js=false,
			login_js=false;
		
		//User Data
		var global_UserId;
		var global_UserName;
		
		// used to init a controller when the view is set again
		var recall;
		var img_uri;
	
	
	
	
	
	
	
	

	