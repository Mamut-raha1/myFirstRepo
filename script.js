"use strict"

let title = prompt ('Как называется ваш проект?', 'Введите название проекта');
let screens = prompt ('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt ('Сколько будет стоить данная работа?', '12000');
let rollback = 52;
let adaptive = confirm ('Нужен ли адаптив на сайте?');

let service1 = prompt ('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt ('Сколько это будет стоить?')
let service2 = prompt ('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt ('Сколько это будет стоить?')

const fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice-rollback)
console.log(servicePercentPrice)

switch(true) {
    case fullPrice>=30000:
        console.log('Даем скидку в 10%');
        break
    case 15000<=fullPrice ?? fullPrice <30000:
        console.log('Даем скидку в 5%');
        break
    case 0<=fullPrice ?? fullPrice <15000:
        console.log('Скидка не предусмотрена');
        break
    default:
        console.log('Что-то пошло не так');
}
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log(`Стоимость разработки сайта ${fullPrice} долларов`);

console.log(screens.toLowerCase().split(", "));

console.log(fullPrice*(rollback/100));