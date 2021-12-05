//1

let user = {}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//2

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log("Suma salariilor:", sum)

//3

let obj = {
    with: 200,
    height: 800,
    title: "My menu"

}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(obj);

console.log(obj)
//4

let user1 = {
    name: "Ion",
    age: 18
}

let user2 = {
    name: "Ion",
    age: 18
}

Object.assign(user2, {name: "Piotr", age: 37})
console.log(user1)
console.log(user2)


//5

let admin = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova"
}

Object.assign(admin, {phone: "+37312345678"})
delete admin.address
console.log(admin)

//6

const wrongArr = [{x:1 ,y: 2}, {x:3, y:4}, {x:null, y:4}, {x:3, y:undefined}];

console.log(wrongArr.filter(item => item.x && item.y));

//7

let users = {
    name: "Person",
        age: 123,
    salary: 1542.33,
    contacts: {
    phone: "112",
        email: "email@domain.com"
},
    address: "Moldova"
}




//8

const weekDays = {

"Mo": "Понедельник",
"Tu": "Вторник",
"We": "Среда",
"Th": "Четверг",
"Fr": "Пятница",
"Sa": "Суббота",
"Su": "Воскресенье",

}