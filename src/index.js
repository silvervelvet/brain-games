#!/usr/bin/env node

import readlineSync from 'readline-sync';

const game = (description, getRound) => {
    console.log(phrases.GREETING);

    const userName = readlineSync.question("May I have your name? ");
    console.log(welcomeUserName(userName));

    console.log(description);

    for (let i = 1; i <= 3; i++) {
        const [question, correctAnswer] = getRound();
        console.log(askQuestion(question));
        const userAnswer = readlineSync.question(phrases.ANSWER);
        if (userAnswer === correctAnswer) {
            console.log(phrases.CORRECT_ANSWER);
        } else {
            console.log(wrongAnswer(userAnswer, correctAnswer, userName));
            return;
        };
    }

    console.log(rightAnswer(userName));
};

export default game;

export const phrases = {
    GREETING: 'Welcome to the Brain Games!',
    ASK_NAME: 'May I have your name? ',
    ANSWER: 'Your answer: ',
    CORRECT_ANSWER: 'Correct!',
    YES: 'yes',
    NO: 'no',
    DESCRIPTION_CALC_GAME: 'What is the result of the expression?',
    DESCRIPTION_GCD_GAME: 'Find the greatest common divisor of given numbers.',
    DESCRIPTION_PROGRESSION_GAME: 'What number is missing in the progression?',
    DESCRIPTION_EVEN_GAME:
        'Answer "yes" if the number is even, otherwise answer "no".',
    DESCRIPTION_PRIME_GAME:
        'Answer "yes" if given number is prime. Otherwise answer "no".',
};

export const welcomeUserName = (userName) => `Hello, ${userName}!`;
export const askQuestion = (question) => `Question: ${question}`;
export const wrongAnswer = (userAnswer, correctAnswer, userName) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
export const rightAnswer = (userName) => `Congratulations, ${userName}!`;