// Create variables
const choices = ['rock', 'paper', 'scissors'];

let userChoice = '';
let computerChoice = '';

let userCount = 0;
let computerCount = 0; 

let userRounds = 0;
let computerRounds = 0;

// variables for timeOut
let endRound;
let setData;


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
        
        // Handle round end            
        if (userCount === 2 || computerCount === 2) {    
            winRound();  
        }       
        
        // Handle game end 
        if (userRounds === 2 || computerRounds === 2) {              
            winGame();
        }
    })
})


function winRound() {

    userCount === 2 ? userRounds++ : computerRounds++;   

    // Update layout displaying
    endRound = setTimeout( () => {
        document.getElementById('userCount').innerHTML = 'Rounds: ' + userRounds;
        document.getElementById('computerCount').innerHTML = 'Rounds: ' + computerRounds;
        document.getElementById('result').innerHTML = 'NEW ROUND';
        document.getElementById('user-choice').src = `img/transparent.png`;
        document.getElementById('computer-choice').src = `img/transparent.png`;
    }, 1000);  
            
    userCount = 0;
    computerCount = 0 
        
    // Update counters
    setData = setTimeout( () => { 
        document.getElementById('userCount').innerHTML = userCount;
        document.getElementById('computerCount').innerHTML = computerCount;
        document.getElementById('userRounds').innerHTML = userRounds;
        document.getElementById('computerRounds').innerHTML = computerRounds;
    }, 2000);     
}


function winGame() {

    // Update layout displaying
    document.getElementById('userRounds').innerHTML = null;
    document.getElementById('computerRounds').innerHTML = null;
    userCount = 0;
    computerCount = 0;

    setTimeout( () => {
        document.getElementById('result').innerHTML = userRounds === 2 ? 'WIN GAME!' : 'GAME OVER!';
    }, 1500)

    document.getElementById('userCount').innerHTML = "SCORE: " + userRounds;
    document.getElementById('computerCount').innerHTML = "SCORE: " + computerRounds;
    document.getElementById('user-choice').src = `img/transparent.png`;
    document.getElementById('computer-choice').src = `img/transparent.png`;
    document.querySelector('.result button').style.display = 'inline';

    clearTimeout(endRound);
    clearTimeout(setData);
}


// Start a new game                 
document.querySelector('.result button').addEventListener('click', (e) => {
    e.target.style.display= 'none';
    userRounds = 0;
    computerRounds= 0;
    document.getElementById('result').innerHTML = 'NEW GAME'
    document.getElementById('userCount').innerHTML = userCount;
    document.getElementById('computerCount').innerHTML = computerCount;
    
})


// Get dynamic date for Footer
document.getElementById('date').innerHTML = new Date().getFullYear()
                
                
                
                