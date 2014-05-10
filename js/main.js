$(window).load(function(){
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back") {
//             tizen.application.getCurrentApplication().exit();
            alert('Yo!')
        }
    });
	
    function removeStartMessage() {
        $('.container__start').fadeOut(500);
        $('.container__game').fadeIn(700);
    }
    
    setTimeout(removeStartMessage(), 10000);
	
//	$('.contents').on("click", function(){
//		$('#textbox').html($('#textbox').html() == "Basic" ? "Sample" : "Basic");				
//	});
});
