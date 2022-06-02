class Human {
    constructor(name) {
        this.name = name
    }
}

const Kenny = new Human("Kenny")

console.log(Kenny)

class SuperHero extends Human {
    constructor(name, power){
        super(name)
        this.power = power
    }
}

const SpiderMan = new SuperHero("Spider-Man", "Web Shooting")

console.log(SpiderMan)
