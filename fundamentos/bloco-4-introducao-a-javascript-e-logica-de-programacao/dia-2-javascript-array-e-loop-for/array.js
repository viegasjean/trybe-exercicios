let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//imprimir todos os valores do array
for(i in numbers){
  console.log(numbers[i]);
}

//somar todos os valores do aray
let sum = 0;
for(i in numbers){
  sum += numbers[i];
}
console.log(sum)

//media aritmetica
let media = sum / numbers.length
console.log(media)

//se media é maior que 20
if (media > 20){
  console.log("valor maior que 20");
} else {
  console.log("valor menor que 20")
}

//maior valor no array
let maiorNumero = numbers[0];
for (i in numbers){
  if (maiorNumero < numbers[i]){
     maiorNumero = numbers[i]
  } 
}
console.log("o maior numero é: " + maiorNumero)


// se tem numero impar
let quantidadeDeImpar = 0;
for(i in numbers){
  if(numbers[i] % 2 == 1){
    quantidadeDeImpar += 1;
  } 
}
if(quantidadeDeImpar == 0){
  console.log("nenhum impar")
}
console.log(quantidadeDeImpar)

//menor numero do array
let maiorNumero = numbers[0];
for (i in numbers){
  if (maiorNumero > numbers[i]){
     maiorNumero = numbers[i]
  } 
}
console.log("o menor numero é: " + maiorNumero)

//crie array de 1 a 25 e imprima 
let arrAte25 = [];
for(let i = 1; i <= 25; i+=1){
  arrAte25.push(i);
}
console.log(arrAte25);

//array anterior dividido pra 2
for(i in arrAte25){
  console.log(arrAte25[i] / 2)
}