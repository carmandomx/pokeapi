export class Person {
    constructor() {
        if (this.constructor == Person) {
            throw new Error("You cannot initialize an Abstract Class");
            
        }
    }

    getName() {
        throw new Error("This is an abstract method, the implemention will be defined in a child");
        
    }
}

const personA = new Person();