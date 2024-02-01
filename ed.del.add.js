const salariesOfDevelopers=[400,500,600,2000,350];

//Add elements
const newSeniorDeveloperSalary=5000;
salariesOfDevelopers.push(newSeniorDeveloperSalary,5001,5100);
//console.log('salariesOfDevelopers',salariesOfDevelopers);

salariesOfDevelopers.unshift(100,101,102,103);
//console.log('salariesOfDevelopers',salariesOfDevelopers);

//Delete elements
const firstRemovedElement=salariesOfDevelopers.shift();
salariesOfDevelopers.shift();

salariesOfDevelopers.pop();
const lastRemovedElement=salariesOfDevelopers.pop();

console.log('salariesOfDevelopers',salariesOfDevelopers);
console.log('firstRemovedElement',firstRemovedElement);
console.log('lastRemovedElement',lastRemovedElement);

//Change elements
salariesOfDevelopers[4]=6000;
console.log('salariesOfDevelopers',salariesOfDevelopers);