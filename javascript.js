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

function playRound(humanChoice, computerChoice){
    // Both of you took the same
    if (humanChoice == computerChoice){
        alert('DRAW!');
        alert(`Human: ${HumanScore}, Computer: ${ComputerScore}`);
    }
    // You chose rock
    if (humanChoice == 0){
        if (computerChoice == 1){
            alert('You Lose, Computer chose Paper');
            ComputerScore++;
            alert(`Human: ${HumanScore}, Computer: ${ComputerScore}`);
        }
        else if (computerChoice == 2){
            alert('You win, Computer chose Scissors');
            HumanScore++;
            alert(`Human: ${HumanScore}, Computer: ${ComputerScore}`);
        }
    }
    // You chose paper
    else if (humanChoice == 1){
        if (computerChoice == 2){
            alert('You Lose, Computer chose Scissors');
            ComputerScore++;
            alert(`Human: ${HumanScore}, Computer: ${ComputerScore}`);
        }
        else if (computerChoice == 0){
            alert('You win, Computer chose Rock');
            HumanScore++;
            alert(`Human: ${HumanScore}, Computer: ${ComputerScore}`);
        }
    }

    else if (humanChoice == 2){
        if (computerChoice == 0){
            alert('You Lose, Computer chose Rock');
            ComputerScore++;
            alert(`Human: ${HumanScore}, Computer: ${ComputerScore}`);
        }
        else if (computerChoice == 1){
            alert('You win, Computer chose Paper');
            HumanScore++;
            alert(`Human: ${HumanScore}, Computer: ${ComputerScore}`);
        }
    }

}

function playGame(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice(3);

    playRound(humanChoice, computerChoice);
}

playGame();
playGame();
playGame();
playGame();
playGame();

alert(`Human: ${HumanScore}, Computer: ${ComputerScore}`);