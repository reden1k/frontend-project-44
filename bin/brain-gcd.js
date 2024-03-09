#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { start, congratulations, wrongAnswer } from '../src/cli.js';

function egcd(a, b) {
  if (!b) {
    return a;
  }
  return egcd(b, a % b);
}

function gcd() {
  start();
  console.log('Find the greatest common divisor of given numbers.');
  let answer;
  let input;
  for (let i = 0; i < 3;) {
    const value1 = Math.round(Math.random() * 100);
    const value2 = Math.round(Math.random() * 100);
    answer = egcd(value1, value2);
    console.log(`Question: ${value1} ${value2}`);
    input = readlineSync.question('Your answer: ');
    if (answer === Number(input)) {
      console.log('Correct!');
      i += 1;
    } else {
      wrongAnswer(input, answer);
      return;
    }
    congratulations();
  }
}
gcd();
