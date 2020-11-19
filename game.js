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
        
        // Handle round end            
        if (userCount === 5 || computerCount === 5) {    
            userCount === 5 ? userRounds++ : computerRounds++;     
            var endRound = setTimeout( () => {
                document.getElementById('userCount').innerHTML = 'Rounds: ' + userRounds;
                document.getElementById('computerCount').innerHTML = 'Rounds: ' + computerRounds;
                document.getElementById('result').innerHTML = 'NEW ROUND';
                document.getElementById('user-choice').src = `img/transparent.png`;
                document.getElementById('computer-choice').src = `img/transparent.png`;
            }, 1000);  
            
            userCount = 0;
            computerCount = 0 
        
            setTimeout( () => { 
                document.getElementById('userCount').innerHTML = userCount;
                document.getElementById('computerCount').innerHTML = computerCount;
                document.getElementById('userRounds').innerHTML = userRounds;
                document.getElementById('computerRounds').innerHTML = computerRounds;
                }, 3000);     
        }       
        
        // Handle game end 
        if (userRounds === 2 || computerRounds === 2) {            
            document.getElementById('userRounds').innerHTML = null;
            document.getElementById('computerRounds').innerHTML = null;
            userCount = 0;
            computerCount = 0;
            document.getElementById('result').innerHTML = userRounds === 2 ? 'YOU WIN !' : 'YOU LOSE !';
            document.getElementById('userCount').innerHTML = 'Rounds: ' + userRounds;
            document.getElementById('computerCount').innerHTML = 'Rounds: ' + computerRounds;
            document.getElementById('user-choice').src = `img/transparent.png`;
            document.getElementById('computer-choice').src = `img/transparent.png`;
            clearTimeout(endRound)
        }

    })
})

    

document.getElementById('date').innerHTML = new Date().getFullYear()



