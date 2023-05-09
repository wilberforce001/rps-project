let winners = [];
const choices = ["rock", "paper", "scissors"];

function resetGame() {

}

function startGame() {

    let imgs = document.querySelectorAll('img')
    imgs.forEach((img) =>
    img.addEventListener(('click'), () => {
        
    }))

    
}

function playRound(round) {
    
    const computerChoice = computerSelect();
   
    const winner = checkWinner(playerChoice, computerChoice);
    
    winners.push(winner);
}

function computerSelect(){

    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choice1, choice2) {
    if (
        (choice1 == "rock" && choice2 == "scissors") ||
        (choice1 == "scissors" && choice2 == "paper") ||
        (choice1 == "paper" && choice2 == "rock")
    )
} {
    return "player";
}