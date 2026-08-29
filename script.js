const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", function () {

    if (navbar.style.display === "flex") {

        navbar.style.display = "none";

    } else {

        navbar.style.display = "flex";
        navbar.style.flexDirection = "column";

    }

});


const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 900) {

            navbar.style.display = "none";

        }

    });

});


const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});