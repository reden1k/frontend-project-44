#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { start, congratulations, wrongAnswer } from '../src/cli.js';

export default function IsEven() {
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
    } else {
      wrongAnswer(input, answer);
      return;
    }
  }
  congratulations();
}

IsEven();
