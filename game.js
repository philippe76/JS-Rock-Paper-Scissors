// Create variables
const choices = ['rock', 'paper', 'scissors'];

let userChoice = '';
let computerChoice = '';

let userCount = 0;
let computerCount = 0; 

let userRounds = 0;
let computerRounds = 0;

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
            result = 'IT\'S TIE !' 
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
            result = 'IT\'S TIE !' 
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
            result = 'IT\'S TIE !' 
        } 
    }   
    return result
}


// Make 5 round games
const game = (playerChoice) => {
    for (let i=1; i<=5; i++){
        roundGame()
    }
}


// Handle players clicks
    document.querySelectorAll('.choice-pics img').forEach(item => {
        item.addEventListener('click', () => {
            
            userChoice = item.alt;
            computerChoice = computerPlay();
            
            // Update match pics 
            document.getElementById('user-choice').src = `img/big-${userChoice}.png`;
            document.getElementById('computer-choice').src = `img/big-${computerChoice}.png`;
            
            // Update result text 
            let resultToDisplay = PlayRound(userChoice, computerChoice);
            document.getElementById('result').innerHTML = resultToDisplay;
            
            // Update players counts
            result === 'YOU WIN !' && userCount++ 
            result === 'YOU LOSE !' && computerCount++;
            document.getElementById('userCount').innerHTML = userCount;
            document.getElementById('computerCount').innerHTML = computerCount;
            
            // Update players rounds
            
            if (userCount === 5 || computerCount === 5) {  
                userCount === 5 ? userRounds++ : computerRounds++;              
                document.getElementById('userCount').innerHTML = 'Round: ' + userRounds;
                document.getElementById('computerCount').innerHTML = 'Round: ' + computerRounds;
                userCount = 0;
                computerCount = 0 
            } 



        })
    })





