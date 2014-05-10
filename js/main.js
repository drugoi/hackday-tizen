
$(window).load(function(){
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
	
    function removeStartMessage() {
        $('.container__start').fadeOut();
        $('.container__game').fadeIn();
    }
    
    setTimeout(removeStartMessage(), 3000);
	
	$('.contents').on("click", function(){
		$('#textbox').html($('#textbox').html() == "Basic" ? "Sample" : "Basic");				
	});
});