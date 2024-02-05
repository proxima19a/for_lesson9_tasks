// splice 

const cars=['BMW', 'Mersedes', 'Lada'];

//cars.splice(0, 2, );
const removedElements=cars.splice(0, 2, 'Audi', 'Bugatti');
console.log(cars); // Lada Audi Bugatti - текущий массив изменен
console.log(removedElements); // BMW Mersedes

//slice

const agesOfDevelopers=[25, 18, 45, 30];
console.log(agesOfDevelopers.slice(0, 2)); //25, 18 не изменяет текущий массив

console.log(agesOfDevelopers); // 25, 18, 45, 30

const slicedAgesOfDevelopers=agesOfDevelopers.slice(0, 2);
console.log(slicedAgesOfDevelopers); // 25, 18
console.log(agesOfDevelopers); // 25, 18, 45, 30  начальный массив не изменен

// indexOf проверяет, существует ли какой-то элемент в массиве, возвращает индекс этого элемента или "-1"

const favouriteFood=['meat', 'vegtables', 'tea'];

const indexOfFood= favouriteFood.indexOf('tea');
console.log(indexOfFood); // 2
const indexOfFood1= favouriteFood.indexOf('123');
console.log(indexOfFood1); // -1 нет такого элемента

// includes проверяет, существует ли какой-то элемент в массиве, возвращает true либо false

const technologies=['JavaScript','HTML','CSS'];
const isTechologyExists=technologies.includes('CSS');
console.log(isTechologyExists); // true

const isTechologyExists1=technologies.includes('C++');
console.log(isTechologyExists1); // false

// split + join

const listOfOrders='Shirt, pants, shoes, bag';
const listOfOrdersArray0=listOfOrders.split();
console.log(listOfOrdersArray0); // ['Shirt, pants, shoes, bag'] масссив из 1 элемента
const listOfOrdersArray=listOfOrders.split(', ');
console.log(listOfOrdersArray0); // [Shirt, pants, shoes, bag] масссив из 4 элементов

const ordersString= listOfOrdersArray.join('; ');
console.log(ordersString); // ['Shirt; pants; shoes; bag'] масссив из 1 элемента, состоящего из слов, разделенных ";"

//reverse

technologies.reverse();
console.log(technologies); // 'CSS','HTML','JavaScript'