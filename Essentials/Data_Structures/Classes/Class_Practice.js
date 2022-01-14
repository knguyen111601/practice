// A class is a template for creating objects
// Properties are like adjectives
// Methods are like verbs

class Person {
    
    // This creates the "model"
    constructor(name){
        // This is always the instance of person
        // So when Bob uses new Person, it will run through the constructor and this will at that moment be bob
        this.name = name
    }

    // Properties can be created outside of the constructor but cannot be dynamically programmed with "this" keyword or use anything that the user can pass into the class creation
    // cheese = "gouda"

    // Method that can be accessed in the instance through dot notation 
    greet(who){
        console.log(`Hello, ${who.name} my name is ${this.name}`)
    }

}

class Singer extends Person {

    constructor(name, range) {
        super(name)
        this.range = range
    }
    
    sings(){
        console.log("lalala")
    }

    greet(who){
        super.greet(who)
        console.log("Hello")
    }

}

class Drummer extends Person {

    drum(){
        console.log("tip tap tippity tap")
    }

}

const Sting = new Singer("Sting", "Soprano")
const Travis = new Drummer("Travis")

Sting.greet(Travis)
Travis.greet(Sting)

Sting.sings()
Travis.drum()

console.log(Sting)