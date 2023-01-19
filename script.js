const learnMoreBtn = document.getElementById("learn-more");
const aboutMeDiv = document.getElementById("about-me-div");
const upBtn = document.getElementById("up-btn");
const titleDiv =document.getElementById("title-div");

learnMoreBtn.addEventListener("click", function(){
    aboutMeDiv.scrollIntoView();
    console.log("clicked")
});

upBtn.addEventListener("click", function(){
    titleDiv.scrollIntoView();
    console.log("clicked")
});


// aboutMeBtn.addEventListener("click", function(){
//     window.scrollBy(0, window.innerHeight);
//     console.log("clicked")
// });

// experienceBtn.addEventListener("click", function(){
//     window.scrollBy(0, 2 * window.innerHeight);
// });

// contactMeBtn.addEventListener("click", function(){
//     window.scrollBy(0, 3 * window.innerHeight);
// });

// educationBtn.addEventListener("click", function(e){
//     if (e.target == e.currentTarget) {
//         educationBtn.classList.toggle("after-click");
//         console.log("clicked")
//         if(interestsBtn.classList.contains('after-click')) {
//             interestsBtn.classList.toggle("after-click");
//         }
//         if(awardsBtn.classList.contains('after-click')) {
//             awardsBtn.classList.toggle("after-click");
//         }
//         secondSection.style.backgroundColor = 'green';
//     }
    
// });

// interestsBtn.addEventListener("click", function(e){
//     if (e.target == e.currentTarget) {
//         interestsBtn.classList.toggle("after-click");
//         console.log("clicked")
//         if(educationBtn.classList.contains('after-click')) {
//             educationBtn.classList.toggle("after-click");
//         }
//         if(awardsBtn.classList.contains('after-click')) {
//             awardsBtn.classList.toggle("after-click");
//         }
//     }
// });

// awardsBtn.addEventListener("click", function(e){
//     if (e.target == e.currentTarget) {
//         awardsBtn.classList.toggle("after-click");
//         console.log("clicked")
//         if(educationBtn.classList.contains('after-click')) {
//             educationBtn.classList.toggle("after-click");
//         }
//         if(interestsBtn.classList.contains('after-click')) {
//             interestsBtn.classList.toggle("after-click");
//         }
//     }
// });


// let width = screen.width;
// let height = screen.height;
// const mainContainer = document.querySelector("div")

// mainContainer.addEventListener("resize", function(e){
//     console.log('hello');
//     if (width<=height){
//         mainContainer.classList.toggle("tall-mode");
        
//     }
//     else{
//         if (mainContainer.classList.contains("tall-mode")){
//             mainContainer.classList.toggle("tall-mode");
//             alert('wide');
//         }
        
//         console.log("wide");
//     }
// });