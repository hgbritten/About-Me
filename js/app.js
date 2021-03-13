'use strict'


let count = 0

function getUserName() {
    let userName = prompt('Welcome to my site! What is your name?');
    alert('Hello ' + userName + ' would you like to play a (guessing) game?');
    alert('Please answer with a yes or no.')
    document.write('<h2' > + 'Welcome ' + userName + '<h2>');


    return userName;
}

function ageQuestion() {
    let answer = prompt('Is my age 28?');
    let lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer === 'yes') {
        alert('Correct!')
        count += 1
    } else if (lowerCaseAnswer === 'no') {
        alert('Wrong.')
    } else {
        alert('Answer not recognized.')
    }
}

function kidsQuestion() {
    let answer = prompt('Do I have more than one child?');
    let lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer === 'no') {
        alert('Correct!')
        count += 1
    } else if (lowerCaseAnswer === 'yes') {
        alert('Wrong.')
    } else {
        alert('Answer not recognized.')
    }
}

function hobbiesQuestion() {
    let answer = prompt('Do I consider myself outdoorsyish?');
    let lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer === 'yes') {
        alert('Correct!')
        count += 1
    } else if (lowerCaseAnswer === 'no') {
        alert('Wrong.')
    } else {
        alert('Answer not recognized.')
    }
}

function danceQuestion() {
    let answer = prompt('Do I have smooth moves on the dance floor?');
    let lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer === 'yes') {
        alert('Correct!')
        count += 1
    } else if (lowerCaseAnswer === 'no') {
        alert('Wrong.')
    } else {
        alert('Answer not recognized.')
    }
}

function rainierQuestion() {
    let answer = prompt('Have I summited Mt. Rainier?');
    let lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer === 'yes') {
        alert('Correct!')
        count += 1
    } else if (lowerCaseAnswer === 'no') {
        alert('Wrong.')
    } else {
        alert('Answer not recognized.')
    }
}

getUserName();
ageQuestion();
kidsQuestion();
hobbiesQuestion();
danceQuestion();
rainierQuestion();

function colorQuestion() {
    let userAnswer = prompt('What is my favorite color? Purple or Green?');
    switch (userAnswer.toLowerCase()) {
        case ('purple'):
            alert('Correct!')
            count += 1
            break;
        case ('green'):
            alert('Nope!');
            break;
        default:
            alert('Answer not recognized.');
    }
}
colorQuestion();

function numberGuessingGame() {

    let correctAnswer = Math.floor(Math.random() * 100) + 1;

    let guesses = 4;


    for (let i = 0; i < guesses; i++) {
        let userAnswer = prompt('How many hikes does a person need to go on each year? 1-100');
        while (userAnswer < 1 || userAnswer > 100) {
            userAnswer = prompt('Outside of Range. Please enter a number between 1-100')
        }


        if (userAnswer == correctAnswer) {
            alert('DING DING DING! YOU GOT IT RIGHT!');
            count += 1
            break;
        } else if (i === 3 && userAnswer !== correctAnswer) {
            document.write('<h2>' + 'The correct number of hikes per year is ' + correctAnswer + '<h2>')
        } else if (userAnswer > correctAnswer) {
            alert('Way too many! Try again!')
        } else if (userAnswer < correctAnswer) {
            alert('How can you survive on only ' + userAnswer + ' a year?! Try again!')
        }

    }
}

numberGuessingGame();

function numberArrayGame() {
    let correctGuess = [5, 37, 88, 48];

    let guesses2 = 6;

    for (let i = 0; i < guesses2; i++) {
        let userResponse = prompt('Let\'s try this again. Can you guess a number from 1-100 that is in my array?');
        let userGuess = parseInt(userResponse);
        while (userGuess < 1 || userGuess > 100) {
            userGuess = parseInt(prompt('Outside of Range. Please enter a number between 1-100'));
        }

        for (let k = 0; k < correctGuess.length; k++) {

            if (userGuess === correctGuess[k]) {
                alert('YES! YOU GOT IT RIGHT!');
                count += 1
                i = 7
                break;
            } else if (userGuess !== correctGuess[k] && k === correctGuess.length - 1) {
                alert('Not quite.')
                break;

            }
        }
    }
    document.write('<h3>' + 'The correct numbers in the array were ' + correctGuess + '<h3>')
}
numberArrayGame();

document.write('<h3>' + 'Your correct number of answers was ' + count + '<h3>');
