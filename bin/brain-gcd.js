#!/usr/bin/env node
import {name} from "../src/cli.js"
import readlineSync from 'readline-sync';
import {start, congratulations, wrongAnswer} from "../src/cli.js";

function gcd() {
    start();
    console.log(`Find the greatest common divisor of given numbers.`);
    let answer;
    let input;
    for (let i = 0; i < 3;) {
        const value1 = Math.round(Math.random() * 100);
        const value2 = Math.round(Math.random() * 100);
        answer = egcd(value1, value2);
        console.log(`Question: ${value1} ${value2}`)
        input = readlineSync.question('Your answer: ');
        if (answer === Number(input)) {
            console.log('Correct!');
            i += 1;
        }
        else {
            wrongAnswer(input, answer);
            return;
        }
        congratulations();
    }
}

function egcd(a, b) {
    if (a == 0)
        return b;

    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }

    return a;
}
gcd()