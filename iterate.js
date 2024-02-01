const developerNames=['Maxim','Alex','Nastya','Irina'];

/* //for
for (let i=0;i<developerNames.length;i++){
    console.log('i',i);
    console.log('item',developerNames[i]);
}

// for of
for (const name of developerNames){
    console.log('name',name);
} 

//forEach
developerNames.forEach((name,index,array)=>{
    //console.log('name',name);
    //console.log('index',index);
    console.log('array',array);
});
*/
//map
const salariesOfDevelopers=[400,500,600,2000,350];
const updatedSalaries=salariesOfDevelopers.map((salary,index,array)=>{
    return salary*2;
    
});
console.log('updatedSalaries',updatedSalaries);

//filter
const filteredSalaries=salariesOfDevelopers.filter((salary,index,array)=>{
    return index%2===0;
});
console.log('filteredSalaries',filteredSalaries);

//find
const searchedSalary=salariesOfDevelopers.find((salary)=>{
    return salary>400;
});
console.log('searchedSalary',searchedSalary);

//findindex
const searcIndex=salariesOfDevelopers.findIndex((salary)=>{
    //return salary===400;
    return salary===6000;
});
console.log('searcIndex',searcIndex);

//some, every
const elementExists=salariesOfDevelopers.every((salary)=>{
    //return salary>0; //true
    return salary>3000; //false
});
console.log('elementExists',elementExists);

const allElementExists=salariesOfDevelopers.every((salary)=>{
    //return salary>0; //true
    return salary>2000; //false
});
console.log('allElementExists',allElementExists);

//reduce

const sum=salariesOfDevelopers.reduce((acc,salary,index,array)=>{
    console.log('acc/salary',acc,salary);
},0);
console.log('sum',sum);

