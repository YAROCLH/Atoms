
/**
 * Variables Declaration
 */

/**
 * Events
 */
		$(document).on('click', ".BackClickMenu",function(){
			//setView("category",challengeMenu_js,true);
			SetLastView();
		});
		
		$(document).ready(function(){
			init_challengeMenu();
		});
/**
 * Functions
 */
		function init_challengeMenu(){
			challengeMenu_js=true;
		}
	