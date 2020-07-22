class Animal {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
}

class Cat extends Animal {
    speak() {
        return `${this.name} says meow!`
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} says woof!`
    }
}

class Bird extends Animal {
    speak() {
        const message = this.sex == "male" ? `It's me! ${this.name}, the parrot!` : `${this.name} says squawk!`
        return message
    }
}