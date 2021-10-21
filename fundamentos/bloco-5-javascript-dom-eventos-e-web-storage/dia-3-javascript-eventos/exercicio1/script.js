function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

const days = document.getElementById('days')

for (d of dezDaysList){
  let day = document.createElement('li');
  day.innerText = d;
  day.className = 'day'
  days.appendChild(day)
}

const day = document.querySelectorAll('.day')

for (let i = 5; i < day.length; i +=7) {
  day[i].className = 'day friday'
}

const hollydays = [24, 25, 31]

for (d of day){
  console.log(d)
  for (h of hollydays){
    if (h == d.innerText){
      d.className = 'day hollyday'
    }
  }
}
