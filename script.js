let playerChoice;
let ComputerChoice;
let playerPts = 0;
let compPts = 0;
let result = document.querySelectorAll('h3')[1];
let point = document.querySelectorAll('h4');
document.querySelectorAll('#table h4')[0].textContent = `Player (You) → ${playerPts}`;
document.querySelectorAll('#table h4')[1].textContent = `Computer → ${compPts}`;

function playGame(playerChoice){
    choices=['rock','paper','scissor'];
    ComputerChoice= choices[Math.floor(Math.random() * 3)];
    
    let a = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    let b = ComputerChoice.charAt(0).toUpperCase() + ComputerChoice.slice(1);
    point[0].textContent = `Player (You) → ${a}`;
    point[1].textContent = `Computer → ${b}`;

    if(playerChoice === ComputerChoice){
        result.textContent = "Its' a  Tie 😗";
    }

    else{
        switch(playerChoice){
            case 'rock':
                if(ComputerChoice==='paper'){
                    result.textContent = 'You Lose 😔'
                    compPts++;
                } 
                else{
                    result.textContent = 'You Won 🤩';
                    playerPts++;
                }
                break;
            case 'paper':
                if(ComputerChoice==='scissor'){
                    result.textContent = 'You Lose 😔'
                    compPts++;
                } 
                else{
                    result.textContent = 'You Won 🤩';
                    playerPts++;
                }
                break;
            case 'scissor':
                if(ComputerChoice==='rock'){
                    result.textContent = 'You Lose 😔'
                    compPts++;
                } 
                else{
                    result.textContent = 'You Won 🤩';
                    playerPts++;
                }
                break;
        }
    }

    document.querySelectorAll('#table h4')[0].textContent = `Player (You) → ${playerPts}`;
    document.querySelectorAll('#table h4')[1].textContent = `Computer → ${compPts}`;

    

}