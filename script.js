const aboutMeBtn = document.getElementById("about-me");
const experienceBtn = document.getElementById("experience");
const contactMeBtn = document.getElementById("contact-me");
const aboutMeHead = document.getElementById("about-me-header");

aboutMeBtn.addEventListener("click", function(){
    window.scrollBy(0, window.innerHeight);
});

experienceBtn.addEventListener("click", function(){
    window.scrollBy(0, 2 * window.innerHeight);
});

contactMeBtn.addEventListener("click", function(){
    window.scrollBy(0, 3 * window.innerHeight);
});