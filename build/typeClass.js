"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
exports.User = User;
let user = new User("Vicky", 34);
console.log(user);
