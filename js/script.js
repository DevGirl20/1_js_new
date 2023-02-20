//1.1
//написали можливі способи підключення
//1.2
let nameSurname = '';
let userName = '';
let name1 = '';
let name$ = '';
let name_Surname = '';

//let 1name_Surname = '';
//let имя = '';
//let let = '';
//let name-surname = ''; (под вопросм в одних статьях пишут, что можно, в других - не поддерживается "-" )

//1.3

/* ... */

//...

//

/**
* 
*
*
*
*/

//1.4
//loverCamelCase
//CamelCase
//snake_case

//2.1

let name = prompt("Напиши свое имя и фамилию");
alert(`Привет ${name}`);

//2.2
const yearNow = 2023;
let whatYourAge = prompt("Напиши какого ты года рождения");
alert(`Тебе ${yearNow - whatYourAge}`);


//2.3
let length = prompt("Я помогу посчитать периметр квадрата - напиши длину стороны квадрата");
alert(`периметр твоего квадрата -  ${4 * length}`);


//3.1
let radius = prompt("Теперь давай посчитаем площадь круга - напиши радиус своего круга ");
let pi = Math.PI;
let square = pi * Math.pow(radius, 2);
alert(`площадь твоего круга - ${square.toFixed(2)}`);

//3.2
let distance = prompt("Укажи рассстояние в киломметрах между двумя городами");
let time = prompt("Укажи время за которое тебе нужно добраться");
let speed = distance / time;
alert(`тебе нужно ехать со скоростью - ${speed} км/час`);

//3.3
const euro = 0.93;
let dollars = prompt("Укажи сколько долларов тебе нужно перевести в евро");
let exchange = dollars * euro;
alert(`У  тебя получится - ${exchange.toFixed(0)} euro`);
