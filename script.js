"use strict"

let title = "Prject name";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 99;
let rollback = 52;
let fullPrice = 99554433;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log(`Стоимость разработки сайта ${fullPrice} долларов`);

console.log(screens.toLowerCase().split(", "));

console.log(fullPrice*(rollback/100))