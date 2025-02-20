let userClickedPattern = [];
let gamePattern = [];
let buttonsColors = ["red", "blue", "green", "yellow"];
let level = 0;
let gameStarted = false;



$(document).keydown(function() {
    if(!gameStarted) {
        $("h1").text(`Level 0`);
        nextSquence();
        gameStarted = true;
    }
})


function nextSquence() {
    userClickedPattern = [];
    level++;
    $("h1").text(`Level ${level}`);
    
    let randomNumber = Math.floor(Math.random() * buttonsColors.length);
    let randomChoesenColor = buttonsColors[randomNumber];
    gamePattern.push(randomChoesenColor);

    $("#"+ randomChoesenColor).fadeOut().fadeIn();
    playSound(randomChoesenColor);
}

// Detect button click
$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    // Pass the last index to checkAnswer()
    checkAnswer(userClickedPattern.length - 1);
});



function playSound(names) {
    let sounds = new Audio(`sounds/${names}.mp3`);
    sounds.play();
}


function animatePress(currentColor) {
    $("#"+ currentColor).addClass("pressed");
    setTimeout(() => {
        $("#"+ currentColor).removeClass("pressed");
    }, 100)
}

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(nextSquence, 1000);
        }
    }else {
        playSound("wrong")
        $("h1").text("Game Over! Press A Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    gameStarted = false;
}