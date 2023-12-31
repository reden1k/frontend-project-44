#!/usr/bin/env node
import {name} from "../src/cli.js"
import readlineSync from 'readline-sync';
import {} from "mathjs";
import start from "../src/cli.js"


let answer;

export default function progression() {
    start();
    let input;
    console.log('What number is missing in the progression?');
    for (let i = 0; i < 3;) {
        console.log(`Question: ${generateNums()}`);
        input = readlineSync.question('Your answer: ');
        if (Number(input) === answer) {
            console.log('Correct!');
            i += 1
        } else {
            console.log(`'${input}' is wrong answer ;(. Correct answer was '${answer}' 
            \r Let's try again, ${name}!`)
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}

function generateNums() {
    const arr = [];
    let number = Math.round(Math.random() * (40 - 1) + 1)
    const step = Math.round(Math.random() * (10 - 2) + 2)
    const randomSize = Math.round(Math.random() * (10 - 5) + 5)
    const missedPlace = Math.round(Math.random() * randomSize)
    for (let i = 0; i < randomSize; i += 1) {
        arr[i] = number + step;
        number += step;
    }
    answer = arr[missedPlace];
    arr[missedPlace] = '..'
    return arr.join(' ');
}

progression();