//Navbar
let link=$('.navbar__item-link');

$('#sobre-mi').click(() => {
    $(link)[0].classList.toggle("navbar__item-link--active");
    $(link)[1].classList.remove("navbar__item-link--active");
    $(link)[2].classList.remove("navbar__item-link--active");
    $(link)[3].classList.remove("navbar__item-link--active");
});

$('#proyectos').click(() => {
    $(link)[1].classList.toggle("navbar__item-link--active");
    $(link)[0].classList.remove("navbar__item-link--active");
    $(link)[2].classList.remove("navbar__item-link--active");
    $(link)[3].classList.remove("navbar__item-link--active");
});

$('#planes').click(() => {
    $(link)[2].classList.toggle("navbar__item-link--active");
    $(link)[0].classList.remove("navbar__item-link--active");
    $(link)[1].classList.remove("navbar__item-link--active");
    $(link)[3].classList.remove("navbar__item-link--active");
});

$('#contactame').click(() => {
    $(link)[3].classList.toggle("navbar__item-link--active");
    $(link)[2].classList.remove("navbar__item-link--active");
    $(link)[1].classList.remove("navbar__item-link--active");
    $(link)[0].classList.remove("navbar__item-link--active");
});

// btn open & close
$('#open-btn').click(() => {
    $('#navbar')[0].classList.toggle("navbar-in");
    $('#navbar')[0].classList.remove("navbar-out");
});

$('#close-btn').click(() => {
    $('#navbar')[0].classList.remove("navbar-in");
    $('#navbar')[0].classList.toggle("navbar-out");
});
