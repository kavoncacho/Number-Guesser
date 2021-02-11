let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
    let humanDifference = Math.abs(humanGuess - targetNumber);
    let computerDifference = Math.abs(computerGuess - targetNumber);
    if (humanDifference === computerDifference) {
        return true;
    }
    else if (humanDifference < computerDifference) {
        return true;
    }
    else if (computerDifference < humanDifference) {
        return false;
    }
    else {
        console.log('something fucking happened');
    }
}

function updateScore(winnerString) {
    if (winnerString === 'human') {
        humanScore ++;
    }
    else if (winnerString === 'computer') {
        computerScore ++;
    }
    else {
        console.log('something fucking happened');
    }
}

function advanceRound() {
    currentRoundNumber++;
}
