const menu_button = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const navbar = document.querySelector('.navbar');

menu_button.addEventListener('click', function (){
    menu_button.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    navbar.classList.toggle('mobile');
});

//

//

document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const navbar = document.querySelector('.navbar');
    const navbarBlocksContent = document.querySelector('.navbar-blocks-content');
    const navbarBlocksContent2 = document.querySelector('.navbar-blocks-content-2');
    const navbarBlocksContent3 = document.querySelector('.navbar-blocks-content-3');
    

    if(scrollPosition > 370) {
        navbar.classList.add('scrolled');
        navbarBlocksContent.classList.add('scrolled');
        navbarBlocksContent2.classList.add('scrolled');
        navbarBlocksContent3.classList.add('scrolled');
        
    }else {
        navbar.classList.remove('scrolled');
        navbarBlocksContent.classList.remove('scrolled');
        navbarBlocksContent2.classList.remove('scrolled');
        navbarBlocksContent3.classList.remove('scrolled');
      
    }
})

/* ChatGPT: In this corrected code:

The selector is updated to use .navbar to match the class name of your navigation bar.
The classList.add and classList.remove methods are used to add and remove the scrolled class, respectively.
Make sure to replace the existing content of your otf-podcasts.js file with this corrected code. After making this change, your navigation bar should transition as you scroll down the page.*/

//

