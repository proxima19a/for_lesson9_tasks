const numbers = [10, 4, 100, -5, 54, 2];

sumF=0;
for (let i=0;i<numbers.length;i++){
    sumF+=numbers[i]**3;
}
console.log('sum_for',sumF);

let sumFof=0;
for (let number of numbers){
    sumFof+=number**3;
}
console.log('sum_for_of',sumFof);

let sumFch=0;
numbers.forEach((number)=>{
    sumFch+=number**3;
});
console.log('sum_forEach',sumFch);

let sumReduce=numbers.reduce((acc,number)=>{
    return acc+number**3;
},0)
console.log('sum_reduce',sumReduce);
