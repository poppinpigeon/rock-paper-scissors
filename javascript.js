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
    // console.log("Computer: " + computerChoice);
    // console.log("Human: " + humanChoice);
    const compInput = document.querySelector("#compInput");
    compInput.textContent = "Computer: " + computerChoice;
    const humanInput = document.querySelector("#humanInput");
    humanInput.textContent = "Human: " + humanChoice;

    const result = document.querySelector("#result");
    if(humanChoice === computerChoice){
        //console.log("It's a tie! Try again.");
        result.textContent = "It's a tie! Try again.";
        return;
    }
    //human lose
    else if((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")){
        computerScore++;
        //console.log("You lose! " + computerChoice + " wins " + humanChoice + ".");
        result.textContent = "You lose! " + computerChoice + " wins " + humanChoice + ".";
        return;
    }
    //human win
    else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++;
        //console.log("You win! " + humanChoice + " wins " + computerChoice + ".");
        result.textContent = "You win! " + humanChoice + " wins " + computerChoice + ".";
        return;
    }
}

let computerScore = 0;
let humanScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", function(){
    playRound("rock", getComputerChoice())
});
paperBtn.addEventListener("click", function(){
    playRound("paper", getComputerChoice())
});
scissorsBtn.addEventListener("click", function(){
    playRound("scissors", getComputerChoice())
});


//main function to play rock paper scissors
function playGame(){

    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        console.log("humanscore: " + humanScore);
        console.log("computerscore: " + computerScore);
    }
    if(humanScore > computerScore){
        console.log("You win!");
    }
    else{
        console.log("You lose.");
    }
}

//playGame();

