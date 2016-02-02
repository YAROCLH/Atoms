
/* JavaScript content from js/controllers/index/bind.js in folder common */
/**
 * 
 */
    $(document).on('click', ".ChallengesClick",function(){
			setView("category",category_js);	
			
	});

	$(document).on('click', ".PositionClick",function(){
			setView("yourRank",rank_js);
		}
	);

	$(document).on('click', ".LevelsClick",function(){
			alert('Levels');
		}
	);

	$(document).on('click', ".RulesClick",function(){
			alert('Rules ');
		}
	);