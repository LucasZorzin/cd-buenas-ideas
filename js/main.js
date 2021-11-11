//Navbar
let link=$('.navbar__item-link');

$('#sobre-mi-nav').click(() => {
    $(link)[0].classList.add("navbar__item-link--active");
    setTimeout(()=>{$('#navbar')[0].classList.toggle("navbar-out");},200);
    $(link)[1].classList.remove("navbar__item-link--active");
    $(link)[2].classList.remove("navbar__item-link--active");
    $(link)[3].classList.remove("navbar__item-link--active");
});

$('#proyectos-nav').click(() => {
    $(link)[1].classList.add("navbar__item-link--active");
    setTimeout(()=>{$('#navbar')[0].classList.toggle("navbar-out");},200);
    $(link)[0].classList.remove("navbar__item-link--active");
    $(link)[2].classList.remove("navbar__item-link--active");
    $(link)[3].classList.remove("navbar__item-link--active");
});

$('#planes-nav').click(() => {
    $(link)[2].classList.add("navbar__item-link--active");
    setTimeout(()=>{$('#navbar')[0].classList.toggle("navbar-out");},200);
    $(link)[0].classList.remove("navbar__item-link--active");
    $(link)[1].classList.remove("navbar__item-link--active");
    $(link)[3].classList.remove("navbar__item-link--active");
});

$('#contactame-nav').click(() => {
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

//// CAROUSEL
$('.carousel-proyects').slick({
	dots: true,
	infinite: false,
	speed: 900,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed:4000,
	arrows: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});