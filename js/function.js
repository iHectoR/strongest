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
//    $('.progress-bars input').change(function(){
//        var spoilerHeight = $('+.spoiler>.spoiler-content>.spoiler-body',this).outerHeight();
//        var c = this.checked ? spoilerHeight : 0;
////        alert(c);
//        $('.spoiler-content').css('max-height', c);
//    });
    $(document).ready(function() {
        if ($('.progress-bars input').is(':checked') == true){
            var spoilerHeight = $('input:checked+.spoiler>.spoiler-content>.spoiler-body').outerHeight();
            $('input:checked+.spoiler>.spoiler-content').css('max-height', spoilerHeight);
        }
    });
    $('.progress-bars input').change(function(){
        if ($('.progress-bars input').is(':checked') == true){
            var spoilerHeight = $('input:checked+.spoiler>.spoiler-content>.spoiler-body').outerHeight();
            $('input:checked+.spoiler>.spoiler-content').css('max-height', spoilerHeight);
            $('.spoiler-content:not(input:checked+.spoiler>.spoiler-content)').css('max-height', '0');
        }
    });
});