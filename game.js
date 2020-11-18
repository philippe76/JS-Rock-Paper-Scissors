
const choices = ['rock', 'paper', 'scissors']

const computerPlay = () => {
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex]
}

const PlayRound = (playerChoice, computerChoice) => {

    let player = playerChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    let result = '';

    if (player === 'paper') {
        if (computer === 'paper') {
            result = 'Tie! You both choose Paper' 
        }
        else if (computer === 'rock') {
            result = 'You win! Paper beats Rock' 
        }
        else {
            result = 'You lose! Scissors beats Paper' 
        }    
    }
    
    else if (player === 'rock') {
        if (computer === 'paper' ) {
            result = 'You lose! Paper beats Rock' 
        }
        else if (computer === 'rock') {
            result = 'Tie! You both choose Rock' 
        }
        else {
            result = 'You win! Rock beats Scissors' 
        }
    }
    
    else {
        if (computer === 'paper' ) {
            result = 'You win! Scissors beats Paper' 
        }
        else if (computer === 'rock') {
            result = 'You lose! Rock beats Scissors'  
        }
        else {
            result = 'Tie! You both choose Scissors' 
        } 
    }   
    return result
}


const game = () => {
    for (let i=1; i<=5; i++){
        const playerChoice = computerPlay()
        const computerChoice = computerPlay()
        console.log(PlayRound(playerChoice, computerChoice)); 
    }
}

game();


