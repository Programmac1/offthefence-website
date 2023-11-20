const menu_button = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const navbar = document.querySelector('.navbar');

menu_button.addEventListener('click', function (){
    menu_button.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    navbar.classList.toggle('mobile');
});

//

document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if(scrollPosition > 400) {
        navbar.classList.add('scrolled');
    }else {
        navbar.classList.remove('scrolled');
    }
})

/* ChatGPT: In this corrected code:

The selector is updated to use .navbar to match the class name of your navigation bar.
The classList.add and classList.remove methods are used to add and remove the scrolled class, respectively.
Make sure to replace the existing content of your otf-podcasts.js file with this corrected code. After making this change, your navigation bar should transition as you scroll down the page.*/

//

