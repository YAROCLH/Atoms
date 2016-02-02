
/* JavaScript content from js/controllers/category/bind.js in folder common */


$(document).on('click', ".doitClick",function(){
	var challengeId= $(this).attr('value');
	currentChallenge=challengeId;
	setView("challenge",challenge_js);
});

$(document).on('click', ".doneClick",function(){
	var challengeId= $(this).attr('value');
    alert("Challenge id: "+challengeId+" Done");
});