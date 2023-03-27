const prompt = require('prompt-sync')({sigint: true});
const middleSquareMethod = (x0) => {
    let k = String(x0).length;
    let m = Math.pow(10, k);
    let x = [];
    let randomNumbers = [];
    const numbersToGenerate = prompt(`How many numbers do you want to generate? `);
    for(let i = 0; i < numbersToGenerate; i++){
        let powedNumber = x.length > 0 ?  Math.pow(x[i - 1], 2) : Math.pow(x0, 2);
        let completedNumber = String(powedNumber);
        if(completedNumber.length % k === 0 && k % 2 !== 0){
            completedNumber = String(powedNumber).padStart(completedNumber.length + 1, '0');
        }
        let middleNumber = parseInt(completedNumber.substring((completedNumber.length / 2) - (k / 2), (completedNumber.length / 2) + (k / 2)));
        let randomNumber = parseFloat(middleNumber) / m;
        x.push(middleNumber);
        randomNumbers.push({
            randomNumber: randomNumber
        });
    }
    console.table(randomNumbers);
}

// Path: middle-product-method.js
module.exports = middleSquareMethod