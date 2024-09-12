
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissor']
    const finalChoice = Math.floor(Math.random() * choice.length)
    return choice[finalChoice] 
}

function getHumanChoice() {
    let choice = prompt('Rock, Paper, or Scissor')

    if (choice === null) {
        console.log('No Input')
        return getHumanChoice()
    }
    return choice
}

// Returns who wins 
function playRound(humanSelection, computerSelection) {
    capitalize(humanSelection, computerSelection)

    if (humanSelection === 'rock' && computerSelection === 'scissor' ||
        humanSelection === 'paper' && computerSelection === 'rock' ||
        humanSelection === 'scissor' && computerSelection === 'paper') {
            console.log('You win!')
            humanScore++
    } else if (humanSelection === computerSelection) {
        console.log(`It's a tie`)
    } else {
        console.log('You lose')
        computerScore++
    }
}

// Returns first letter capitalize for better format
function capitalize(humanSelection, computerSelection) {
    const humanChoice = humanSelection.toUpperCase()
    const computerChoice = computerSelection.toUpperCase()

    if (humanSelection === humanChoice && computerSelection === computerChoice) {
        console.log(`Your choice is: ${humanSelection.at(0).toUpperCase().concat(humanSelection.toLowerCase().substring(1))}`)
        console.log(`Computer choice is: ${computerSelection.at(0).toUpperCase().concat(humanSelection.toLowerCase().substring(1))}`)
    } else {
        console.log(`Your choice is: ${humanSelection.at(0).toUpperCase().concat(humanSelection.substring(1))}`)
        console.log(`Computer choice is: ${computerSelection.at(0).toUpperCase().concat(computerSelection.substring(1))}`)
    }
}

// Start of the game
function playGame() {
    while (humanScore < 3 && computerScore < 3) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
    
        playRound(humanSelection, computerSelection)
        console.log(`Your score ${humanScore} | Computer score ${computerScore}`)
    }

    if (humanScore === 3) {
        console.log('YOU ARE THE WINNER!')
    } else {
        console.log('YOU LOSE TO A COMPUTER!')
    }
}

playGame()