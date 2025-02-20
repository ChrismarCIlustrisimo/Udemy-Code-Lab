document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript file is connected!");
  });
  

//   apply to all button   let buttonw = document.querySelector('.w').addEventListener("click", function() {

//   });

//   let buttona = document.querySelector('.a');

//   let buttons = document.querySelector('.s');

//   let buttond = document.querySelector('.d');

//   let buttonj = document.querySelector('.j');

//   let buttonk = document.querySelector('.k');

//   let buttonl = document.querySelector('.l');


// Select all buttons with class names w, a, s, d, j, k, l
let buttons = document.querySelectorAll(".w, .a, .s, .d, .j, .k, .l");

// Loop through each button and add an event listener
buttons.forEach(button => {
  button.addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })  ;
});

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})



function makeSound (key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play();
          break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play();
          break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play();
          break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play();
          break;
        case "j":
            var audio = new Audio('sounds/snare.mp3')
            audio.play();
          break;
        case "k":
            var audio = new Audio('sounds/crash.mp3')
            audio.play();
          break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
          break;
        default:

      }
}

function buttonAnimation(currentKey){
  let activeButton =  document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 1000);
}