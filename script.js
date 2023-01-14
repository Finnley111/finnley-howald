const aboutMeBtn = document.getElementById("about-me");
const experienceBtn = document.getElementById("experience");
const contactMeBtn = document.getElementById("contact-me");
// const aboutMeHead = document.getElementById("about-me-header");
const educationBtn = document.getElementById("education-btn");
const interestsBtn = document.getElementById("interests-btn");
const awardsBtn = document.getElementById("awards-btn");
const secondSection = document.getElementById("second-page");


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

educationBtn.addEventListener("click", function(e){
    if (e.target == e.currentTarget) {
        educationBtn.classList.toggle("after-click");
        console.log("clicked")
        if(interestsBtn.classList.contains('after-click')) {
            interestsBtn.classList.toggle("after-click");
        }
        if(awardsBtn.classList.contains('after-click')) {
            awardsBtn.classList.toggle("after-click");
        }
        secondSection.style.backgroundColor = 'green';
    }
    
});

interestsBtn.addEventListener("click", function(e){
    if (e.target == e.currentTarget) {
        interestsBtn.classList.toggle("after-click");
        console.log("clicked")
        if(educationBtn.classList.contains('after-click')) {
            educationBtn.classList.toggle("after-click");
        }
        if(awardsBtn.classList.contains('after-click')) {
            awardsBtn.classList.toggle("after-click");
        }
    }
});

awardsBtn.addEventListener("click", function(e){
    if (e.target == e.currentTarget) {
        awardsBtn.classList.toggle("after-click");
        console.log("clicked")
        if(educationBtn.classList.contains('after-click')) {
            educationBtn.classList.toggle("after-click");
        }
        if(interestsBtn.classList.contains('after-click')) {
            interestsBtn.classList.toggle("after-click");
        }
    }
});