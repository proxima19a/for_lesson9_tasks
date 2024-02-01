const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
const giveParcel=(array)=>{
  const received=array.shift();
  alert(`${received} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
}

const leaveQueueWithoutParcel=(array)=>{
  const discontented=array.pop();
  alert(`${discontented} не получил(а) посылку и ушел(ла) из очереди`);
}

giveParcel(peopleWaiting); // Кристина получила посылку
giveParcel(peopleWaiting); // Олег получил посылку
alert('Сотрудница почты говорит, что скоро у них обеденный перерыв, и она успеет обслужить только Кирилла.');

for (let i=peopleWaiting.length;i>1;i--){ // люди уходят из очереди, кроме Кирилла
  leaveQueueWithoutParcel(peopleWaiting);
}

giveParcel(peopleWaiting); // Кирилл получил посылку
