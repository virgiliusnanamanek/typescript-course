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
        this._email = "";
        this.phone = phone;
    }
    getRoles() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
    set email(value) {
        this._email = value;
    }
    get email() {
        return this._email;
    }
}
const admin = new Admin("Vicky", 22, "012354231");
admin.email = "vicky@example.com";
console.log(admin);
