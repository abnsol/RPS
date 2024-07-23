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

function getHumanChoice(){
    // prompt from user
    validChoices = ["rock","paper","scissor"];
    let choice = prompt("Choose one from [Rock,Paper,Scissor] and enter below: ");
    while (!(validChoices.includes(choice.toLowerCase()))){
        choice = prompt("Choose one from [Rock,Paper,Scissor] and enter below: ");
    }
    return choice.toLowerCase();    
}

// count scores to end at round 5
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    // ordered the map in a way neighbors lose to previous elements(circular)
    rule = {"paper" : 0,"rock" : 1,"scissor" : 2};
    if (rule[humanChoice] == rule[computerChoice] + 1 || computerChoice === "scissor" && humanChoice == "paper"){
        computerScore += 1;
        console.log("You lose!");
    }
    else if(rule[humanChoice] == rule[computerChoice] - 1 || humanChoice === "scissor" && computerChoice == "paper"){
        humanScore += 1;
        console.log("You win!!");
    }
    else if(humanChoice === computerChoice){
        console.log("A tie");
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        human = getHumanChoice();
        computer = getComputerChoice();
        playRound(human,computer);
    }

    if (humanScore > computerScore){
        console.log(`You win and the score was ${humanScore} - ${computerScore}`);
    }
    else if(humanScore < computerScore){
        console.log(`Computer win and the score was ${humanScore} - ${computerScore}`);
    }
    else{
        console.log("A tie!")
    }
}

playGame();