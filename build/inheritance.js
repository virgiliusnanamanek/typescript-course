"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
class Admin extends User {
    constructor(name, age, phone) {
        super(name, age);
        this.read = true;
        this.write = true;
        this.phone = phone;
    }
    getRoles() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
}
const admin = new Admin("Vicky", 22, "012354231");
console.log(admin);
