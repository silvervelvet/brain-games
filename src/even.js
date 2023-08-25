import readlineSync from 'readline-sync';

const even = () => {
    const userName = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${userName}!`);

    console.log(`Answer "yes" if the number is even, otherwise answer "no".`)

    const getRandomNumber = () => Math.floor(Math.random() * 50);

    for (let i = 1; i <= 3; i++) {
        const num = getRandomNumber();
        console.log(`Question: ${num}`);

        const yourAnswer = readlineSync.question('You answer: ');
        if (num % 2 === 0) {
            if (yourAnswer === 'yes') {
                console.log('Correct!');
            } else {
                console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
                console.log(`Let's try again, ${userName}!`);
                return;

            };

        }

        if (num % 2 !== 0) {
            if (yourAnswer === 'no') {
                console.log(`Correct!`);
            } else {
                console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
                console.log(`Let's try again, ${userName}!`);
                return;

            };
        }

    }

    console.log(`Congratulations, ${userName}!`)
}

export default even;