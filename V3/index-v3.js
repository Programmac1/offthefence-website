const menu_button = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_button.addEventListener('click', function (){
    menu_button.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

/*document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        document.querySelector("navbar").style.backgroundColour = rgb(56, 182, 255, 0.2);
    }
    else {
        document.querySelector("navbar").style.backgroundColour =  rgb(56, 182, 255);
    }
});*/

