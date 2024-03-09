import readlineSync from 'readline-sync';
export let name = '';

export function start() {
    console.log('Welcome to the Brain Games!');
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`)
}

export const congratulations =() => console.log(`${'Congratulations,'} ${name}!`);