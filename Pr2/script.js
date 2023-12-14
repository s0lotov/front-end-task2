import Human from "./human.js";
// 2 task
let func = (age="20", name) => `My name is ${name}, I am ${age}.`;
// alert(func("Oleksandr", "20"));

// 3 task

const person = new Human("John", 30, 70, "Male");

alert(person.getInfo('age'));
alert(person.greeting());

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

const john = new Man("John", 30, 70);
const jane = new Woman("Jane", 25, 60);


// alert(john.greeting(), john.getInfo());
// alert(jane.greeting(), jane.getInfo('name'));

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
    // alert(person.getInfo());
    // alert(person.greeting());
}

// Task 8
const searchPeople = (list, searchField, searchValue) => {
    const delay = 1000; // Затримка у мілісекундах

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const results = list.filter(person => person[searchField] === searchValue);

            if (results.length > 0) {
                resolve(results);
            } else {
                reject(`За пошуком по ${searchField}:${searchValue} не знайдено.`);
            }
        }, delay);
    });
};

const peopleList = [
    new Man("Person7", 30, 70),
    new Woman("Jane", 25, 60),
];

// searchPeople(peopleList, "name", "Person7")
//     .then(results => {
//         alert("Результати пошуку:");
//         for (const person of results) {
//             alert(person.getInfo());
//         }
//     })
//     .catch(errorMessage => alert(errorMessage));
