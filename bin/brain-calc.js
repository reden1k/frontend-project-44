#!/usr/bin/env node
import {name} from "../src/cli.js"
import readlineSync from 'readline-sync';
import start from "../src/cli.js"

function calc() {
    start();
    const array = ['+', '*', '-'];
    for (let i = 0; i < 3;) {
        const value1 = Math.round(Math.random() * 100);
        const value2 = Math.round(Math.random() * 10);
        const index = Math.round(Math.random() * 3);
        let answer = 0;
        if (array[index] === '-') {
            console.log(`Question: ${value1} - ${value2}`)
            answer = value1 - value2;
            const input = readlineSync.question('Your answer: ')
            if (answer === Number(input)) {
                console.log('Correct!');
                i += 1
            } else {
                console.log(`'${input}' is wrong answer ;(, Correct anwer was '${answer}' \r Let's try again, ${name}!`)    
                return;
            }
        }

        if (array[index] === '*') {
            console.log(`${value1} * ${value2}`)
            answer = value1 * value2;
            const input = readlineSync.question('Your answer: ')
            if (answer === Number(input)) {
                console.log('Correct!');
                i += 1
            }
            else {
                console.log(`'${input}' is wrong answer ;(, Correct anwer was '${answer}' \r Let's try again, ${name}!`)
                return;
            }
        }

        if (array[index] === '+') {
            console.log(`${value1} + ${value2}`)
            answer = value1 + value2;
            const input = readlineSync.question('Your answer: ')
            if (answer === Number(input)) {
                console.log('Correct!');
                i += 1
            }
            else {
                console.log(`'${input}' is wrong answer ;(, Correct anwer was '${answer}' \r Let's try again, ${name}!`)
                return;
            }
        }
    }
    console.log(`Congratulations, ${name}`);
}

calc();