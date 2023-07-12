export interface User{
    name: string;
    age?: number;
    id: number;
    email:string
}

let user: User= {name:"John",id:1, email:"nishtha@mail"}

interface Employees extends User{
    salary:number
}

let employee: Employees={name:"John",id:8,email:"k@",salary:200}


export interface Login{
    Login(): User;
}

let [user1,user2,...user3]: User[]= [
    {name:"a",id:1,email:""},
    {name:"b",id:2,email:""},
    {name:"c",id:3,email:""},
];
console.log(user1);
console.log(user2)
console.log(user3)

// @Component({})   // This is decorator
// class Component{
//    constructor(public name: string){}
// }