#!/usr/bin/node
const welcomeMessage = 'Welcome to Holberton School, what is your name?';
console.log(welcomeMessage);

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
