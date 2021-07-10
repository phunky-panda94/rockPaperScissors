function playRound(player, computer) {

    // draw if equal
    if (player === computer) {
        return "It's a tie!";
    }

    // win
    // rock - scissors
    if ((player === 'rock' && computer === 'scissors') ||
        // paper - rock 
        (player === 'paper' && computer === 'rock') || 
        // scissors - paper
        (player === 'scissors' && computer === 'paper')) {

            player = player[0].toUpperCase() + player.slice(1,player.length);
            return player + ' beats ' + computer + '! You win!';

    };
    
    // lose
    // rock - paper -> lose
    if ((player === 'rock' && computer === 'paper' ) ||
    // paper - scissors -> lose
        (player === 'paper' && computer === 'scissors') ||
    // scissors - rock -> lose
        (player === 'scissors' && computer === 'rock')) {

            computer = computer[0].toUpperCase() + computer.slice(1,computer.length);
            return computer + ' beats ' + player + '! You lose!';

    };

}

function playGame() {

    const playerChoice = new FormData(form).get('player');

    if (playerChoice == null) {
        alert("Pick an option first");
        return;
    }

    let options = ['rock', 'paper', 'scissors'];
    let computerChoice = options[Math.floor(Math.random() * (options.length))];

    player.textContent = "You: " + playerChoice;
    computer.textContent = 'Computer: ' + computerChoice;
    result.textContent = playRound(playerChoice, computerChoice); 
    event.preventDefault();

}

const form = document.querySelector('form')

form.addEventListener('submit', playGame);

//module.exports = playRound;