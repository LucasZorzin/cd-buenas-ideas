$(window).on('scroll', function () {
    if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
        if (window.matchMedia("(min-width: 992px)").matches) {
            $('.float').stop(true).animate({ /* Sube 20 px desde el bottom */
                bottom: 20
            }, 250);
        }
        else {
            $('.float').stop(true).animate({ /* Sube 80 px desde el bottom */
                bottom: 80
            }, 0);
        }
    }
    else {
        if (window.matchMedia("(min-width: 992px)").matches) {
            $('.float').stop(true).animate({ /* En el resto de la página está a 20px */
                bottom: 20
            }, 150);
        }
        else {
            $('.float').stop(true).animate({ /* Sube 80 px desde el bottom */
                bottom: 20
            }, 0);
        }
    }
});