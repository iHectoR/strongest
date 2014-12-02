/**
 * Created by HectoR on 01.12.2014.
 */
jQuery(function($){
    $('.search-icon').click(function(){
        $('.search').toggleClass('search-open');
    });
    $('.search-button').click(function(){
        if ($('.search-field').val().length==0){
        $('.search').toggleClass('search-open');
        return false;
        }
    });

});