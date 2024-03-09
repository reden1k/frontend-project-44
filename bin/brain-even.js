#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {name} from "../src/cli.js";
import start from "../src/cli.js";

export function IsEven() {
    start();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let input;
    let answer = '';
    for (let i = 0; i < 3; i += 1) {
        const num = Math.round(Math.random() * 100);
        if (num % 2 === 0) {
            answer = 'yes';
        } else {
            answer = 'no';
        }
        console.log(`${'Question:'} ${num}`);
        input = readlineSync.question('Your answer: ');
        if (answer === input) {
            console.log('Correct!');
        }
         else {
        console.log(`'${input}' is wrong answer ;(. Correct answer was '${answer}', \nLet's try again ${name}!`);
        return;
        }
    }
    console.log(`${'Congratulations,'} ${name}!`)
}

IsEven();
