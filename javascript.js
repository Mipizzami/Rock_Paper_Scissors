console.log("Hello World!")

function getComputerChoice(max){
    return Math.floor(Math.random() * max)
}

function getHumanChoice(x){
    
}

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

let HumanScore = 0;
let ComputerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    // Both of you took the same
    if (humanChoice == computerChoice){
        alert('DRAW!');
    }
    // You chose rock
    if (humanChoice == 0){
        if (computerChoice == 1){
            alert('You Lose, Computer chose Paper');
        }
        else if (computerChoice == 2){
            alert('You win, Computer chose Scissors');
        }
    }
    // You chose paper
    if (humanChoice == 1){
        if (computerChoice == 2){
            alert('You Lose, Computer chose Scissors');
        }
        else if (computerChoice == 0){
            alert('You win, Computer chose Rock');
        }
    }

    if (humanChoice == 2){
        if (computerChoice == 0){
            alert('You Lose, Computer chose Rock');
        }
        else if (computerChoice == 1){
            alert('You win, Computer chose Paper');
        }
    }

}

