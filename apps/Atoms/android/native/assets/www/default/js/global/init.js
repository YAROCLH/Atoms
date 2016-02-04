
/* JavaScript content from js/global/init.js in folder common */

	// Json url   change this when web service is online
	var Server="http://atomsservice.w3ibm.mybluemix.net/Pages/"
	var Login_Json=Server+"Login.jsp";
	var myScore_Json=Server+"UserScore.jsp";
	var Uncompleted_Json=Server+"Challenges.jsp";
	var Status_Json=Server+"Status.jsp"
	var TopRank_Json=Server+"Top10.jsp";
	var MyRank_Json=Server+"UserRank.jsp";
	var Categories_Json=Server+"Categories.jsp";
	var Submit_Json=Server+"SubmitChallenge.jsp"
	
	//Navigation variables
	var currentView="";
	var lastView="";
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