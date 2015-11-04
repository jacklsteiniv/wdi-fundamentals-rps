////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//‘use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    var answer = prompt();
    return answer;
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

//these variables must be declared globally so we can use them in the playToFive and getWinner functions
var playerMove;
var computerMove;

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
       return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

       return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

if (playerMove === computerMove) {
       winner = 'tie';
    }
  
    else if (playerMove === "rock" && computerMove === "scissors") {
        winner = 'player';
    }
   
    else if (playerMove === "paper" && computerMove === "scissors") {
        winner = 'computer';
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        winner = 'player';
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        winner = 'player';
    }
    else if(playerMove ==="scissors" && computerMove === "rock") {
        winner = 'computer';
    }
    else {
        winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
    	//the local variables below store the player and computer’s moves, and the winner, of the round.
       	var playerChoose = getPlayerMove();
    	var computerChoose = getComputerMove();
    	var roundWinner = getWinner(playerChoose, computerChoose);

    	if (roundWinner === 'player') {
        	playerWins+=1;
        	console.log("Player gets a point");
        	console.log("Player chose " + playerChoose + " while Computer chose " + computerChoose);
        	console.log("The score is currently " + playerWins + " to " + computerWins);
    
    	}
    	else if (roundWinner === 'computer') {
        	computerWins +=1;
        	console.log("Computer gets a point");
        	console.log('Player chose ' + playerChoose + ' while Computer chose ' + computerChoose);
        	console.log('The score is currently ' + playerWins + ' to ' + computerWins);
    	}
    	else {
        	console.log("Tie! Go again.");
    	}
     }
  
	if(playerWins === 5) {
      		console.log("Congrats, you win! Final score:");
      		return [playerWins, computerWins];
      		//return will exit the loop for us. last item we see
  	}
  	else if (computerWins === 5) {
      		console.log("Aw man, you lost. Try again! Final score:");
      		return [playerWins, computerWins];
  	}
}

//The code below is used to test and run the playToFive function. Use on CodeAcademy Labs, repl.it fails
//console.log(playToFive());
