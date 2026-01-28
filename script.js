let getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};  
console.log(getComputerChoice());

let humanChoice = () => {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;

let playRound = () => {
    const computer = getComputerChoice();
    const player = humanChoice();
    if (player === computer) {
        return "It's a tie!";
    } else if ((player === 'rock' && computer === 'scissors') ||
               (player === 'paper' && computer === 'rock') ||
               (player === 'scissors' && computer === 'paper')) {
        humanScore++;
        return `You win! ${player} beats ${computer}.`;
    } else {
        computerScore++;
        return `You lose! ${computer} beats ${player}.`;
    }
}

playRound();

let playGame = () => {
    for(let i=0; i<5; i++){
        playRound();
    }

    if(humanScore > computerScore){
        console.log(`You won the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    }   else if(computerScore > humanScore){    
        console.log(`You lost the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    }   
}