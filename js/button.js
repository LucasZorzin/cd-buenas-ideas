$(window).on('scroll', function () {
    if (($(window).scrollTop() + $(window).height()) == $(document).height()) { /* Si estamos al final de la página */ 
        $('.float').stop(true).animate({ /* Sube 80 px desde el bottom */ 
            bottom: 80
        }, 250);
    } else { 
        $('.float').stop(true).animate({ /* En el resto de la página está a 20px */
            bottom: 20
        }, 200);
    }
});