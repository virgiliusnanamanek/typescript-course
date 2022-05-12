"use strict";
function getString() {
    return "Nama saya vicky";
}
function getNumber() {
    return 12 * 12;
}
function getNone() {
    console.log("Tidak me-return apapun");
}
function multiply(a, b) {
    return a * b;
}
const Add = (a, b) => {
    return a + b;
};
//Default Parameter
const fullName = (first, second = "Nana") => {
    return first + " " + second;
};
console.log(fullName("Vicky"));
