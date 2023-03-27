const prompt = require('prompt-sync')({sigint: true});
const middleSquareMethod = require('./middle-square-method');

const middleMultiplicationMethod = require('./middle-multiplication-method');
//Ask the user for what method they want to use

const method = prompt(`What method do you want to use? 1. Middle square method 2. Middle multiplication method: `);

if(method == 1){
    const x0 = prompt(`x0: `);
    middleSquareMethod(parseInt(x0));
} else if(method == 2){
    const x0 = prompt(`x0: `);
    const x1 = prompt(`x1: `);
    middleMultiplicationMethod(parseInt(x0), parseInt(x1));
} else {
    console.log(`Sorry, that is not a valid method.`);
}