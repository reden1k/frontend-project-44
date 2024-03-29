#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { runner } from '../src/cli.js';

let answer;
const description = 'What number is missing in the progression?';

function generateNums() {
  const arr = [];
  let number = Math.round(Math.random() * (40 - 1) + 1);
  const step = Math.round(Math.random() * (10 - 2) + 2);
  const randomSize = Math.round(Math.random() * (10 - 5) + 5);
  const missedPlace = Math.round(Math.random() * ((randomSize - 1) - 1) + 1);
  for (let i = 0; i < randomSize; i += 1) {
    arr[i] = number + step;
    number += step;
  }
  answer = arr[missedPlace];
  console.log(arr, answer, missedPlace);

  arr[missedPlace] = '..';
  return arr.join(' ');
}

export default function progression() {
  console.log(`Question: ${generateNums()}`);
  const input = readlineSync.question('Your answer: ');
  if (Number(input) === answer) {
    console.log('Correct!');
    return true;
  }
  return [input, answer];
}

runner(progression, description);
