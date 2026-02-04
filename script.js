let getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};  

document.getElementById("result").textContent = "Make your move!";
document.getElementById("score").textContent = "Human: 0 | Computer: 0";



let humanChoice = (btnid) => {
    if(btnid === 'sto') return "rock";
    else if(btnid === 'pap') return "paper";
    else if(btnid === 'sci') return "scissors";
}


let humanScore = 0;
let computerScore = 0;
let round = 0;
const maxRound = 5;


const battleMessage = (player, computer) => {
  if (player === 'rock' && computer === 'paper') return "Rock is covered by Paper!";
  if (player === 'paper' && computer === 'rock') return "Paper covers Rock!";
  if (player === 'scissors' && computer === 'paper') return "Scissors cut Paper!";
  if (player === 'paper' && computer === 'scissors') return "Paper is cut by Scissors!";
  if (player === 'rock' && computer === 'scissors') return "Rock smashes Scissors!";
  if (player === 'scissors' && computer === 'rock') return "Scissors are smashed by Rock!";
  return "";
};

const imageMap = {
    rock: "stone.jpg",
    paper: "paper.jpg",
    scissors: "scissors.avif"
};
const updateChoiceImages = (player, computer) => {
    const humanImg = document.getElementById("human-img");
    const computerImg = document.getElementById("computer-img");

    humanImg.src = imageMap[player];
    computerImg.src = imageMap[computer];

    humanImg.style.display = "block";
    computerImg.style.display = "block";
};


let playRound = (player, computer) => {
    let message = "";
    if (player === computer) {
         message = "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        humanScore++;
        message = `You win! ${player} beats ${computer}.`;
    } else {
        computerScore++;
        message = `You lose! ${computer} beats ${player}.`;
    }
    round++;
    message += " " + battleMessage(player, computer);
    document.getElementById("result").textContent = message;
    document.getElementById("score").textContent =
    `Human: ${humanScore} | Computer: ${computerScore}`;

    if (round >= maxRound) {
        let finalMessage = "";
        if (humanScore > computerScore) {
            finalMessage = "🎉 Game Over! You are the overall winner!";
        } else if (computerScore > humanScore) {
            finalMessage = "💻 Game Over! Computer wins this time!";
        } else {
            finalMessage = "🤝 Game Over! It's a tie overall!";
        }
        document.getElementById("result").textContent = finalMessage;
        disableButtons();
    }


};

document.querySelectorAll(".btn button").forEach(button => {
    button.addEventListener("click", () => {
        const player = humanChoice(button.id);
        const computer = getComputerChoice();

        updateChoiceImages(player, computer);
        playRound(player, computer);
    });
});


