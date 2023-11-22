// 2 task
let func = (name, age="19") => `My name is ${name}, I am ${age}.`;
//alert(func("Oleksandr"));

// 3 task
class Human {
    constructor(name, age, weight, gender) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
    
    getInfo(prop) {
        if (prop === null) {
            let info = `Name: ${this.name}\nAge: ${this.age}\nWeight: ${this.weight}\nGender: ${this.gender}`;
            return info;
        } else if (Object.keys(this).includes(prop)) {
            return this[prop];
        } else {
            return `Invalid property: ${prop}`;
        }
    }

    greeting() {
        return "Hi!";
    }
}

const person = new Human("Alex", 19, 69, "Male");

// alert(person.getInfo('age'));

// Task 6
class Man extends Human {
    constructor(name, age, weight) {
        // Виклик конструктора базового класу
        super(name, age, weight, "Male");
    }

    greeting() {
        return `Hi! My name is ${this.name}, and I am ${this.age} years old.`;
    }
}

class Woman extends Human {
    constructor(name, age, weight) {
        // Виклик конструктора базового класу
        super(name, age, weight, "Female");
    }

    greeting() {
        return `Hi! My name is ${this.name}.`;
    }
}

const john = new Man("Alex", 19, 69);
const jane = new Woman("Jane", 18, 60);


// alert(alex.greeting());
// alert(jane.greeting());

// Task 7
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const people = [];

for (let i = 0; i < 15; i++) {
    const randomName = `Person${i + 1}`;
    const randomAge = getRandomInt(20, 40);
    const randomWeight = getRandomInt(50, 90);

    const randomGender = getRandomInt(0, 1) === 0 ? "Male" : "Female";

    const person = randomGender === "Male"
        ? new Man(randomName, randomAge, randomWeight)
        : new Woman(randomName, randomAge, randomWeight);

    people.push(person);
}

// Перевірка результату
for (const person of people) {
    alert(person.getInfo());
    alert(person.greeting());
}