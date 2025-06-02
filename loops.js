let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i]);
    };
}

let sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
// if log in inside the loop, it outputs the sum for every number in the array as it adds
console.log(`Sum of numbers: ${sum}`);