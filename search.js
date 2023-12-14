export function searchPeople(list, searchField, searchValue) {
    const delay = 1000;

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
}
