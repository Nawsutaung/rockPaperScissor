function getComputerChoice(){
    let choice=Math.random();
    if(choice<1/3){
        return "ROCK";
    }else if(choice<2/3){
        return "PAPER";
    }else{
        return "SCISSORS";
    }
}   

function getHumanChoice(){
    let choice=prompt("Enter one of the following: rock, paper, scissors : ");
    if(choice){
     choice=choice.toUpperCase();
     return choice;   
    }
}

function playGame(){
    let humanScore=0;
    let computerScore=0;
    function playRound(humanChoice, computerChoice){
        if(humanChoice===computerChoice){
            console.log("It's a tie!");
        }else if(humanChoice==="ROCK" && computerChoice==="PAPER"){
            computerScore+=1;
            console.log("You lose! Paper beats Rock");
        }else if(humanChoice==="ROCK" && computerChoice==="SCISSORS"){
            humanScore+=1;
            console.log("You win! Rock beats Scissors");
        }else if(humanChoice==="PAPER" && computerChoice==="SCISSORS"){
            computerScore+=1;
            console.log("You lose! Scissors beats Paper");
        }else if(humanChoice==="PAPER" && computerChoice==="ROCK"){
            humanScore+=1;
            console.log("You win! Paper beats Rock");
        }else if(humanChoice==="SCISSORS" && computerChoice==="ROCK"){
            computerScore+=1;
            console.log("You lose! Rock beats Scissors");
        }else if(humanChoice==="SCISSORS" && computerChoice==="PAPER"){
            humanScore+=1;
            console.log("You win! Scissors beats Paper");
        }else{
            console.log("Invalid choice! Please choose rock, paper, or scissors.");
        }
    }
    for(let i=0;i<5;i++){
         const human=getHumanChoice();
         const computer=getComputerChoice();
        playRound(human,computer);
        
        console.log("Human Score: "+humanScore);
        console.log("Computer Score: "+computerScore);
    }
}
playGame();


