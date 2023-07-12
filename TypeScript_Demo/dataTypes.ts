let Lname= "john"

// Lname= 10 ; // says number is not assignable to string

let fname: string;
fname= "Nishtha";
let newname = fname.toUpperCase();
console.log(newname)

let age: number;
age= 26;

let empList: string[];
let numList: Array<number>;
numList= [1,2,3,4,5,6,7,8]
let results= numList.filter((num)=>{
    if(num>2){
        return true
    }
});
console.log(results)

const enum Color{
    Red,
    Green,
    Blue
}

let c: Color =  Color.Red

let swapNumbs: [firstNumber:number,secondNumber:number];

function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num2]
}

swapNumbs= swapNumbers(10,20)

let department: any;
department= 'IT';
department= 10;

function add(num1:number,num2:number): any{
    return num1+num2;
}

let newsum= add(10,20);
console.log(newsum)

