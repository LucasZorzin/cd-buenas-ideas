//Navbar
let link=$('.navbar__item-link');

$('#sobre-mi').click(() => {
    $(link)[0].classList.add("navbar__item-link--active");
    setTimeout(()=>{$('#navbar')[0].classList.toggle("navbar-out");},200);
    $(link)[1].classList.remove("navbar__item-link--active");
    $(link)[2].classList.remove("navbar__item-link--active");
    $(link)[3].classList.remove("navbar__item-link--active");
});

$('#proyectos').click(() => {
    $(link)[1].classList.add("navbar__item-link--active");
    setTimeout(()=>{$('#navbar')[0].classList.toggle("navbar-out");},200);
    $(link)[0].classList.remove("navbar__item-link--active");
    $(link)[2].classList.remove("navbar__item-link--active");
    $(link)[3].classList.remove("navbar__item-link--active");
});

$('#planes').click(() => {
    $(link)[2].classList.add("navbar__item-link--active");
    setTimeout(()=>{$('#navbar')[0].classList.toggle("navbar-out");},200);
    $(link)[0].classList.remove("navbar__item-link--active");
    $(link)[1].classList.remove("navbar__item-link--active");
    $(link)[3].classList.remove("navbar__item-link--active");
});

$('#contactame').click(() => {
    $(link)[3].classList.add("navbar__item-link--active");
    setTimeout(()=>{$('#navbar')[0].classList.toggle("navbar-out");},200);
    $(link)[2].classList.remove("navbar__item-link--active");
    $(link)[1].classList.remove("navbar__item-link--active");
    $(link)[0].classList.remove("navbar__item-link--active");
});

// btn open & close
$('#open-btn').click(() => {
    $('#navbar')[0].classList.add("navbar-in");
    $('#navbar')[0].classList.remove("navbar-out");
});

$('#close-btn').click(() => {
    $('#navbar')[0].classList.remove("navbar-in");
    $('#navbar')[0].classList.toggle("navbar-out");
});
