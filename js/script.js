$(document).ready(function (){
    
    
   $(window).scroll(function() {
    if ($(this).scrollTop()>80) {
        $('.arrow-wrapper').fadeOut();
     } else {
      $('.arrow-wrapper').fadeIn();
     }
 }); 
    
   function fullScreen() {
       $("#hero").css({
           width:$(window).width(),
           height:$(window).height()*.4
       });
   } 
    fullScreen();

    $(window).resize(function(){
        fullScreen();
    });
    
    $('#hamb-nav').click(function(){
        $(this).toggleClass('open');
        $('.menu').fadeToggle('400');
	   });
	if ($(window).width() < 1170){
        $('.menu').hide();
    } else {
        $('.menu').show();
    }
    
    $('.subMenu').click(function(){
    if ($('#subMenuContent').contains('.openSubMenu'){
        $('#subMenuContent').removeClass('openSubMenu', 700);
    } else {
        $('#subMenuContent').addClass('openSubMenu', 700);
        });
        
    
});
$(window).resize(function() {
    if ($(window).width() < 1170){
        $('#hamb-nav').removeClass('open');
        $('.menu').hide();
    } else {
        $('.menu').show();
    }
});




