#!/usr/bin/env node

import readlineSync from 'readline-sync';

const welcome = () => {
    const userName = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${userName}!`);
};

export const getRandomNum = (min, max) => Math.round(Math.random() * (max - min)) + min;
export default welcome;
