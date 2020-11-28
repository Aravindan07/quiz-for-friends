const readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var userName = readlineSync.question("May I have your name ? ");
console.log(chalk.blue("\nHello ",userName));

function play(question,answer,wrongSuggestion){
  var userAnswer = readlineSync.question(question);
  console.log(chalk.bgBlackBright("\nYou selected option ",userAnswer));
  if(userAnswer.toLowerCase() === answer || userAnswer === answer){
    console.log(chalk.green("\nYou are right!\n"));
    score = score + 1;
  }
  else{
    console.log(chalk.bgRed('\nOops!,You are wrong!\n'));
    console.log(chalk.bgRed(`${wrongSuggestion}\n`));

  }
  console.log('Your score : ' + chalk.green.underline.bold(score));
    console.log('_________________');
}

  var questions = [{
    question: `
    What Do I like the most ?\n
    a) Coding
    b) Books
    c) Movies\n`,
    answer: 'a',
    wrongSuggestion: 'You guessed it wrong my friend',
  },{
    question: `
    Can you guess my passion ?\n
    a) Analyst
    b) Full stack developer
    c) UI/UX Designer\n`,
    answer: 'b',
    wrongSuggestion: 'You guessed it wrong my friend',
    },
    {
    question: `
    Am I ?\n
    a) a Pessimist
    b) an optimist
    c) a realist\n`,
    answer: 'c',
    wrongSuggestion: 'You guessed it wrong my friend',
  },
  {
    question: `
    Which is my favorite food ?\n
    a) Pizza
    b) Briyani
    c) Chesse Burger
    \n`,
    answer: 'b',
    wrongSuggestion: 'You guessed it wrong my friend',
  },
  {
    question: `
    What is my favorite Hollywood web series ?\n
    a) Stranger Things
    b) Money Heist
    c) Prison Break
    \n`,
    answer: 'c',
    wrongSuggestion: 'You guessed it wrong my friend',
  }];

  for(var i = 0; i<questions.length; i++){
    play(questions[i].question,questions[i].answer,questions[i].wrongSuggestion);
  }

let highScorers = [
  {
  name: "Aravind",
  score: "5",
  },
  {
  name: "Ravi",
  score: "4",
  }
];

console.log("\nYour overall score is : " + chalk.greenBright.bold(score));
console.log(chalk.blueBright.bold(`\nThanks ${userName} for playing a quiz about me.`));

if(score >= 2){
  let newPlayer = {
    name: userName,
    score: score, 
  }
  highScorers.push(newPlayer);
};

console.log('\nHIGHSCORERS');
console.log('_________________\n');
highScorers.forEach(player => 
    console.log(`${player.name} scored ${player.score}`)
); 
