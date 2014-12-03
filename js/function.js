/**
 * Created by HectoR on 01.12.2014.
 */
jQuery(function($){
//    Display search field
    $('.search-icon').click(function(){
        $('.search').toggleClass('search-open');
    });
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
    $('.menu>ul>li').hover(
        function(){
        $('>.wrap-menu',this).css('height', $('.sub-menu>li').size()*35+30);
    },
        function(){
            $('>.wrap-menu',this).css('height', '0');
    }
    );
});