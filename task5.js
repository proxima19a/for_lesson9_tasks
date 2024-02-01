let clientsEstimations=[];
function askClientToGiveEstimation() {
    let userRating=Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'));
    if (userRating>=1 && userRating<=10){
        clientsEstimations.push(userRating);
    }
}

for (let i=0;i<5;i++){
    askClientToGiveEstimation();   
}

const goodEstimations=clientsEstimations.filter(
    (userRating)=>userRating>5
);

const notGoodEstimations=clientsEstimations.filter(
    (userRating)=>userRating<=5
);

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);