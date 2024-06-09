// Вызов несуществующей функции у объекта

let myObject = {
    key1: "value1",
    key2: "value2"
};

// Пробуем вызвать несуществующую функцию
console.log(myObject.countLetters("example string"));

// Добавляем функцию к прототипу объекта
Object.prototype.countLetters = function(str) {
    if (typeof str === 'string') {
        return str.replace(/\s+/g, '').length;
    }
    return 0;
};


console.log(myObject.countLetters("example string"));


// Функция возведения числа в степень

Number.prototype.power = function(exp) {
    return Math.pow(this, exp);
};


let number = 2;
let exponent = 3;
console.log(number.power(exponent)); // 8


// Создание объекта с полями и геттерами/сеттерами
let person = {
    _firstName: "John",
    _lastName: "Doe",
    _day: new Date().getDate(),
    _month: new Date().getMonth() + 1,
    _year: new Date().getFullYear(),

    get firstName() {
        return this._firstName;
    },
    set firstName(value) {
        this._firstName = value;
    },

    get lastName() {
        return this._lastName;
    },
    set lastName(value) {
        this._lastName = value;
    },

    get day() {
        return this._day;
    },
    set day(value) {
        this._day = value;
    },

    get month() {
        return this._month;
    },
    set month(value) {
        this._month = value;
    },

    get year() {
        return this._year;
    },
    set year(value) {
        this._year = value;
    }
};

// Удаление имени и фамилии запретим с помощью Object.defineProperty
Object.defineProperty(person, 'firstName', { configurable: false });
Object.defineProperty(person, 'lastName', { configurable: false });


person.firstName = "Jane";
person.lastName = "Smith";

// Цикл для вывода всех полей
for (let key in person) {
    if (person.hasOwnProperty(key) && key.startsWith('_')) {
        console.log(`${key.substring(1)}: ${person[key]}`);
    }
}
