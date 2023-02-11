let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let themeBtn = document.querySelector('#theme-btn');
themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');
    if (themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active');
        document.getElementById("img").src="img/logo-concept-no-bg-dark.png";
        // document.getElementById("silohuette").src="img/giraffe-silohuette-white.png";
        document.getElementById("home").style.background="url(img/bg2.png)";
        // document.getElementById("home-title").style.color = "#444";
        // document.getElementById("home-content").style.color = "#444";
    } else {
        document.body.classList.remove('active');
        document.getElementById("img").src="img/logo-concept.png";
        // document.getElementById("silohuette").src="img/giraffe-silohuette.png";
        document.getElementById("home").style.background="url(img/bg4.jpg)";
    }
}

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


