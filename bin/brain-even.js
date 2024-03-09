#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { runner } from '../src/cli.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default function IsEven() {
  let answer = '';

  const num = Math.round(Math.random() * 100);
  if (num % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  console.log(`${'Question:'} ${num}`);
  const input = readlineSync.question('Your answer: ');
  if (answer === input) {
    console.log('Correct!');
    return true;
  }
  return [input, answer];
}

runner(IsEven, description);
