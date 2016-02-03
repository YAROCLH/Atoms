
/* JavaScript content from js/controllers/categoryMenu/function.js in folder common */
/**
 * 
 */
	$(document).ready(function(){
		init_categoryMenu();
		//$("#CategoryName").empty();
	});
	
	function init_categoryMenu(){
		categoryMenu_js=true;
		
		$.when(get_Data(Categories_Json)).then(function(category_data){
			setCategories(category_data)
		});
	}
	function setCategories(category_data){
		var counter = 0;
		
		//var categories = ["Wellness", "Productivity","Social","Environment"];
		$(document).on('click', ".CategoryOneClick",function(){
			counter--;
			if(counter>=0 && counter < category_data.length){
				$("#CategoryName").html(category_data[counter].Name);
				setCategory(counter+1);
			}
			
		});
		$(document).on('click', ".CategoryThreeClick",function(){
			counter++;
			if(counter>=0 && counter < category_data.length){
				$("#CategoryName").html(category_data[counter].Name);
				setCategory(counter+1);
			}
			
		});
	}