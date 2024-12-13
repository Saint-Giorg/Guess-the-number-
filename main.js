// 
// const choice = range(1,51)
// const playerChoice = document.querySelector('input[type="number"]').value
// const computerChoice = Math.trunc(math.random() * 50 +1)
// const guess = playerchoice.querySelector('.btn').addEventListener('click', () => {})
// if (guess !== choice) {
//     displayMessage("Wrong input")
// }else if (guess === computerchoice) {
//     displayMessage("You are a Number Wizard")
// }else if (guess < computerchoice){
//     displayMessage("Guessed Number to low!!")
// }else if (guess > computerchoice) {
//     displayMessage("Guessed Number to high!!")
// }else{
//     displayMessage("Input Number to start")
// }
const choice = range(1,51)
const playerChoice = document.querySelector('input[type="number"]').value
const computerChoice = Math.trunc(math.random() * 50 +1)
const guess = playerchoice.querySelector('.btn').addEventListener('click', () => {})
if (guess !== choice) {
    alert("Wrong input")
}else if (guess === computerchoice) {
    alert("You are a Number Wizard")
}else if (guess < computerchoice){
    alert("Guessed Number to low!!")
}else if (guess > computerchoice) {
    alert("Guessed Number to high!!")
}else{
    alert("Input Number to start")
}
