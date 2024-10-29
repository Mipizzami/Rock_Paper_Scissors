console.log("Hello World!")

function getComputerChoice(max){
    return Math.floor(Math.random() * max)
}

function getHumanChoice(){
let choice = prompt("What's your choice? Rock/Paper/Scissors");
let x = 0;
if (choice.toLowerCase() == "rock"){
    alert('you chose rock');
}
else if (choice.toLowerCase() == "paper"){
    x = x + 1
    alert('you chose paper');
}
else if (choice.toLowerCase() == "scissors"){
    x = x + 2
    alert('you chose scissors');
}
else {
    alert('you spelled your choice wrong');
}
return x;
}

let HumanScore = 0;
let ComputerScore = 0;  

function playRound(humanChoice, computerChoice, HumanScore, ComputerScore, HumanScore, ComputerScore){
    // Both of you took the same
    if (humanChoice == computerChoice){
        alert('DRAW!');
    }
    // You chose rock
    if (humanChoice == 0){
        if (computerChoice == 1){
            alert('You Lose, Computer chose Paper');
            ComputerScore++;
        }
        else if (computerChoice == 2){
            alert('You win, Computer chose Scissors');
            HumanScore++;
        }
    }
    // You chose paper
    else if (humanChoice == 1){
        if (computerChoice == 2){
            alert('You Lose, Computer chose Scissors');
            ComputerScore++;
        }
        else if (computerChoice == 0){
            alert('You win, Computer chose Rock');
            HumanScore++;
        }
    }

    else if (humanChoice == 2){
        if (computerChoice == 0){
            alert('You Lose, Computer chose Rock');
            ComputerScore++;
        }
        else if (computerChoice == 1){
            alert('You win, Computer chose Paper');
            HumanScore++;
        }
    }

}

function playGame(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice(3);

    playRound(humanChoice, computerChoice, HumanScore, ComputerScore, HumanScore, ComputerScore);
}

playGame();
playGame();
playGame();
playGame();
playGame();