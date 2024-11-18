console.log("Hello World!")

let HumanScore = 0;
let ComputerScore = 0;
const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');  


function getComputerChoice(max){
    let compChoice = Math.floor(Math.random() * max);
    if (compChoice === 0){
        return 'Rock';
    }
    else if (compChoice === 1){
        return 'Paper';
    }
    else if (compChoice === 2){
        return 'Scissors';
    }
}

function getHumanChoice(event) {
    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice(3);
    const result = playRound(humanChoice, computerChoice)
    updateResult(humanChoice, computerChoice, result)
    updateScore(result);
   
}


function playRound(human, computer){
    if (human === computer) {
        return 'Draw';
    }
    if (
        (human === 'Rock' && computer === 'Scissors') ||
        (human === 'Paper' && computer === 'Rock') ||
        (human === 'Scissors' && computer === 'Paper')
    ) {
        return 'Player';
    }
    else {
        return 'Computer';
    }
}

function updateResult(human, computer, result) {
    resultDiv.textContent = `You chose: ${human} | Computer chose: ${computer} result: ${result} Won this round.`;
}

function updateScore(result) {
    if (result === 'Player'){
        HumanScore++;
    }
    else if (result === 'Computer'){
        ComputerScore++;
    }
    scoreDiv.textContent = `Player: ${HumanScore} ||| Computer: ${ComputerScore}`;

    if (HumanScore === 5) {
        resultDiv.textContent = 'You Won!';
    }
    else if (ComputerScore === 5) {
        resultDiv.textContent = 'You Lost!';
    }
}

const buttons = document.querySelectorAll('.choice-btn');

buttons.forEach(button => {
    button.addEventListener('click', getHumanChoice);
});


