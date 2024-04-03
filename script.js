let gameBtn1 = document.getElementById('game-btn1');
let gameBtn2 = document.getElementById('game-btn2');
let gameBtn3 = document.getElementById('game-btn3');

let selectBtn = document.querySelectorAll('.game-button');
let playerChoice;
let computerChoice;

// selectBtn.forEach(button => {
//     button.addEventListener('click', () => {
//         playerChoice = button.textContent;
//         console.log(playerChoice);
//     });
// });

//<--------OR---------->

selectBtn.forEach(button =>{
    button.addEventListener('click', () => {
      handleButtonClick(button);
    });
});

function handleButtonClick(button){
    playerChoice = button.textContent;
    return playerChoice;
}
//<-------......------->

function randomChoice() {
    let val = Math.floor(Math.random() * 3);

    if (val >= 0 && val < 1) {
        computerChoice = 'Stone';
    } else if (val >= 1 && val < 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissor';
    }

    let inputTxt = document.getElementById('display');
    inputTxt.classList.add("change");  
    setTimeout(() => {
        inputTxt.classList.remove("change"); 
    }, 100);  

    inputTxt.value = computerChoice;
    setTimeout(() => {
        res();
    }, 100);
}


gameBtn1.addEventListener('click', randomChoice);
gameBtn2.addEventListener('click', randomChoice);
gameBtn3.addEventListener('click', randomChoice);
let msg = document.querySelector('.alert');
function res(){
    if(computerChoice === playerChoice){
        msg.value=`It's a tie`;
    }
    else if (computerChoice === 'Stone' && playerChoice === 'Paper'){
        msg.value= `You Won!`;
    }
    else if (computerChoice === 'Stone' && playerChoice === 'Scissor'){
        msg.value=`You Lose!`;
    }
    else if (computerChoice === 'Paper' && playerChoice === 'Stone'){
         msg.value=`You Lose!`;
    }
    else if (computerChoice === 'Paper' && playerChoice === 'Scissor'){
         msg.value=`You Won!`;
    }
    else if (computerChoice === 'Scissor' && playerChoice === 'Paper'){
         msg.value=`You Lose!`;
    }
    else if (computerChoice === 'Scissor' && playerChoice === 'Stone'){
         msg.value=`You Won!`;
    }
}
