

window.addEventListener('DOMContentLoaded', (event) => {

    // Menu mobile
    var menu = document.querySelector('.navigation-links');
    var menuBtn = document.querySelectorAll(".open-btn");

    menuBtn.forEach(menuBtn => menuBtn.addEventListener('click', () => {
        menu.classList.toggle('opened');
        menuBtn.classList.toggle('opened');
    }));

    let menuLink = document.querySelectorAll(".navigation-links li");
    menuLink.forEach(menuLink => menuLink.addEventListener('click', () => {
        menu.classList.toggle('opened');
    }));

    // Scroll smooth en todos los navegadores al clickear los enlaces del nav
    const enlaces = document.querySelectorAll('.enlace a');
    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Cambiar de idioma
    let check = document.querySelector('.check');
    check.addEventListener('click', idioma);

    function idioma() {
        let id = check.checked;
        let enURL = "en/index.html";
        let esURL = "/"

        if (id == true) {
            location.href = enURL;
            
        } else {
            location.href = esURL;
        }
       

    }
    

   
});


