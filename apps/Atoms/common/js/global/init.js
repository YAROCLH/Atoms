
/**
 * Variables Declaration
*/

		// Json url   change this when web service is online
		var Server="http://atoms.mybluemix.net/Pages/",
			Login_Json=Server+"Login.jsp",
			myScore_Json=Server+"UserScore.jsp",
			Uncompleted_Json=Server+"Challenges.jsp",
			Status_Json=Server+"Status.jsp",
			TopRank_Json=Server+"Top10.jsp",
			MyRank_Json=Server+"UserRank.jsp",
			Categories_Json=Server+"Categories.jsp",
			Submit_Json=Server+"SubmitChallenge.jsp";
		
		//PassPhrase used for AES Encryption
		var PassPhrase="1q2w3e4r5t"; 
		
		//Device OS
		var devicePlatform;
		
		//Navigation variables
		var currentView="",
			lastView="";
		var prevView=[];
		var currentChallenge;
		var ChallengesView;
		
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
	
	
	
	
	
	
	
	

	