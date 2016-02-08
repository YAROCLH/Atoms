
/**
 * Variables Declaration
 */

/**
 * Events
 */
		$(document).ready(function(){
			init_status();
		});
/**
 * Functions
 */
		function init_status(){
			status_js=true;
			var data_status="idUser="+global_UserId;
			/*$.when(get_Data(Status_Json,data_status)).then(function(status_data){
				status_display(status_data);
			});*/
		}