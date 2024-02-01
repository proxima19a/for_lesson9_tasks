function getSumOfSequence(number){
    const userArray=[];
    for (let i=0;i<number;i++){
        userArray[i]=i+1;
        //userArray.push(i);
    }
    let sum=userArray[0]+userArray[number-1];
    return sum;
    //return userArray[0]+userArray[userArray.length-1];
}

console.log( getSumOfSequence(5)); // 6
console.log( getSumOfSequence(10)); // 11
console.log( getSumOfSequence(25)); // 26