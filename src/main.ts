const people=(firstName:string, lastName:string) : string=> {
    return firstName + " " +lastName;
}

console.log(people("perfect", "igbadumhe"))

interface User{
    name:string;
    age: number;
}

const user: User = {
    name:"Perfect",
    age:22
}

interface ICar{
    getColor?():string;
    getHeight?():number;
    getMaker?():string;
    working:boolean;
}

const Motor : ICar = {
    getMaker(){
        return "Totoya"
    },
    working: true
}

console.log(Motor.working);