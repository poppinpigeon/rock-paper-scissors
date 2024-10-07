function getComputerChoice(){
    let rand = Math.random() * 8;
    if(rand < 3){
        return "rock";
    }
    else if(rand >= 3 && rand < 6){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let input = prompt("Rock, paper, or scissors?");
    if(input.toLowerCase() === "rock"){
        return "rock";
    }
    else if(input.toLowerCase() === "paper"){
        return "paper";
    }
    else{
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice){
    console.log("Computer: " + computerChoice);
    console.log("Human: " + humanChoice);

    if(humanChoice === computerChoice){
        console.log("It's a tie! Try again.");
        return;
    }
    //human lose
    else if((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")){
        computerScore++;
        console.log("You lose! " + computerChoice + " wins " + humanChoice + ".");
        return;
    }
    //human win
    else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++;
        console.log("You win! " + humanChoice + " wins " + computerChoice + ".");
        return;
    }
}

let computerScore = 0;
let humanScore = 0;

//test
playRound(getHumanChoice(), getComputerChoice());
console.log("humanscore: " + humanScore);
console.log("computerscore: " + computerScore);

