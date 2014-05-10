$(window).load(function(){
    $(document).on('tap', function(e) {
        $('.container__game').fadeOut(100);
        $('.game-message').fadeIn();
    });
    
    $('.keep-playing-button').on('click', function(e) {
        $('.game-message').fadeOut(100);
        $('.container__game').fadeIn();
    });
	
    function removeStartMessage() {
        $('.container__start').fadeOut(500);
        $('.container__game').fadeIn(700);
    }
    
    setTimeout(removeStartMessage(), 10000);
});
