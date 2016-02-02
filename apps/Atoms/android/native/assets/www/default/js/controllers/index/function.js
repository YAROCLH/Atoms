
/* JavaScript content from js/controllers/index/function.js in folder common */

	$(document).ready(function(){
		init_index();
	});
		

	
	 function init_index(){
		 index_js=true; 
		 console.log("init with id: "+global_UserId);
		 var data_index="idUser="+global_UserId;
		 $.when(get_Data(myScore_Json,data_index)).then(function(score_data){
				$("#my_Complete").text(score_data[0].Completed);
				$("#my_Score").text(score_data[0].Position);
		 });
		
	 }
	 
	