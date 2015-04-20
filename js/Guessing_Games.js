$(document).ready(function newGame() {

var number = Math.floor((Math.random()* 100)+1)
$("#guessButton").on("click",function compare(user_input) {
  var guess = 5;
  var guessed = [];
  var playerGuess = parseInt($("playerGuess"))
  var distance = Math.abs(playerGuess - number)
  function doesNumberExist(playerGuess){
    if (Number.isNaN(playerGuess) === true||playerGuess >100||playerGuess <1){
      alert("That's not a valid number")
    }
  }
  function alreadyGuessed(number){
    for (var i = 0; i < guessed.length; i++){
      if (array[i] === number){
        return true
      }
    }
    return false
  }

  while (guess >0){
    if (playerGuess === number){
      $("#guessText").html("You have been Spared");
    }else if (alreadyguessed === true){
      $("#guessText").html("You have already guessed that number");
    }else{
      if ((distance >= 1) && (distance < 20)) {
      			$("#guessText").html("Super hot");
      		} else if ((distance >= 20) && (distance < 40)) {
      				$("#guessText").html( "Hot");
      		} else if ((distance >= 40) && (distance < 60)) {
      				$("#guessText").html("Warm");
      		} else if ((distance >= 60) && (distance < 80)) {
      				$("#guessText").html("Cold");
      		} else if ((distance >= 80) && (distance < 100)) {
      				$("#guessText").html( "Ice cold");
      		}
    }
    guess--;
    guessed.append(playerGuess)
  }
  $("#guessText").html("You have failed. The consequences are dire")})


function hint(){
  $("#guessText").html("You gave up. The number is " + number);
}

function playAgain(){
  newGame();
}

}
