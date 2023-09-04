import { getRandomNum } from '../cli.js';
import { phrases } from '../index.js';

const isPrime = (num) => {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};

const prime = () => {
    const randomNumber = getRandomNum(1, 50);
    const correctAnswer = isPrime(randomNumber) ? phrases.YES : phrases.NO;
    const question = randomNumber;
    return [question, correctAnswer];
};

export default prime;