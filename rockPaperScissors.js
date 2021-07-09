function playRound(player, computer) {

    // draw if equal
    if (player === computer) {
        return "It's a tie!";
    }

    // win
    if (player === rock && computer === scissors) {
        
    }
    // rock - scissors
    // paper - rock
    // scissors - paper

    // lose
    // rock - paper -> lose
    // paper - scissors -> lose
    // scissors - rock -> lose

}

module.exports = playRound;