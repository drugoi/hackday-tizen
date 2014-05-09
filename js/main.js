
$(window).load(function(){
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
	
	$('#tel').click();
	
//	$('.contents').on("click", function(){
//		$('#textbox').html($('#textbox').html() == "Hackday" ? "Sample" : "Hackday");				
//	});
});