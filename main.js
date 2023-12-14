import { generatePeopleList } from './peopleGenerator';
import { searchPeople } from './search';

// Створюємо список людей
const people = generatePeopleList();

// Викликаємо функцію пошуку
searchPeople(people, "name", "Person7")
    .then(results => {
        console.log("Результати пошуку:");
        for (const person of results) {
            console.log(person.greeting());
            console.log(person.getInfo('gender'));
        }
    })
    .catch(errorMessage => console.log(errorMessage));

// Додайте це, щоб мати можливість вивести список людей в консоль
alert(people);