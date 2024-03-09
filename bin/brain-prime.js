#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { start, congratulations, wrongAnswer } from '../src/cli.js';

let input;
let answer = '';

const isPrime = (n) => ![...Array(n).keys()].slice(2)
  .map((i) => !(n % i)).includes(true) && ![0, 1].includes(n);

const convertToAns = (boolean) => (boolean === true ? 'yes' : 'no');

function prime() {
  start();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3;) {
    const num = Math.round(Math.random() * (30 - 1) * 1);
    console.log(`Question: ${num}`);
    answer = convertToAns(isPrime(num));
    input = readlineSync.question('Your answer: ');

    if (answer === input) {
      console.log('Correct!');
      i += 1;
    } else {
      wrongAnswer(input, answer);
      return;
    }
  }
  congratulations();
}

prime();
