#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { runner, wrongAnswer } from '../src/cli.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default function IsEven() {
  let input;
  let answer = '';

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
    return true;
  } else {
    return [input, answer];
  }
}

runner(IsEven, description);
