export class User{
    name: string;
    constructor(name: string, public age: number){
        this.name = name;
    }
    setName(value: string):void{
        this.name = value;
    }
    getName = ():string =>{
        return this.name;
    }
}

class Admin extends User {
    read : boolean = true;
    write : boolean = true;
    phone : string;
     constructor(name: string, age: number, phone: string){
         super(name, age);
         this.phone = phone;
     }

    getRoles():{read:boolean, write:boolean}{
        return {
            read : this.read,
            write : this.write
        };
    };
}

const admin = new Admin("Vicky", 22, "012354231");
console.log(admin);