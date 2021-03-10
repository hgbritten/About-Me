'use strict'

// I am sorry I couldn't comment out the console logs I didn't know how to do it without breaking this again

// function getUserName() {
//     let userName = prompt('Welcome to my site! What is your name?');
//     alert('Hello ' + userName + ' would you like to play a (guessing) game?');
//     alert('Please answer with a yes or no.')
//     document.write('<h2>' + 'Welcome ' + userName + '<h2>');
//     console.log('My name is ' + userName);

//     return userName;
// }

// function ageQuestion() {
//     let answer = prompt('Is my age 28?');
//     let lowerCaseAnswer = answer.toLowerCase();
//     if (lowerCaseAnswer === 'yes') {
//         alert('Correct!')
//     } else if (lowerCaseAnswer === 'no') {
//         alert('Wrong.')
//     } else {
//         alert('Answer not recognized.')
//     } console.log('My answer to age was ' + answer);
// }

// function kidsQuestion() {
//     let answer = prompt('Do I have more than one child?');
//     let lowerCaseAnswer = answer.toLowerCase();
//     if (lowerCaseAnswer === 'no') {
//         alert('Correct!')
//     } else if (lowerCaseAnswer === 'yes') {
//         alert('Wrong.')
//     } else {
//         alert('Answer not recognized.')
//     } console.log('My answer to number of kids was ' + answer);
// }

// function hobbiesQuestion() {
//     let answer = prompt('Do I consider myself outdoorsyish?');
//     let lowerCaseAnswer = answer.toLowerCase();
//     if (lowerCaseAnswer === 'yes') {
//         alert('Correct!')
//     } else if (lowerCaseAnswer === 'no') {
//         alert('Wrong.')
//     } else {
//         alert('Answer not recognized.')
//     } console.log('My answer to the outdoors was ' + answer);
// }

// function danceQuestion() {
//     let answer = prompt('Do I have smooth moves on the dance floor?');
//     let lowerCaseAnswer = answer.toLowerCase();
//     if (lowerCaseAnswer === 'yes') {
//         alert('Correct!')
//     } else if (lowerCaseAnswer === 'no') {
//         alert('Wrong.')
//     } else {
//         alert('Answer not recognized.')
//     } console.log('My answer to dance skills was ' + answer);
// }

// function rainierQuestion() {
//     let answer = prompt('Have I summited Mt. Rainier?');
//     let lowerCaseAnswer = answer.toLowerCase();
//     if (lowerCaseAnswer === 'yes') {
//         alert('Correct!')
//     } else if (lowerCaseAnswer === 'no') {
//         alert('Wrong.')
//     } else {
//         alert('Answer not recognized.')
//     } console.log('My answer to the summit was ' + answer);
// }

// function numberGuessingGame(){
//     // followed along during day 4 lecture of 102 with Roger Huba
//     // set the correct number
//     // got random number gen from w3 schools
//     let correctAnswer = Math.floor(Math.random() * 100) +1;
//     console.log(correctAnswer);
//     // maybe later we can get a random number
//     let guesses = 4;

//     // get a number from the user
//     for(let i = 0; i < guesses; i++){
//         let userAnswer = prompt('How many cups of coffee is it acceptable to drink in a day? 1-100');
//         while(userAnswer < 1 || userAnswer > 100){
//             userAnswer = prompt('Outside of Range. Please enter a number between 1-100')
//         }
        

//         if(userAnswer == correctAnswer){
//             alert('DING DING DING! YOU GOT IT RIGHT!');
//             break;
//         } else if(userAnswer > correctAnswer){
//             alert('Way too many! Try again!')
//         } else if(userAnswer < correctAnswer){
//             alert('How can you survive on only ' + userAnswer + ' cups a day?! Try again!')
//         }
//     }
// }

// getUserName();
// ageQuestion();
// kidsQuestion();
// hobbiesQuestion();
// danceQuestion();
// rainierQuestion();

// let userAnswer = prompt('What is my favorite color? Purple or Green?');
// switch (userAnswer.toLowerCase()) {
//     case ('purple'):
//         alert('Correct!')
//         break;
//     case ('green'):
//         alert('Nope!');
//         break;
//     default:
//         alert('Answer not recognized.');
//         console.log(userAnswer)
// }



// numberGuessingGame();






