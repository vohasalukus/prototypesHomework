class Good {
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.width = '2px';
    }

    create() {
        let element = document.createElement('div');
        element.style.backgroundColor = this.color;
        element.style.border = `${this.width} solid black`;
        element.style.padding = '10px';
        element.style.margin = '10px 0';
        element.innerHTML = `Name: ${this.name}, Price: ${this.price}`;
        document.body.appendChild(element);
    }
}


let good1 = new Good('Apple', '$1', 'red');
let good2 = new Good('Banana', '$0.5', 'yellow');


good1.create();
good2.create();


class User {
    constructor() {
        this.default_age = 14;
    }

    get age() {
        return this.default_age;
    }

    set age(value) {
        if (value > 0 && value < 120) {
            this.default_age = value;
        } else {
            console.log('Invalid age');
        }
    }
}


let user1 = new User();
let user2 = new User();

console.log(user1.age);
user1.age = 25;
console.log(user1.age);

console.log(user2.age);
user2.age = 130;
console.log(user2.age);


class User {
    comment() {
        return "User comment";
    }
}

class Moderator extends User {
    static type = "Moderator";

    constructor(age) {
        super();
        this.age = age;
    }

    comment() {
        return "<b>Moderator comment</b>";
    }
}


let user = new User();
console.log(user.comment());


let moderator = new Moderator(30);
console.log(moderator.comment());