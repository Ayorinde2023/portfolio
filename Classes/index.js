class Person{

    constructor(name, age, email){
        this.name = name
        this.age = age
        this.email = email
        this.language = "Eng"
    }

    status(){
        return `I am ${this.name} at ${this.age}, 
        here is my email: ${this.email}, ${person.minimum_wage}`
    }

}

let person = new Person("Yusuf", 40, "y@.io")
let person2 = new Person("Roselyn", 12, "r@text.com")

console.log(person);
console.log(person2);



class Car {
    constructor(model){
        this.model = model

    }

    drive(){
        console.log("i am currently driving");
    }
}

let porsche = new Car("porsche")
let ferarri = new Car("ferarri")
let benz = new Car("benz")
let tesla = new Car("tesla")

console.log(Car.numberofCars);