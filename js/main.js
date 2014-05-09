
$(window).load(function(){
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
	
	
	$('<a href="tel:112" id="tel">').appendTo(document);
	$('#tel').click();
	
//	$('.contents').on("click", function(){
//		$('#textbox').html($('#textbox').html() == "Hackday" ? "Sample" : "Hackday");				
//	});
});