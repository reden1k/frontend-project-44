#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { runner } from '../src/cli.js';

const description = 'What is the result of the expression?';

const expression = (sign, v, v1) =>  {
  let answer;
  switch (sign) {
    case '-':
      answer = v - v1;
      break;
    case '+':
      answer = v + v1;
      break;
    case '*':
      answer = v * v1;
      break;
  }
  return [`Question: ${v} ${sign} ${v1}`, answer];
}

function calc() {
  const array = ['+', '*', '-'];
  const value1 = Math.round(Math.random() * 100);
  const value2 = Math.round(Math.random() * 10);
  const index = Math.round(Math.random() * 3);
  let exp = expression(array[index], value1, value2);
  let answer = exp[1];
  let input;
  console.log(exp[0])
    input = readlineSync.question('Your answer: ');
    if (answer === Number(input)) {
      console.log('Correct!');
      return true;
    }
    return [input, answer];
  }

runner(calc, description);
