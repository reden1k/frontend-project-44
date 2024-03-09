#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { runner } from '../src/cli.js';

const description = 'What is the result of the expression?';

function calc() {
  const array = ['+', '*', '-'];
  const value1 = Math.round(Math.random() * 100);
  const value2 = Math.round(Math.random() * 10);
  const index = Math.round(Math.random() * 3);
  let answer = 0;
  let input;
  
  if (array[index] === '-') {
    console.log(`Question: ${value1} - ${value2}`);
    answer = value1 - value2;
    input = readlineSync.question('Your answer: ');
    if (answer === Number(input)) {
      console.log('Correct!');
      return true;
    }
  }

  else if (array[index] === '*') {
    console.log(`Question: ${value1} * ${value2}`);
    answer = value1 * value2;
    input = readlineSync.question('Your answer: ');
    if (answer === Number(input)) {
      console.log('Correct!');
      return true;
    }
  }

  else if (array[index] === '+') {
    console.log(`Question: ${value1} + ${value2}`);
    answer = value1 + value2;
    input = readlineSync.question('Your answer: ');
    if (answer === Number(input)) {
      console.log('Correct!');
      return true;
    }
  }
  return [input, answer];
}

runner(calc, description);
