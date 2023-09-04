import { getRandomNum } from '../cli.js';

const calc = () => {
    const firstOperand = getRandomNum(1, 50);
    const secondOperand = getRandomNum(1, 50);
    const operatorIndex = getRandomNum(0, 2);
    const operators = ['+', '-', '*'];
    const operator = operators[operatorIndex];
    let result = 0;

    switch (operatorIndex) {
        case 0:
            result = firstOperand + secondOperand;
            break;
        case 1:
            result = firstOperand - secondOperand;
            break;
        case 2:
            result = firstOperand * secondOperand;
            break;
        default:
            result = 1;
    }

    const question = `${firstOperand} ${operator} ${secondOperand}`;

    return [question, result];

};

export default calc;