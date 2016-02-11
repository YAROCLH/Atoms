
/* JavaScript content from js/controllers/index.js in folder common */

/**
 * Variables Declaration
 */
		var data_index
/**
 * Events
 */
		$(document).ready(function(){
			init_index();
			devicePlatform = device.platform;
			console.log(devicePlatform)
		});
		 $(document).on('click', ".ChallengesClick",function(){
				setView("category",category_js);		
		});

		$(document).on('click', ".PositionClick",function(){
				setView("yourRank",rank_js);
		});

		$(document).on('click', ".LevelsClick",function(){
			//alert('Levels: Inactive by Now');
		});

		$(document).on('click', ".RulesClick",function(){
			//alert('Rules: Inactive by Now');
		});
/**
 * Functions
 */
		function init_index(){
			index_js=true; 
			data_index="idUser="+Base64.encode(global_UserId);
			//data_index="idUser="+global_UserId;
			$.when(get_Data(myScore_Json,data_index)).then(function(score_data){
				$("#my_Complete").text(score_data[0].Completed);
				$("#my_Score").text(score_data[0].Position);
			 });
			 
		 }