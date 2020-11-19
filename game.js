
const choices = ['rock', 'paper', 'scissors'];
let userChoice = '';
let computerChoice = '';
let user = ''

// Pick a choice randomly 
const computerPlay = () => {
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex]
}

// Make a round game
const PlayRound = (playerChoice, computerChoice) => {

    player = playerChoice.toLowerCase();
    computer = computerChoice;

    if (player === 'paper') {
        if (computer === 'paper') {
            result = 'IT\'S A TIE !' 
        }
        else if (computer === 'rock') {
            result = 'YOU WIN !' 
        }
        else {
            result = 'YOU LOSE !' 
        }    
    }
    
    else if (player === 'rock') {
        if (computer === 'paper' ) {
            result = 'YOU LOSE !' 
        }
        else if (computer === 'rock') {
            result = 'IT\'S A TIE !' 
        }
        else {
            result = 'YOU WIN !' 
        }
    }
    
    else {
        if (computer === 'paper' ) {
            result = 'YOU WIN !' 
        }
        else if (computer === 'rock') {
            result = 'YOU LOSE !' 
        }
        else {
            result = 'IT\'S A TIE !' 
        } 
    }   
    return result
}

// Make 5 round games
const game = (playerChoice) => {
    for (let i=1; i<=5; i++){
        const computerChoice = computerPlay()
        console.log(PlayRound(playerChoice, computerChoice)); 
    }
}

document.querySelectorAll('.choice-pics img').forEach(item => {
    item.addEventListener('click', () => {
        userChoice = item.alt;
        computerChoice = computerPlay();
        document.getElementById('user-choice').src = `img/big-${userChoice}.png`;
        document.getElementById('computer-choice').src = `img/big-${computerChoice}.png`;
        let resultToDisplay = PlayRound(userChoice, computerChoice);
        document.getElementById('result').innerHTML = resultToDisplay
    })
})

// game();


