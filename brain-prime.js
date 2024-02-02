#!/usr/bin/env node
import {name} from "../src/cli.js"
import readlineSync from 'readline-sync';
import {} from "mathjs";
import start from "../src/cli.js"

let input;
let answer = '';

function prime() {
    start();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    for (let i = 0; i < 3;) {
    const num = Math.round(Math.random() * (30 - 1) * 1)
    console.log(`Question: ${num}`)
    answer = isPrime(num);
    input = readlineSync.question('Your answer: ');
        
    if (answer === input) {
        console.log(`Correct!`);
        i += 1
    }
    else {
        console.log(`'${input}' is wrong answer ;(. Correct answer was '${answer}' 
        \r Let's try again, ${name}!`)
        return;
    }
    }
    console.log(`Congratulations, ${name}!`);
}

function isPrime(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return 'no';
    }
    if (num >= 1) {
        return 'yes';
    }
}

prime();