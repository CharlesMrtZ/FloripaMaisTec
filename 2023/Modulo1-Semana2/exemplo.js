import {darkModeFunction} from "./darkmode-module.js";

// function somarDoisNumeros(numero1, numero2){
//     console.log(`Resultado: ${numero1 + numero2}`);
// }

// function verificarNota(nome, nota) {
//     if (nota >= 7) {
//         return nome + " foi aprovado";
//     }
//     return nome + " foi reprovado";
// }

// const aluno1 = verificarNota('Charles', 9);
// const aluno2 = verificarNota('Pedrinho', 4);

// console.log(aluno1, aluno2);


// nome = {
//     nombre: "charles",
//     idade: 30
// }

// for(let letras in nome){
//     console.log(letras)
// }


//         var inputValor1 = document.querySelector('#operador1');
//         var inputValor2 = document.querySelector('#operador2');

//         // console.log(inputValor1,inputValor2);

//         function somar() {
//             const valorUm = parseInt(inputValor1.value);
//             const valorDois = parseInt(inputValor2.value);
//             const resultado = valorUm + valorDois;
//             console.log(resultado)   
//         }


//         var contador = 60;

//         var btnIncremento = document.querySelector('#btn-incrementar');
//         btnIncremento.addEventListener('click', incrementar);

//         function incrementar() {
//             var intervalo = setInterval(function () {
//             contador--
            
//             console.log('valor do contador: ', contador)
//             attValor()

//             if (contador == 1){
//                 clearInterval(intervalo);
//             }
//         }, 1000)
//         }

//         function attValor() {
//             var spanValor = document.querySelector('#valor')
//             spanValor.innerText = contador;
//         }



// function sum(a, b) {
//     return a + b;
// }


const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numeros.forEach(numero => console.log(numero));

darkModeFunction()