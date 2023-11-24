const menu_button = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const navbar = document.querySelector('.navbar');

menu_button.addEventListener('click', function (){
    menu_button.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    navbar.classList.toggle('mobile');
});

//

/*document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if(scrollPosition > 400) {
        navbar.classList.add('scrolled');
    }else {
        navbar.classList.remove('scrolled');
    }
});*/



/* ChatGPT: In this corrected code:

The selector is updated to use .navbar to match the class name of your navigation bar.
The classList.add and classList.remove methods are used to add and remove the scrolled class, respectively.
Make sure to replace the existing content of your otf-podcasts.js file with this corrected code. After making this change, your navigation bar should transition as you scroll down the page.*/

//


/*window.addEventListener('resize', () => {
    const backgImage = document.getElementById('background');
    if(window.innerWidth < 767) {
        backgImage.src = 'images/blue-mountains-fence-mobile.jpg';
    }else{
        backgImage.src = 'images/blue-mountains-resized-2.jpg'
    }
});*/

//The above code doesnt work for mobile as it is listening for us resizing the screen but we arent- we are just navigating straight to the about us page. This is why the background image changes when we resize the window to mobile size but doesnt change when we navigate to about-us.html from the hamburger menu

//

const backgImage = document.getElementById('background');

function updateImageSrc() {
    const windowWidth = window.innerWidth;

    if(windowWidth < 767) {
        backgImage.src = 'images/fireplace-mobile.jpg';
    }else {
        backgImage.src = 'images/thumbnail-template-resized.jpg';
    }
}

updateImageSrc();

window.addEventListener('resize', updateImageSrc);





