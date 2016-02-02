
/* JavaScript content from js/controllers/category/function.js in folder common */

	$(document).ready(function(){
		init_category();
	});
	
	
	function init_category(){
		console.log("category loaded again");
		category_js=true;
		data_category="idUser="+global_UserId+"&idCategory=1";
		$.when(get_Data(Uncompleted_Json,data_category)).then(function(challenge_data){display_categoryData(challenge_data)});
		
	}
		
	function display_categoryData(category_data){
	    category_buffer="<div id='PaddinMain' class='Margin'>";
		var data_details="...";// temporal details
		for(var i=0;i<category_data.length;i++){
			category_buffer=category_buffer+
						  '<div class="row NoPaddingLR cat" style="padding-top:5%;">'+
					   	  '<div class="col-lg-4 MenuBackgroundG"><div class="row">'+
					      '<div class="col-xs-8" style="padding:0px; heigh:100%;">';
			if(category_data[i].Status=="True"){
				img_src="./images/done.png";
				category_status="doneClick"; }
			else{
				img_src="./images/do.png";
				category_status="doitClick"; }
		
			category_buffer=category_buffer+
						  '<div class="Margin"><span class="MainText2">'+category_data[i].Short+'</span></div>'+
		    			  '<div style="margin-top:10%;">'+
						  '<span class="LevelOne2 DetailsClickCategory NoPaddingLR">'+data_details+'</span>'+
						  '</div></div>'+
		    			  '<div class="col-xs-4 text-right NoPadding"><div class="text-right;">'+
				   	      '<span class="LevelOne">+'+category_data[i].Points+'</span>'+
		    			  '<div class="text-right Margin">'+
		    			  '<img src="'+img_src+'"value="'+category_data[i].id+'"class="img-responsive '+category_status+'"/>'+
		    			  '</div></div></div></div></div></div>'
		}
		category_buffer=category_buffer+"</div>";
		$("#PaddingMain").replaceWith(category_buffer);
	}
	
	
	
	
	
	
	