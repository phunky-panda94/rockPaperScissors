const { describe } = require('yargs');
const playRound = require('./rockPaperScissors');

test('rock beats scissors', () => {
    expect(playRound('rock','scissors')).toBe('Rock beats scissors! You win!');
});
