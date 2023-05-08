console.log("Hi!")

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
    return choice;

}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie"
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}




function playRound(playerSelection, computerSelection){ 
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        const p = document.createElement('p')
        p.innerText = "It's a Tie!"
        outcomeDiv.appendChild(p)
    }
    else if(result == "Player"){
        const p = document.createElement('p')
        p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`
        outcomeDiv.appendChild(p)
    }
    else{
        const p = document.createElement('p')
        p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`
        outcomeDiv.appendChild(p)
    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
     // for (let i = 0; i < 5; i++) {
        // const playerSelection = getPlayerChoice();
        //const computerSelection = getComputerChoice();
        //console.log(playRound(playerSelection, computerSelection));
        //console.log("--------")
        //if(checkWinner(playerSelection, computerSelection) == "Player"){
          //  scorePlayer++;
        
        //}
        //else if(checkWinner(playerSelection, computerSelection) == "Computer"){
          //  scoreComputer++;
        //}
    //}

    rockButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = 'rock'
        playRound(playerSelection, computerSelection)
    })

    paperButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = 'paper'
        playRound(playerSelection, computerSelection)
    })

    scissorsButton.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = 'scissors'
        playRound(playerSelection, computerSelection)
    })
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("Player was the winner");

    }
    else if(scorePlayer < scoreComputer){
        console.log("Computer was the winner");

    }
    else{
        console.log("We have a tie!");
    }

}

game()

