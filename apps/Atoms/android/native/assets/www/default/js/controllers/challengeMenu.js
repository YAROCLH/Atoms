
/* JavaScript content from js/controllers/challengeMenu.js in folder common */

/**
 * Variables Declaration
 */

/**
 * Events
 */
		$(document).on('click', ".BackClickMenu",function(){
			setView("category",challengeMenu_js);
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
	