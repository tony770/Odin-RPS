let arr =['rock', 'paper', 'scissors'];
const prompt = require("prompt-sync")();
let cpu = '';
let player = '';

let getComputerChoice = () => {
    cpu = arr[Math.floor(Math.random() * arr.length)];
}

let getPlayerChoice = () => {
    const playerInput = prompt("Enter your choice: ");
    player = playerInput.toLowerCase();
}

let displayResults = () => {
    console.log('You: ' + player + ', CPU: ' + cpu);
}

let playRound = () => {
    getComputerChoice();
    getPlayerChoice();

    if(cpu === player)
    {
        displayResults();
        console.log("Tie!");
    }
    else if((cpu === 'rock' && player === 'scissors') || 
            (cpu === 'scissors' && player === 'paper') || 
            (cpu === 'paper' && player === 'rock'))
    {
        displayResults();
        console.log("You Lose!");
    }
    else
    {
        displayResults();
        console.log("You Win!");
    }
}

let Game = () => {
    for(let i = 0; i < 5; i++)
    {
        playRound();
    }
}

Game();