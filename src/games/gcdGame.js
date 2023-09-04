import { getRandomNum } from '../cli.js';

const nod = (num1, num2) => (!num2 ? num1 : nod(num2, num1 % num2));

const gcd = () => {
    const firstOperand = getRandomNum(1, 50);
    const secondOperand = getRandomNum(1, 50);
    const question = `${firstOperand} ${secondOperand}`

    const correctAnswer = `${nod(firstOperand, secondOperand)}`;

    return [question, correctAnswer];
};

export default gcd;