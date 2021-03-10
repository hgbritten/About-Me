'use strict'

function getUserName(){
    let userName = prompt('Welcome to my site! What is your name?');
    alert('Hello ' + userName + ' would you like to play a (guessing) game?');
    alert('Please answer with a yes or no.')
    document.write('<h2>' + 'Welcome ' + userName + '<h2>');
    console.log('My name is ' + userName);

    return userName;
}

function ageQuestion(){
    let answer = prompt('Is my age 28?');
    let lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer === 'yes'){
        alert('Correct!')
    } else if (lowerCaseAnswer === 'no'){
        alert('Wrong.')
    } else {
        alert('Answer not recognized.')
    } console.log('My answer to age was ' + answer);
}

function kidsQuestion(){
    let answer = prompt('Do I have more than one child?');
    let lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer === 'no'){
        alert('Correct!')
    } else if (lowerCaseAnswer === 'yes'){
        alert('Wrong.')
    } else {
        alert('Answer not recognized.')
    } console.log('My answer to number of kids was ' + answer);
}

function hobbiesQuestion(){
    let answer = prompt('Do I consider myself outdoorsyish?');
    let lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer === 'yes'){
        alert('Correct!')
    } else if (lowerCaseAnswer === 'no'){
        alert('Wrong.')
    } else {
        alert('Answer not recognized.')
    } console.log('My answer to the outdoors was ' + answer);
}

function danceQuestion(){
    let answer = prompt('Do I have smooth moves on the dance floor?');
    let lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer === 'yes'){
        alert('Correct!')
    } else if (lowerCaseAnswer === 'no'){
        alert('Wrong.')
    } else {
        alert('Answer not recognized.')
    } console.log('My answer to dance skills was ' + answer);
}

function rainierQuestion(){
    let answer = prompt('Have I summited Mt. Rainier?');
    let lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer === 'yes'){
        alert('Correct!')
    } else if (lowerCaseAnswer === 'no'){
        alert('Wrong.')
    } else {
        alert('Answer not recognized.')
    } console.log('My answer to the summit was ' + answer);
}

getUserName();
ageQuestion();
kidsQuestion();
hobbiesQuestion();
danceQuestion();
rainierQuestion();
