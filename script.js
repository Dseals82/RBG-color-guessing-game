var colors = [];
var pickedColor;
var numberOfSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var scoreCount = 0;

init();

function init(){
  // mode buttons event Listeners
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //this doesnt seem to have a baseline, can we run this when the user selects?
      //maybe toggle visibility state
      this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
      reset();
    });
  }
  // square listeners
  for( i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function () {
      //grab color of picked square
      var clickedColor = this.style.backgroundColor
      //compare color to picked color
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Nice! You Got it!";
        //handling scorecount increase here without outer function
        scoreCount++;
        console.log(scoreCount)
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Oops! Try Again!"
      }
    });
  }
  reset();
};

function reset(){
  colors = generateRandomColors(numberOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked colors
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  //change colors of squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
});

function changeColors(color){
  //loop through all squares
  for(i = 0; i < squares.length; i++){
    //make match winning color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  //pick random number
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = []
  //repeat num times
  for(i = 0; i < num; i++){
    //get random color and push to array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //prick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Adding in scoreboard do we need a form for this?

//store the variable scoreCount so that we can grab it later. Set it equal to 0,
//we can reset this count whenever the page is reloaded,
// let scoreCount = 0;
//
// //let's test for it -
// function scoreCountIncrease(){
//
//   var userChoice =
//
// }
