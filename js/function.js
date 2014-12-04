/**
 * Created by HectoR on 01.12.2014.
 */
jQuery(function($){
//    Display search field
//    $('.search-icon').click(function(){
//        $('.search').toggleClass('search-open');
//    });
//    Hide search field if empty
    $('.search-button').click(function(){
        if ($('.search-field').val().length==0){
        $('.search').toggleClass('search-open');
        return false;
        }
    });
//  Show Menu
    $('.menu-toggle').click(function(){
        $('body').toggleClass('menu-open');
//        $('.menu-open').css('height', $(window).width());
    });
    $('.menu a').click(function(){
       $('body').toggleClass('menu-open');
    });
    $('.menu>ul>li').hover(
        function(){
        $('>.wrap-menu',this).css('height', $('.sub-menu>li').size()*35+30);
    },
        function(){
            $('>.wrap-menu',this).css('height', '0');
    }
    );
//    Smooth scroll to id
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 600);
        return false;
    });
// Back to top Button
    $(document).ready(function(){
        // Appearing button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });
        //Click event to scroll to top
        $('.back-to-top').click(function(){
            $('html, body').animate({scrollTop : 0}, 600);
            return false;
        });
    });
});