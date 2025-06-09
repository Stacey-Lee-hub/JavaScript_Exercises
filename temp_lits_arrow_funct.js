// TODO: Create a multiline string using template literals
let songs = `Best songs:
1. Kendrick Lamar - N95
2. Megan Thee Stallion - BOA
3. Doja Cat - Vegas
`
console.log(songs);

// TODO: Create a function that uses template literals for HTML generation
let title = "Welcome";
let html = `<h1>${title}</h1>`;
console.log(html);

// TODO: Convert regular functions to arrow functions
function add(a, b){
    return a + b;
}
const addArrow = (a, b) => a + b;

function calc(x, y){
    const sum = x + y;
    return sum * 2;
}
const calcArrow = (x, y) => {
    const sum = x + y;
    return sum * 2;
}

// TODO: Use arrow functions with array methods
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

let names = ["Stacey", "Imaad", "Courtney"];
names.forEach(name => console.log(name));
