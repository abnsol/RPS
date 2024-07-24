function getComputerChoice(){
    //random number 0 - 3 > rock, 4 - 6 > paper, 7 - 10 > scissor 
    let choice = Math.floor(Math.random() * 10);

    if (choice < 4){
        return "rock";
    } 
    else if (4 <= choice && choice < 7){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function playRound(humanChoice,computerChoice){
    //update scoreboard
    let divCompScore = document.querySelector("#compScore");
    let divHumanScore = document.querySelector("#humanScore");
    let roundWinner = document.querySelector("#roundWinner");
    let gameOver = document.querySelector("#gameOver");
    let rounds = document.querySelector("#rounds");

    rounds.textContent = "Round : " + round;
    // ordered the map in a way neighbors lose to previous elements(circular)
    rule = {"paper" : 0,"rock" : 1,"scissor" : 2};
    if (rule[humanChoice] == rule[computerChoice] + 1 || computerChoice === "scissor" && humanChoice == "paper"){
        computerScore += 1;
        divCompScore.textContent = computerScore;
        roundWinner.textContent = "You lose!!!";        
    }

    else if(rule[humanChoice] == rule[computerChoice] - 1 || humanChoice === "scissor" && computerChoice == "paper"){
        humanScore += 1;
        divHumanScore.textContent = humanScore;
        roundWinner.textContent = "You win!!";
    }

    else if(humanChoice === computerChoice){
        roundWinner.textContent = "Tie";
    }

    if (round == 5){
        if(humanScore > computerScore){
            roundWinner.textContent = "You win!!";
        }
        else if(humanScore < computerScore){
            roundWinner.textContent = "You lose!!!";
        }
        else{
            roundWinner.textContent = "Tie";
        }
        
        gameOver.textContent = "GameOver";
        setTimeout(() => {
            location.reload()
        },2000);
        
    }
}


// count scores to end at round 5
let humanScore = 0;
let computerScore = 0;
let round = 0;


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");



rock.addEventListener('click',() =>{
    if (round >= 5) return; 
    let human = 'rock';
    round += 1;
    playRound(human,getComputerChoice())
});
paper.addEventListener('click',() =>{
    if (round >= 5) return;
    let human = 'paper';
    round += 1;
    playRound(human,getComputerChoice())
});
scissor.addEventListener('click',() =>{
    if (round >= 5) return;
    let human = 'scissor';
    round += 1;
    playRound(human,getComputerChoice())
});






    

