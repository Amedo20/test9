//дз 23 урок:
//1:
let arr_1= [101, 202, 303, 404, 505];
let arr_2 = [606, 707, 808, 909];

let superArr = [...arr_1, ...arr_2];
console.log(superArr);
//2:
console.log(Math.min(...superArr));
//3:
let obj = {
    width: 300,
    height: 550
}

let objNew = {
    ...obj,
    area: function() {
        return `${this.width}` * `${this.height}`
    }
}
console.log(objNew.area())
//4:
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
console.log(sum());
console.log(sum(5, -5, 10)); 


//ПРАКТИКА ДЛЯ СЕБЯ
/* let a = 1;
let b = 5;

a = b

console.log(a)
console.log(b)

b = 2

console.log(a)
console.log(b) */

let arr = [2, 4, 3]
let arr2 = [...arr, 567]; //это просто ссылка на массив
arr2[2] = 55;
console.log(...arr)// spread оператор убирает квадратные скобки массива и запятые внутри
console.log(arr2)

let objj = {
    name: 'Ali', //если ключи одинаковые то эти ключи убираются(в одном из двух объектов)
    city: 'Grozmy'
}
let obj3 = {
    car: 'Mers',
    house: 'Big'
}
/* let obj2 = obj; //это просто ссылка на объект 
obj2.age = 34 */

/* ... */ //это spread оператор, он раскрывает объект или массив
let obj2 = {
    ...objj, 
    ...obj3
}; //фигурные скобки  нужны чтобы раскрыть свойства внутри obj, иначе spread оператор не сработает
//вложенные объекты spread оператор не копирует
obj2.age = 34
console.log(objj)
console.log(obj2)

//rest оператор:
//аргумент после трех точке уже не переменная а массив и в него помещается все что мы хотим туда передать это и называется rest оператором
function fn(...arguments)  { 
    console.log(arguments);
}
fn(3, 32, 56, 45, 3, 32, 56, 45);
//пишем троеточие и название аргумента (как хотим называем), и в функцию можно передать столько аргументов сколько мы хотим
//rest оператор используется только в функциях, a spread оператор используется во всех остальных случаях
//с этим массивом мы можем работать как с обычным массивом и к нему можно применить все методы:
function fn(a, b, c, ...args) { //перед rest оператором можно добавить аргументы, но после нельзя
    //args.forEach(item => console.log(item))
    console.log(a, b, c, args)
}
fn(22, 66, 75, 55);

let obj4 = {
    name: 'Ali',
    city: 'Grozny',
    population: 200000
}
//эта запись обозначает что мне нужен ключ name из объекта obj4:
let {name} = obj4;
//выведет значение своЙства name т.е. Ali
console.log(name)
let {city, population} = obj4;
console.log(city, population);

let array = ['ali', 'eeee']

let [something, forname] = array;
console.log(something, forname);

