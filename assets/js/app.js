
// ------------------------------------------------------------------- DOM VARIABLES

const footerElement = document.querySelector("footer");
const nightToggle = document.querySelector("#night-toggle");
const whiteSection = document.querySelector(".white-section");
const socialMediaBtn = document.querySelector("#social-media-btn");
const emailInputField = document.querySelector("#subscribe-input");
const newsLetterCover = document.querySelector(".newsletter-cover");
const newsLetterContainer = document.querySelector(".newsletter-cont");
const socialMediaSideCont = document.querySelector(".social-media-side-cont");


// ------------------------------------------------------------------- PARALLAX ELEMENTS VARIABLES

let bg = document.querySelector("#bg");
let moon = document.querySelector("#moon");
let road = document.querySelector("#road");
let flyHooh = document.querySelector("#fly-hooh");
let mountain = document.querySelector("#mountain");
let flyLizardon = document.querySelector("#ash-ketchum");
let parallaxHeadline = document.querySelector(".parallax-headline");
let secondParallaxHeadline = document.querySelector("#second-parr-headline");

// ------------------------------------------------------------------- TOGGLE FUNCTIONS

// Toggles hidden text
const revealText = () => {
    $("#revealedTxt").toggle();
    $(".about-btn").text() === "Show More" ? $(".about-btn").text("Show Less") : $(".about-btn").text("Show More");
}

// Toggles Social Media Button (Side)
const toggleSocialMediaBtn = () => {
    // toggles Social Media Side Container
    socialMediaBtn.classList.contains("active") ? socialMediaBtn.classList.remove("active") : socialMediaBtn.classList.add("active");
    
    // replaces icon (thumb/hashtag), toggles Social Media Side Container
    if (socialMediaBtn.classList.contains("active")) {
        socialMediaSideCont.classList.add("active");
        $("#hashtag").replaceWith(`<i id="thumb" class="far fa-thumbs-up"></i>`);
    } else {
        socialMediaSideCont.classList.remove("active");
        $("#thumb").replaceWith(`<i id="hashtag" class="fas fa-hashtag"></i>`);
    }
}


// ------------------------------------------------------------------- HOVER FOOTER FUNCTION 

// Hides Social Media Side Button when hovering over Footer
footerElement.addEventListener("mouseenter", () => socialMediaBtn.classList.add("opacity"));
footerElement.addEventListener("mouseleave", () => socialMediaBtn.classList.remove("opacity"));


// ------------------------------------------------------------------- PARALLAX FUNCTIONS

window.addEventListener("scroll", () => {   // Youtube - !!! link
    let val = window.scrollY;

    bg.style.top = val * .5 + "px";
    moon.style.left = -val * .5 + "px";
    mountain.style.top = -val * .15 + "px";
    road.style.top = val * .15 + "px";
    parallaxHeadline.style.top = val * .6 + "px";
    secondParallaxHeadline.style.top = -val * .3 + 400 + "px";
    flyHooh.style.left = val * .5 + 100 + "px";
    flyLizardon.style.bottom = -val * .15 + 250 + "px";
});


// ------------------------------------------------------------------- FADE IN FUNCTION (SCROLL MAGIC)

$(document).ready(function() {
    let controller = new ScrollMagic.Controller();
    let ourScene = new ScrollMagic.Scene({
        
        triggerElement: ".fade-in",
        reverse: true
    }).setClassToggle(".fade-in", "show-txt").addTo(controller);
})


// ------------------------------------------------------------------- NIGHT MODE FUNCTIONS

// Toggles Day/Night Mode (white section)
const toggleNight = () => toggleNightClasses();


// Toggles all necessary classes to de/activate night mode
const toggleNightClasses = () => {
    const allWhiteSectionCards = document.querySelectorAll(".white-section-card");
    
    allWhiteSectionCards.forEach(card => card.classList.toggle("white-section-night-mode"));
    whiteSection.classList.toggle("white-section-night-mode");
}

// Event Listener for the night mode toggle checkbox
nightToggle.addEventListener("click", toggleNight);


// ------------------------------------------------------------------- SCROLL FUNCTIONS

// Scrolls to top of the site
const scrollToTop = () => {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
}

// ------------------------------------------------------------------- NEWSLETTER FUCNTIONS

// Toggles Newsletter Clip path animation effect
const revealNewsletter = () => newsLetterCover.classList.toggle("revealed-newsletter");

const submitUserEmail = e => {
    e.preventDefault;
    if (validateEmail(emailInputField.value)) {
        emailInputField.value = "Thank you my friend!";
        setTimeout(() => emailInputField.value = "", 3000);
    } else {
        emailInputField.style.background = "red";
        emailInputField.classList.add("wrong-input-animation");
        emailInputField.style.boxShadow = "0 0 3px 2px rgba(255, 255, 255, 1)";
        setTimeout(() => {
            emailInputField.style.boxShadow = "inset 1px 2px 8px rgba(0, 0, 0, .2)";
            emailInputField.classList.remove("wrong-input-animation");
            emailInputField.style.background = "#fafafa";
        }, 600);
    }
}


// Validates Email (Stack Overflow)
const validateEmail = email => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
