function userInput(){
    let input = window.prompt("Enter a number: ");
    let number = Number(input)
    if (typeof number !== "number" || isNaN(number)) throw new Error("Only enter a number");
    console.log("Number recieved!");
}
userInput();

function employeeID(id){
    try{
        if (typeof id !== "number") throw new Error("Employee ID not vaild");

        let employees = {1: "Rebecca", 2: "John", 3: "Nathan"};
        if (!employees[id]) throw new Error("Employee not found");
        console.log(employees[id]);
    } catch(e) {
        console.error(`Error found: ${e.message}`);
    }
}
employeeID("two");
employeeID(4);
employeeID(2);

let StringManipulationHelpers = {
    capitalize: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    lowercase: function(str) {
        return str.toLowerCase();
    },
    reverse: function(str) {
        return str.split("").reverse().join("");
    },
    wordcount: function(str) {
        return str.trim().split(/\s=/).length;
    }
}
// export default StringManipulationHelpers;

let ArrayOperationsHelpers = {
    push: function(arr, value) {
        arr.push(value);
        return arr;
    },
    pop: function(arr) {
        const removed = arr.pop();
        return {updatedArray: arr, removed};
    },
    shift: function(arr) {
        const removed = arr.shift();
        return {updatedArray: arr, removed};
    },
    slice: function(arr,start,end) {
        return arr.slice(start, end);
    },
    splice: function(arr, start, deleteCount, ...itemsToAdd) {
        const removedItems = arr.splice(start, deleteCount, ...itemsToAdd);
        return {updatedArray: arr, removedItems};
    }
}
// export default ArrayOperationsHelpers;