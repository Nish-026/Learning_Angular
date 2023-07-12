"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    Login() {
        return { name: 'John', id: 1, email: "n@" };
    }
    static getEmployeeCount() {
        return 50;
    } // we can call this w/o creating new instance for example Employee.getEmployeeCount()
}
console.log(Employee.getEmployeeCount());
let john = new Employee(7, "Nishtha", "Dlehi");
console.log(john.getName());
console.log(john);
// console.log(john.id)// not possible coz we have used private here
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getInfo() {
        return `${this.address}`;
    }
}
let mike = new Manager(8, "Mike", "Delhi");
console.log(mike.getInfo());
console.log(mike.getName());
//# sourceMappingURL=class.js.map