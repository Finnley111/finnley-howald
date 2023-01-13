const aboutMeBtn = document.getElementById("about-me");
const experienceBtn = document.getElementById("experience");
const contactMeBtn = document.getElementById("contact-me");
// const aboutMeHead = document.getElementById("about-me-header");
const educationBtn = document.getElementById("education-btn");
const interestsBtn = document.getElementById("interests-btn");
const awardsBtn = document.getElementById("awards-btn");


aboutMeBtn.addEventListener("click", function(){
    window.scrollBy(0, window.innerHeight);
    console.log("clicked")
});

experienceBtn.addEventListener("click", function(){
    window.scrollBy(0, 2 * window.innerHeight);
});

contactMeBtn.addEventListener("click", function(){
    window.scrollBy(0, 3 * window.innerHeight);
});

educationBtn.addEventListener("click", function(){
    educationBtn.classList.toggle("after-click");
    console.log("clicked")
});

interestsBtn.addEventListener("click", function(){
    educationBtn.classList.toggle("after-click");
    console.log("clicked")
});

interestsBtn.addEventListener("click", function(){
    interestsBtn.classList.toggle("after-click");
    console.log("clicked")
});