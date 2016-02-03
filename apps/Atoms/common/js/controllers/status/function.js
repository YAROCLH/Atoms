/**
 * 
 */

	
	$(document).ready(function(){
		init_status();
	});
	
	
	
	function init_status(){
		status_js=true;
		var data_status="idUser="+global_UserId;
		jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},6000);
		});
		/*$.when(get_Data(Status_Json,data_status)).then(function(status_data){
			status_display(status_data);
		});*/
	}
	
	function status_display(status_data){
		for(var i=0;i<status_data.length;i++){
			var badge="#Cat"+(i+1);var percent="#Cat_percent"+(i+1);
			$(badge).attr("data-percent",(status_data[i].Score*10));
			$(percent).val((status_data[i].Score*10));
		}
		
	}