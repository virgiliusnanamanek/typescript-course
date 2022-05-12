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
console.log(getString());
console.log(getNumber());
console.log(getNone());
console.log(multiply(23, 7));
console.log(Add(123, 754));
