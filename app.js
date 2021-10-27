//  PASSWORD GENERATOR

// Character Gernerator Functions

// 
// Function that accepts a string value as an argument and *returns a random index number* from the string argument
function randomIndex(str){
    return Math.floor(Math.random() * str.length);
}
console.log(randomIndex(`chicken`)); //0,1,2,3,4,5,6 (up to 7 but not including 7)
// passes `chicken` thru the function

// Function that returns *a random letter* using a random index in the "letters" string
function getRandomLower(){
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    // returning a random letter using a random index in the "letters" string
    return letters[randomIndex(letters)];
}

// Example of the getRandomLower function
console.log(getRandomLower()); //random lowercase letter
//

//
function getRandomUpper(){
    const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    // returning a random letter using a random index in the "letters" string
    return letters[randomIndex(letters)];
}
// Example of the getRandomLower function
console.log(getRandomUpper()); //random lowercase letter
//

function getRandomNumber(){
    const numbers = `123456789`;
    // returning a random letter using a random index in the "letters" string
    return numbers[randomIndex(numbers)];
}

// 
function getRandomSymbol(){
    const symbols = `!@#$%^&*(){}[]=<>/,.`;
    // returning a random letter using a random index in the "letters" string
    return symbols[randomIndex(symbols)];
}
// Example of the getRandomLower function
console.log(getRandomSymbol()); //random lowercase letter
//  Pbject to store all the character generator functions

const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

