function multiply(num1,num2,num3) {
    if (num1 === num2 || num2 === num3 || num3 === num1){
        return "Error: Arguments must not be the same";
    }
    return num1 * num2 * num3;
}
console.log(multiply(4,2,1));
console.log(multiply(4,2,2));


const convertToSeconds = function(minutes){
    return minutes * 60;
}
console.log(convertToSeconds(3));

function fahrenheitToCelsius(temperature){
    return (temperature - 32) * 5/9;
}
console.log(`Temperature: ${fahrenheitToCelsius(12)}`);

function reverseString(string){
    return string.split("").reverse().join("");
}
console.log(reverseString("hello"));

function getCount(string){
    var vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (let char of string){
        if (vowels.includes(char)){
            vowelsCount++
        }
    }
    return vowelsCount;
}
console.log(getCount("JavaScript"));
console.log(getCount("Abby"));


function isPrime(number) {
  if (number <= 1) {
    return false; // 1 and numbers less than 1 are not prime
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // If divisible by any number other than 1 and itself, it's not prime
    }
  }
  return true; // If no divisors were found, it's prime
}
console.log(isPrime(2));
console.log(isPrime(47));
console.log(isPrime(99));
console.log(isPrime(8));
