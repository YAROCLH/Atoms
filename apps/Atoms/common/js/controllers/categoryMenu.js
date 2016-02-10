
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
		$(".CategoryOneClick").on("click",function(){
			counter--;
			if(counter>=0 && counter < category_data.length){
				$("#CategoryName").html(category_data[counter].Name);
				setCategory(counter+1);
			}
			
		});
        $(".CategoryThreeClick").on("click",function(){
			counter++;
			if(counter>=0 && counter < category_data.length){
				$("#CategoryName").html(category_data[counter].Name);
				setCategory(counter+1);
			}
			
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
		
