"use strict";
let Lname = "john";
// Lname= 10 ; // says number is not assignable to string
let fname;
fname = "Nishtha";
let newname = fname.toUpperCase();
console.log(newname);
let age;
age = 26;
let empList;
let numList;
numList = [1, 2, 3, 4, 5, 6, 7, 8];
let results = numList.filter((num) => {
    if (num > 2) {
        return true;
    }
});
console.log(results);
let c = 0 /* Color.Red */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num2];
}
swapNumbs = swapNumbers(10, 20);
let department;
department = 'IT';
department = 10;
function add(num1, num2) {
    return num1 + num2;
}
let newsum = add(10, 20);
console.log(newsum);
//# sourceMappingURL=dataTypes.js.map