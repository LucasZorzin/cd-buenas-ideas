//Navbar
let link=$('.nav-link');

$('#sobre-mi-nav').click(() => {
    $(link)[0].classList.toggle("nav-link--active");
	setTimeout(()=>{$('#navbarResponsive')[0].classList.remove("show");},350);
	setTimeout(()=>{$(link)[0].classList.remove("nav-link--active");},400);
    $(link)[1].classList.remove("nav-link--active");
    $(link)[2].classList.remove("nav-link--active");
    $(link)[3].classList.remove("nav-link--active");
});

$('#planes-nav').click(() => {
    $(link)[1].classList.toggle("nav-link--active");
	setTimeout(()=>{$('#navbarResponsive')[0].classList.remove("show");},350);
	setTimeout(()=>{$(link)[1].classList.remove("nav-link--active");},400);
    $(link)[0].classList.remove("nav-link--active");
    $(link)[2].classList.remove("nav-link--active");
    $(link)[3].classList.remove("nav-link--active");
});

$('#clientes-nav').click(() => {
    $(link)[2].classList.toggle("nav-link--active");
	setTimeout(()=>{$('#navbarResponsive')[0].classList.remove("show");},350);
	setTimeout(()=>{$(link)[2].classList.remove("nav-link--active");},400);
    $(link)[0].classList.remove("nav-link--active");
    $(link)[1].classList.remove("nav-link--active");
    $(link)[3].classList.remove("nav-link--active");
});