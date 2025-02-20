document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript file is connected!");
  });
  

  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let diceImage1 = document.querySelector('.img1');
  let diceImage2 = document.querySelector('.img2');
  let result = document.querySelector('h1');

  diceImage1.setAttribute('src', `images/dice${randomNumber1}.png`);
  diceImage2.setAttribute('src', `images/dice${randomNumber2}.png`);



 if(randomNumber1 > randomNumber2){
    result.innerHTML = `🚩Player 1 Won`;
 }else if(randomNumber1 < randomNumber2){
    result.innerHTML = `Player 2 Won🚩`;
 }
 else{
    result.innerHTML = `🚩Draw🚩`;
 }