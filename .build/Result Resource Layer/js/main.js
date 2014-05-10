window.onload = function() {
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
    
    document.querySelectorAll('.container__start').style.display = 'none';
    document.querySelectorAll('.container__game').style.display = 'block'
//	
//	$('.contents').on("click", function(){
//		$('#textbox').html($('#textbox').html() == "Basic" ? "Sample" : "Basic");				
//	});   
}