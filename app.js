const computerText = document.querySelector("#computerText")
const playerText = document.querySelector("#playerText")
const resultText = document.querySelector("#resultText")
const choiceBtns = document.querySelectorAll(".choiceBtn")
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent
    computerChoice()
    playerText.textContent = `Player: ${player}`
    computerText.textContent = `Computer: ${computer}`
    result = checkWinner()
    resultText.textContent = `Result: ${result}`
}))

function computerChoice() {
    const randNum =  Math.floor(Math.random() * 3) + 1
    switch(randNum){
        case 1:
            computer = "Rock"
            break
        case 2:
            computer = "Paper"
            break
        case 3:
            computer = "Scissors"
            break
    }
}
function checkWinner() {
    if(player == computer) {
        return "Draw!"
    } else if(computer == "Rock") {
        return (player == "Scissors") ? "You lose!" : "You win"
    } else if(computer == "Paper") {
        return (player == "Scissors") ? "You win!" : "You lose"
    } else if(computer == "Scissors") {
        return (player == "Rock") ? "You win!" : "You lose"
    }
}