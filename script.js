let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

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
        console.log('This is a test change. Hopefully this shows on Git');
    }
}

function advanceRound() {
    currentRoundNumber++;
}
