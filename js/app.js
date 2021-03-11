'use strict'

//  I am sorry I couldn't comment out the console logs I didn't know how to do it without breaking this again

let count = 0

 function getUserName() {
     let userName = prompt('Welcome to my site! What is your name?');
     alert('Hello ' + userName + ' would you like to play a (guessing) game?');
     alert('Please answer with a yes or no.')
     document.write('<h2'> + 'Welcome ' + userName + '<h2>');
     console.log('My name is ' + userName);

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
     } console.log('My answer to age was ' + answer);
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
     } console.log('My answer to number of kids was ' + answer);
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
     } console.log('My answer to the outdoors was ' + answer);
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
     } console.log('My answer to dance skills was ' + answer);
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
     } console.log('My answer to the summit was ' + answer);
 }

//  getUserName();
//  ageQuestion();
//  kidsQuestion();
//  hobbiesQuestion();
//  danceQuestion();
//  rainierQuestion();

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
         console.log(userAnswer)
 }

//  function numberGuessingGame(){
    //   followed along during day 4 lecture of 102 with Roger Huba
    //   set the correct number
    //   got random number gen from w3 schools
     let correctAnswer = Math.floor(Math.random() * 100) +1;
     console.log(correctAnswer);
    //   maybe later we can get a random number
     let guesses = 4;

    //   get a number from the user
     for(let i = 0; i < guesses; i++){
         let userAnswer = prompt('How many hikes does a person need to go on each year? 1-100');
         while(userAnswer < 1 || userAnswer > 100){
             userAnswer = prompt('Outside of Range. Please enter a number between 1-100')
         }
        

         if(userAnswer == correctAnswer){
             alert('DING DING DING! YOU GOT IT RIGHT!');
             count += 1
             break;
         } else if(i === 3 && userAnswer !== correctAnswer){
            console.log('last try');
           document.write('<h2>' + 'The correct number of hikes per year is ' + correctAnswer + '<h2>')
         } else if(userAnswer > correctAnswer){
             alert('Way too many! Try again!')
         } else if(userAnswer < correctAnswer){
             alert('How can you survive on only ' + userAnswer + ' a year?! Try again!')
         } 
         
     }
//  }



// numberGuessingGame();

let correctGuess = [5,37,88,48];
console.log(correctGuess);

correctGuess.length;

let guesses2 = 6;

for(let i = 0; i < guesses2; i++){
    let userResponse = prompt('Let\'s try this again. Can you guess a number from 1-100 that is in my array?');
    let userGuess = parseInt(userResponse);
    while(userGuess < 1 || userGuess > 100){
        userGuess = parseInt(prompt('Outside of Range. Please enter a number between 1-100'));
        console.log('user guess type', typeof(userGuess), userGuess);
    } 

    for(let k = 0; k < correctGuess.length; k++){
        console.log(typeof userGuess);
          if(userGuess === correctGuess[k]){
            alert('YES! YOU GOT IT RIGHT!');
            count += 1
            i = 7
            break;
        } else if(userGuess !== correctGuess[k] && k === correctGuess.length - 1){
            alert('Not quite.')
            break;
    
        }
    }
}       

document.write('<h3>' + 'The correct numbers in the array were ' + correctGuess + '<h3>')

document.write('<h3>' + 'Your correct number of answers was ' + count + '<h3>')