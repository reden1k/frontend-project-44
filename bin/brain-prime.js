#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { runner } from '../src/cli.js';

let input;
let answer = '';
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => ![...Array(n).keys()].slice(2)
  .map((i) => !(n % i)).includes(true) && ![0, 1].includes(n);

const convertToAns = (boolean) => (boolean === true ? 'yes' : 'no');

function prime() {
  const num = Math.round(Math.random() * (30 - 1) * 1);
  console.log(`Question: ${num}`);
  answer = convertToAns(isPrime(num));
  input = readlineSync.question('Your answer: ');

  if (answer === input) {
    console.log('Correct!');
    return true;
  }
  return [input, answer];
}

runner(prime, description);
