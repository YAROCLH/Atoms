
/* JavaScript content from js/controllers/categoryMenu.js in folder common */

/**
 * Variables Declaration
 */
		var CM_counter = 1;
		var CM_categoryData;
/**
 * Events
 */
		$(document).ready(function(){
			init_categoryMenu();
		});
		$(document).on('click','.CategoryOneClick',function(){
			if(CM_counter>1&&CM_counter<=CM_categoryData.length){
				CM_counter--;
				$("#CategoryName").html(CM_categoryData[CM_counter-1].Name);
				setCategory(CM_counter);	}else{}
		});
		
		$(document).on('click', ".CategoryThreeClick",function(){
			if(CM_counter>0 && CM_counter<CM_categoryData.length){
				CM_counter++;
				$("#CategoryName").html(CM_categoryData[CM_counter-1].Name);
				setCategory(CM_counter);	}else{}
		});
	
/**
 * Functions
 */
		function init_categoryMenu(){
			categoryMenu_js=true;
			$.when(get_Data(Categories_Json)).then(function(category_data){
				CM_categoryData=category_data;
				CM_counter=1;
				$("#CategoryName").html(CM_categoryData[CM_counter-1].Name);
			});
		}
		
		function setCategory(idCategory){
			$("#MainPanel").load("views/AllViews/category.html",function(){
				init_category(idCategory);
			});
		}
		