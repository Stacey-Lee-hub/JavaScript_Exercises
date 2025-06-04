function sum(number){
    if (typeof number !== "number" || number % 1 !== 0){
        return "The value passed is not a number"
    } else {
        let total = 0;
        for (let i = 0; i <= number; i++){
            total += i;
        }
        return total;
    }
}
console.log(`Sum of all numbers: ${sum(5)}`);

function factorial(number){
    if (typeof number !== "number" || number % 1 !== 0){
        return "The value passed is not a number"
    } else {
        let total = 1;
        for (let i = 1; i <= number; i++){
            total *= i;
        }
        return total;
    }
}
console.log(`Factorial of all numbers: ${factorial(5)}`);

function funkyMath(...args){
    const len = args.length;
    if (len === 2){
        return args[1] - args[0];
    } else if (len === 3) {
        return args[0] + args[1] + args[2];
    } else if (len === 4) {
        return (args[0] + args[1]) / (args[2] + args[3]);
    } else {
        return "No more than 4 args allowed";
    }
}
console.log(funkyMath(1,2));
console.log(funkyMath(1,2,3));
console.log(funkyMath(21,1,1,3));

let currentArray = [1, 2 , 33, 45, 6, 44];
let oddArray = [];

for (let i = 0; i < currentArray.length; i++) {
    if (currentArray[i] % 2 !== 0){
        oddArray.push(currentArray[i]);
    }
}

oddArray.sort(function(a,b){
    return a - b;
})
console.log(oddArray);

let me = {
    firstName: "Stacey-Lee",
    lastName: "Pietersen",
    age: 21,
    favouriteColour: "Purple",
    dreamCar: "BMW",
};
me.favouriteFood = "Sushi";
delete me.age;
console.log(me);

for (let key in me){
    console.log(`${key}: ${me[key]}`);
}
