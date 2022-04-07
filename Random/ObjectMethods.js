// Old way of making object classes
function Villain() {
    this.name = "Green Goblin"
}
const evilVillain = new Villain()

console.log(evilVillain)

// Modern method for creating classes
class Hero {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    sayName() {
        console.log(this.firstName, this.lastName)
    }
}

const SpiderMan = new Hero("peter", "parker")

SpiderMan.sayName()

class SuperHero extends Hero {
    constructor(firstName, lastName, power){
        super(firstName, lastName)
        this.power = power
    }

    sayPower(){
        console.log(this.power)
    }
}

const Batman = new SuperHero("Bruce", "Wayne", "None")

Batman.sayName()
Batman.sayPower()