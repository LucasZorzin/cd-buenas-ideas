// Loader
window.onload = () => {
    const contenedor = $("#loader")[0];
    contenedor.style.visibility = 'hidden';
}

//Navbar

if (window.matchMedia("(max-width: 992px)").matches) {

    let link = $('.nav-links');

    $('#sobre-mi-nav').click(() => {
        $(link)[0].classList.toggle("nav-link--active");
        setTimeout(() => { $('#navbarResponsive')[0].classList.remove("show"); }, 350);
        setTimeout(() => { $(link)[0].classList.remove("nav-link--active"); }, 400);
        $(link)[1].classList.remove("nav-link--active");
        $(link)[2].classList.remove("nav-link--active");
    });

    $('#planes-nav').click(() => {
        $(link)[1].classList.toggle("nav-link--active");
        setTimeout(() => { $('#navbarResponsive')[0].classList.remove("show"); }, 350);
        setTimeout(() => { $(link)[1].classList.remove("nav-link--active"); }, 400);
        $(link)[0].classList.remove("nav-link--active");
        $(link)[2].classList.remove("nav-link--active");
    });

    $('#clientes-nav').click(() => {
        $(link)[2].classList.toggle("nav-link--active");
        setTimeout(() => { $('#navbarResponsive')[0].classList.remove("show"); }, 350);
        setTimeout(() => { $(link)[2].classList.remove("nav-link--active"); }, 400);
        $(link)[0].classList.remove("nav-link--active");
        $(link)[1].classList.remove("nav-link--active");
    });
}

// Clientes
$('#figure1').hover(
    () => { $('figure')[0].classList.toggle("figure-hover"); },
    () => { $('figure')[0].classList.toggle("figure-hover"); }
);

$('#figure2').hover(
    () => { $('figure')[1].classList.toggle("figure-hover"); },
    () => { $('figure')[1].classList.toggle("figure-hover"); }
);

$('#figure3').hover(
    () => { $('figure')[2].classList.toggle("figure-hover"); },
    () => { $('figure')[2].classList.toggle("figure-hover"); }
);

$('#figure4').hover(
    () => { $('figure')[3].classList.toggle("figure-hover"); },
    () => { $('figure')[3].classList.toggle("figure-hover"); }
);

$('#figure5').hover(
    () => { $('figure')[4].classList.toggle("figure-hover"); },
    () => { $('figure')[4].classList.toggle("figure-hover"); }
);

$('#figure6').hover(
    () => { $('figure')[5].classList.toggle("figure-hover"); },
    () => { $('figure')[5].classList.toggle("figure-hover"); }
);