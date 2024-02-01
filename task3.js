const coffees = ['Latte', 'Cappuccino', 'Americano'];

// let coffeeName=prompt('Поиск кофе по названию:').toLowerCase();

// if (coffeeName===coffees[0].toLowerCase() || 
//     coffeeName===coffees[1].toLowerCase() ||
//     coffeeName===coffees[2].toLowerCase()) {
//        const number=coffees.findIndex((item)=>{
//         return item.toLowerCase()===coffeeName;
//        }); 
//     alert(`Держите ваш любимый кофе ${coffees[number]}. Он ${number+1}-й по популярности в нашей кофейне.`);
// }else{
//     alert('К сожалению, такого вида кофе нет в наличии');
// }

let favoriteCoffeeName = prompt("Поиск кофе по названию:");
favoriteCoffeeName = favoriteCoffeeName?.trim().toLowerCase();

const favoriteCoffeeIndex = coffees.findIndex(
  (coffee) => coffee.toLowerCase() === favoriteCoffeeName
);
const favoriteCoffee = coffees[favoriteCoffeeIndex];
if (favoriteCoffee) {
  alert(
    `Держите ваш любимый кофе ${favoriteCoffee}. Он ${
      favoriteCoffeeIndex + 1
    }-й по популярности в нашей кофейне.`
  );
} else {
  alert("К сожалению, такого вида кофе нет в наличии");
}