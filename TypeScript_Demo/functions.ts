function Add(num1: number, num2: number, num3?:number) : number {
    return num3? num1 + num2 + num3 : num1 + num2;
}
console.log(Add(2,3))
// if 3rd number is present
// void means it does not returns anything

const sub = (num1: number,num2:number): number=> num1-num2;
console.log(sub(2,3));

const mult = function(num1: number,num2:number): number{
    return num1*num2;
};

// Generic functions

// Generic functions, also known as polymorphic functions, 
// are functions that can operate on multiple data types or 
// classes. They provide a way to write code that is reusable 
// and applicable to different types, allowing for more flexible 
// and generic programming

function getItems<Type>(items: Type[]):Type[]{
 return new Array<Type>().concat(items);
}

let concatNumbers= getItems<number>([1,2,3,4,5]);

let concatString= getItems<string>(["a","b","c","d"])

console.log(concatNumbers);
console.log(concatString)