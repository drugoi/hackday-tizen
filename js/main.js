$(window).load(function(){    
    $(document).on('tap', function(e) {
        $('.game-message').fadeIn();
    });
    $('.keep-playing-button').on('tap', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.game-message').fadeOut(100);
    });
	
    function removeStartMessage() {
        $('.container__start').fadeOut(500);
        $('.container__game').fadeIn(700);
    }
    setTimeout(removeStartMessage(), 10000);
});
