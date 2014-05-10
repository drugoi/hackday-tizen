$(window).load(function(){
    $(document).on('tap', function(e) {
        alert('Yo!')        
    });
	
    function removeStartMessage() {
        $('.container__start').fadeOut(500);
        $('.container__game').fadeIn(700);
    }
    
    setTimeout(removeStartMessage(), 10000);
});
