"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", id: 1, email: "nishtha@mail" };
let employee = { name: "John", id: 8, email: "k@", salary: 200 };
let [user1, user2, ...user3] = [
    { name: "a", id: 1, email: "" },
    { name: "b", id: 2, email: "" },
    { name: "c", id: 3, email: "" },
];
console.log(user1);
console.log(user2);
console.log(user3);
// @Component({})   // This is decorator
// class Component{
//    constructor(public name: string){}
// }
//# sourceMappingURL=Interface.js.map