#!/usr/bin/env node
import {name} from "../src/cli.js"
import readlineSync from 'readline-sync';
import {start, congratulations, wrongAnswer} from "../src/cli.js";

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
            wrongAnswer(input, answer);
            return;
        }
    }
    congratulations();
}

function generateNums() {
    const arr = [];
    let number = Math.round(Math.random() * (40 - 1) + 1)
    const step = Math.round(Math.random() * (10 - 2) + 2)
    const randomSize = Math.round(Math.random() * (10 - 5) + 5)
    const missedPlace = Math.round(Math.random() * ((randomSize - 1) - 1) + 1)
    for (let i = 0; i < randomSize; i += 1) {
        arr[i] = number += step;
    }
    answer = arr[missedPlace];
    console.log(arr, answer, missedPlace)
    
    arr[missedPlace] = '..'
    return arr.join(' ');
}

progression();