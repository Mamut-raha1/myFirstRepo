"use strict"

let title = prompt ('Как называется ваш проект?', 'Введите название проекта');
let screens = prompt ('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt ('Сколько будет стоить данная работа?', '12000');
let rollback = 52;
let adaptive = confirm ('Нужен ли адаптив на сайте?');
let service1 = prompt ('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt ('Сколько это будет стоить?');
let service2 = prompt ('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt ('Сколько это будет стоить?');

const getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1+servicePrice2;
};

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice (screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
};
const fullPrice = getFullPrice(screenPrice, allServicePrices);

const getRollbackMessage = function(price) {
    switch(true) {
    case price>=30000:
        return 'Даем скидку в 10%';
    case 15000<=price ?? price <30000:
        return 'Даем скидку в 5%';
    case 0<=price ?? price <15000:
        return 'Скидка не предусмотрена';
    default:
        return 'Что-то пошло не так';
    };
};

const getServicePercentPrices = function (fullPrice, rollback){
    return fullPrice-(fullPrice*(rollback/100));
};

const servicePercentPrice = getServicePercentPrices (fullPrice, rollback);

const getTitle = function(title){
    title=title.trim().toLowerCase();
    return title.charAt(0).toUpperCase() + title.slice(1);
};
title=getTitle(title);

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);


console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} долларов`);
console.log(`Стоимость разработки сайта ${fullPrice} долларов`);
console.log(screens.toLowerCase().split(", "));