function getString(): string {
    return "Nama saya vicky";
}

function getNumber(): number {
    return 12 * 12;
}

function getNone(): void {
    console.log("Tidak me-return apapun")
}

function multiply(a: number, b: number) : number {
    return a * b;
}

type Jumlah = (val1 : number, val2 : number) => number;

const Add : Jumlah = (a: number, b: number) : number => {
    return a + b;
}
console.log(getString());
console.log(getNumber());
console.log(getNone());
console.log(multiply(23, 7));
console.log(Add(123, 754));

