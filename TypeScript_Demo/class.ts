
import {Login, User} from './Interface'

class Employee{
     private id: number; // we can use #id also in place of private id
     name: string;
     address: string;

     constructor(id:number,name:string,address:string){
        this.address= address;
        this.id= id;
        this.name=name;
     }

     getName():string{
        return this.name
     }
     Login(): User{
        return {name:'John',id:1,email:"n@"};
     }
     static getEmployeeCount():number{
        return 50
     } // we can call this w/o creating new instance for example Employee.getEmployeeCount()

}

console.log(Employee.getEmployeeCount())

let john= new Employee(7,"Nishtha","Dlehi");
console.log(john.getName())
console.log(john);

// console.log(john.id)// not possible coz we have used private here

class Manager extends Employee{
    constructor(id:number, name:string, address:string){
        super(id,name,address);
    }

    getInfo(): string {
        return `${this.address}`
    }
}

let mike= new Manager(8,"Mike","Delhi")
console.log(mike.getInfo())
console.log(mike.getName())

