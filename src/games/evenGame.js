import { getRandomNum } from '../cli.js';
import { phrases } from '../index.js';


const isEven = (num) => num % 2 === 0;

const even = () => {
    const askNum = getRandomNum(1, 10);
    const correctAnswer = isEven(askNum) ? phrases.YES : phrases.NO;

    return [askNum, correctAnswer];
};

export default even;