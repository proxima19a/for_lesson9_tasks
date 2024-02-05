const currentDevelopers=['Maxim', 'Oleg'];
const newDevelopers=['Anton', 'Gleb'];

// concat
//1
// currentDevelopers.concat(newDevelopers, currentDevelopers);
// console.log('currentDevelopers', currentDevelopers); // ['Maxim', 'Oleg', 'Anton', 'Gleb', 'Maxim', 'Oleg']

//2 ...
const allDevelopers=[
    ...currentDevelopers,
    ...newDevelopers,
]
console.log(allDevelopers); // ['Maxim', 'Oleg', 'Anton', 'Gleb']
