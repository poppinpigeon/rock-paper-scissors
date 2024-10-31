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
    const compInput = document.querySelector("#compInput");
    compInput.textContent = "Computer: " + computerChoice;
    const humanInput = document.querySelector("#humanInput");
    humanInput.textContent = "Human: " + humanChoice;

    const result = document.querySelector("#result");
    if(humanChoice === computerChoice){
        result.textContent = "It's a tie! Try again.";
        checkResult();
        return;
    }
    //human lose
    else if((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")){
        computerScore++;
        result.textContent = "You lose! " + computerChoice + " wins " + humanChoice + ".";
        checkResult();
        return;
    }
    //human win
    else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++;
        result.textContent = "You win! " + humanChoice + " wins " + computerChoice + ".";
        checkResult();
        return;
    }
}

let computerScore = 0;
let humanScore = 0;
let gameRounds = 0;

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

//check game results after five rounds
function checkResult(){
    gameRounds++;
    const humanWin = document.querySelector("#humanWin");
    const compWin = document.querySelector("#compWin");
    const gameRound = document.querySelector("#round");
    humanWin.textContent = "Human score: " + humanScore;
    compWin.textContent = "Computer score: " + computerScore;
    gameRound.textContent = "Round " + gameRounds;

    if(gameRounds == 5){
        const finResult = document.querySelector("#finalResult");
        if(humanScore > computerScore){
            finResult.textContent = "You win!";
        }
        else{
            finResult.textContent = "You lose.";
        }
        //reset game history
        humanScore = 0;
        computerScore = 0;
        gameRounds = 0;
    }
}

