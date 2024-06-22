let DocTitle = document.title;
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerWinsDisplay = document.getElementById("playerWinsDisplay");
const computerWinsDisplay = document.getElementById("computerWinsDisplay");
let computerWins = 0;
let playerWins = 0;

window.addEventListener("blur", () =>{
    document.title = "Come Back😭";
});
window.addEventListener("focus", () =>{
    document.title = DocTitle;
});
function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!!!";
    }else{
        switch(playerChoice){
            case 'rock':
                result = (computerChoice === 'scissors') ? "YOU WIN!!!" : "YOU LOSE!!!";
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? "YOU WIN!!!" : "YOU LOSE!!!";
                break;
            case 'scissors':
                result = (computerChoice === 'paper') ? "YOU WIN!!!" : "YOU LOSE!!!";
                break;
        }
    }

    

    resultDisplay.textContent = result;
    playerDisplay.textContent = "PLAYER: " + playerChoice;
    computerDisplay.textContent = "COMPUTER:  " + computerChoice;

    switch(result){
        case "YOU WIN!!!":
            resultDisplay.classList.remove("redText");
            resultDisplay.classList.add("greenText");
            victory();
            playerWins ++;
            break;
        case "YOU LOSE!!!":
            resultDisplay.classList.remove("greenText");
            resultDisplay.classList.add("redText");
            computerWins ++;
            wompwomp();
            break;
        default:
            resultDisplay.classList.remove("greenText", "redText");
            break;
    }
    
    playerWinsDisplay.textContent = "Player Wins: " + playerWins;
    computerWinsDisplay.textContent = "Computer Wins: " + computerWins;

}

function wompwomp(){
    const wompwompAudio = new Audio('/audio/downer_noise.mp3');
    wompwompAudio.play();
};

function victory(){
    const victoryAudio = new Audio('/audio/victory.mp3');
    victoryAudio.play();
}
