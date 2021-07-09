const { describe } = require('yargs');
const playRound = require('./rockPaperScissors');

test('tie if same', () => {
    expect(playRound('rock', 'rock')).toBe("It's a tie!");
});

test('rock beats scissors', () => {
    expect(playRound('rock','scissors')).toBe('Rock beats scissors! You win!');
});

xtest('rock beats scissors', () => {
    expect(playRound('scissors','rock')).toBe('Rock beats scissors! You lose')
});

xtest('paper beats rock', () => {
    expect(playRound('paper','rock')).toBe('Paper beats rock! You win!');
});

xtest('paper beats rock', () => {
    expect(playRound('rock','paper')).toBe('Paper beats rock! You lose!');
});

xtest('scissors beats paper', () => {
    expect(playRound('scissors','paper')).toBe('Scissors beats paper! You win!');
});

xtest('scissors beats paper', () => {
    expect(playRound('paper','scissors')).toBe('Scissors beats paper! You lose!');
});

