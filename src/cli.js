import readlineSync from 'readline-sync';

let name;

export function start() {
  console.log('Welcome to the Brain Games!');
  const n = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${n}!`);
  name = n;
}

export const congratulations = () => console.log(`${'Congratulations,'} ${name}!`);

export const wrongAnswer = (input, answer) => console.log(`'${input}' is wrong answer ;(. Correct answer was '${answer}' \nLet's try again, ${name}!`);

export const runner = (game, description) => {
  start();
  console.log(description);
  let count = 0;
  let result;
  while (count !== 3 && game) {
    result = game();
    if (Array.isArray(result)) {
      return wrongAnswer(result[0], result[1]);
    }
    count += 1;
  }
  return congratulations();
};
