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
}

const SpiderMan = new Hero("peter", "parker")

console.log(SpiderMan.firstName, SpiderMan.lastName)

