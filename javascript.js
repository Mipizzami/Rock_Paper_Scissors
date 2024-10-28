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
    
}