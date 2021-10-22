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

function addDays(){
  for (d of dezDaysList){
    let day = document.createElement('li');
    day.innerText = d;
    day.className = 'day'
    days.appendChild(day)
  }
}

addDays();

const day = document.querySelectorAll('.day')

for (let i = 5; i < day.length; i +=7) {
  day[i].className = 'day friday'
}

const hollydays = [24, 25, 31]

for (d of day){
  for (h of hollydays){
    if (h == d.innerText){
      d.className = 'day hollyday'
    }
  }
}

const buttonsContainer = document.querySelector('.buttons-container')

function addButton(buttonName){
  let btn = document.createElement('button');
  btn.id = 'btn-' + buttonName.toLowerCase();
  btn.innerText = buttonName
  buttonsContainer.appendChild(btn)
}

addButton('Feriados')

const btnFeriados = document.getElementById('btn-feriados')
const feriados = document.querySelectorAll('.hollyday')

btnFeriados.addEventListener('click', pintaFeriado)

function pintaFeriado(){
  for (let feriado of feriados){
    if (feriado.style.color == 'red'){
      feriado.style.color = '#777'
    } else {
       feriado.style.color = 'red'
    }
  }
}

addButton('Friday')
const btnFriday = document.getElementById('btn-friday')

btnFriday.addEventListener('click', pintaFriday)
let fridays = document.getElementsByClassName('friday')
let fridayDays = [];
function pintaFriday(){
  for (let i in fridays){
    
    if (fridays[i].innerText == 'S'){
      fridays[i].innerText = fridayDays[i]
    } else {
      fridayDays.push(fridays[i].innerText)
      fridays[i].innerText = 'S'
    }
  }
}

function zoomDays(){
  for (let d of day){
    d.addEventListener('mouseover', zoomOver)
    d.addEventListener('mouseout', zoomOut)
  }
  function zoomOver(e){
    e.target.style.fontSize =  '50px'
  }
  function zoomOut(e){
    e.target.style.fontSize =  '20px'
  }
}

zoomDays()

const myTasks = document.querySelector('.my-tasks')

function newTask(tarefa){
  let novaTarefa = document.createElement('span');
  novaTarefa.innerText = tarefa;
  myTasks.appendChild(novaTarefa)
}

function taskColor(cor) {
  let novaDiv = document.createElement('div')
  novaDiv.style.backgroundColor = cor
  novaDiv.className = 'task'
  myTasks.appendChild(novaDiv)
} 

newTask('cozinhar')
taskColor('blue')


const tasks = document.querySelectorAll('.task')

function selecionaTarefa(){
  for (let task of tasks){
    task.addEventListener('click', seleciona)
    function seleciona(){
      if (task.className == 'task selected'){
        task.className = 'task'
      } else {
        task.className = 'task selected'
      }
    }
    
  }
}
selecionaTarefa()