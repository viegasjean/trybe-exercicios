let nota = 101;
let conceito;
if(nota > 100){
    conceito = 'Ultrapassa nota máxima'
} else if (nota >= 90){
    conceito = 'A'
} else if (nota>= 80){
    conceito = 'B'
} else if (nota >= 70){
    conceito = 'C'
} else if (nota >= 60){
    conceito = 'D'
} else if (nota >= 50){
    conceito = 'E'
} else if (nota < 50){
    conceito = 'F'
} else if (nota < 0){
    conceito = 'inferior a zero'
}


console.log(conceito)