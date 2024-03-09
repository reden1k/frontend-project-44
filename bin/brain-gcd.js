#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { runner } from '../src/cli.js';

const description = 'Find the greatest common divisor of given numbers.';

function egcd(a, b) {
  if (!b) {
    return a;
  }
  return egcd(b, a % b);
}

function gcd() {
  const value1 = Math.round(Math.random() * 100);
  const value2 = Math.round(Math.random() * 100);

  const answer = egcd(value1, value2);
  console.log(`Question: ${value1} ${value2}`);
  const input = readlineSync.question('Your answer: ');

  if (answer === Number(input)) {
    console.log('Correct!');
    return true;
  }
  return [input, answer];
}

runner(gcd, description);
