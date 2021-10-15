//verifica se é palindromo
/* function ehPalindromo(palavra){
  
  let palavraAoContrario = palavra.split('').reverse().join('')
  
  if (palavra == palavraAoContrario){
    return true
  } else {
    return false
  }
} */

//retorna numero maior e indice em um array
/* function indiceDoMaiorNumero(arr){
  let nMaior = 0
  let indMaior = 0
  for (let i in arr){
    if (arr[i] > nMaior){
      nMaior = arr[i]
      indMaior = i
    }
  }
  console.log(nMaior)
  console.log(indMaior)
} */


//retorna numero menor e indice em um array
/* function indiceDoMenorNumero(arr){
  let nMenor = arr[0]
  let indMenor = 0
  for (let i in arr){
    if(arr[i] < nMenor){
      nMenor = arr[i];
      indMenor = i;
    }
  }
  console.log(nMenor)
  console.log(indMenor)
} */

/* function mostraMaiorNome(arrNomes){
  let maiorNome = ''
  for (let nome of arrNomes){
    if (nome.length > maiorNome.length){
      maiorNome = nome;
    }
  }
  console.log(maiorNome);
}

mostraMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']) */

function numeroQueMaisRepete(arr){
  
  let maisSeRepete = '';
  for (n of arr){
    let contaRepeticao = 0;
    for(r of arr){
      if(n == r){
        contaRepeticao += 1;
      }
    }
    
  }
}

numeroQueMaisRepete([2, 3, 2, 5, 8, 2, 3])