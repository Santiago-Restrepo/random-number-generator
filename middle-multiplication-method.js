const prompt = require('prompt-sync')({sigint: true});
const middleMultiplicationMethod = (x0 , x1) => {
    //x0 and x1 must have the same number of digits

    if(String(x0).length !== String(x1).length){
        console.log(`x0 and x1 must have the same number of digits`);
        return;
    }
    let k = String(x0).length;
    let m = Math.pow(10, k);
    let x = [];
    let randomNumbers = [];
    const numbersToGenerate = prompt(`How many numbers do you want to generate? `);
    for(let i = 0; i < numbersToGenerate; i++){
        //Check if x is empty, if it is, multiply x0 and x1, if not, multiply the last two numbers in x
        let multipliedNumber = x.length > 1 ? x[i - 1] * x[i - 2] : x.length > 0 ? x[i - 1] * x1 : x0 * x1;
        console.log(multipliedNumber);
        let completedNumber = String(multipliedNumber);
        if(completedNumber.length % k === 0 && k % 2 !== 0){
            completedNumber = completedNumber.padStart(completedNumber.length + 1, '0');
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

module.exports = middleMultiplicationMethod