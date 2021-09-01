const guesses = {};
const SECRET_NUMBER = 25;


function promptForNumber(text) {
    return Number(prompt(text));
}

function getMessage(previousGuess, name, previousGuesses, numGuesses) {
    if (previousGuess === undefined) {
        if (numGuesses === 1) {
            return `correct ${name}, it only took you 1 guess`;
        } else {
            return `correct ${name}, your previous guesses were: ${previousGuesses.join(', ')}`;

        }
    } else {
        const diff = Math.abs(previousGuess - numGuesses);
        if (numGuesses < previousGuess) {
            const suffix = diff === 1 ? '' : 'es';
            return `correct ${name}, you beat your best attempt by ${diff} fewer guess${suffix}`;


        } else if (numGuesses > previousGuess) {
            if (diff === 1) {
                return `correct ${name}, you best attempt was better by ${diff} fewer guess`;
            } else {
                return `correct ${name}, you best your attempt was better by ${diff} fewer guesses`;

            }
        } else if (numGuesses > previousGuess) {
            if (diff === 1) {
                return `correct ${name}, you best attempt was better by ${diff} guess`;
            } else {
                return `correct ${name}, you best your attempt was better by ${diff} guesses`;

            }
        } else {
            return `correct ${name}, you tied your best number of guesses: ${previousGuess}`;

        }
    }
}

    function play() {
        let name = prompt('what is your name?');
        let guess = promptForNumber('guess a number');
        let previousGuesses = [guess];
        let count = 1;

        while (guess !== SECRET_NUMBER) {
            if (SECRET_NUMBER > guess) {
                guess = promptForNumber('guess higher');
            } else {
                guess = promptForNumber('guess lower');

            }

            previousGuesses.push(guess);
            count++;
        }

        const message = getMessage(guesses[name], name, previousGuesses, count);
        if (guesses[name] === undefined || count < guesses[name]) {
            guesses[name] = count;
        }
        alert(message)

        playAgain();
    }

    function playAgain() {
        let response = prompt('do you want to play again?');
        if (response.toUpperCase() === 'YES') {
            play();
        }
    }

play();
