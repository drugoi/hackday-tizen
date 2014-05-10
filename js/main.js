$(window).load(function(){    
    $('.keep-playing-button').on('tap', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('ok');
        $('.game-message').fadeOut(100);
        $('.container__game').fadeIn();
    });
	
    function removeStartMessage() {
        $('.container__start').fadeOut(500);
        $('.container__game').fadeIn(700);
    }
    
    setTimeout(removeStartMessage(), 10000);
});
