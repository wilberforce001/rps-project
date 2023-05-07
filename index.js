console.log("Hi!")

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[(Math.random() * options.length)]
}

getComputerChoice();

