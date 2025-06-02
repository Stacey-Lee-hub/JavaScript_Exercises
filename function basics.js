function greet(name) {
    return "Hello, " + name;
}

function add(number1, number2) {
    let sum = number1 + number2;
    return sum;
}

let greeting = greet("Joy");
console.log(greeting);

let results = add(2,3);
console.log(`Sum of numbers: ${results}`);