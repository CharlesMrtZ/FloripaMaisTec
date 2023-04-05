let carros = [
    {
        marca: "Fiat",
        modelo: "uno",
        ano: "2000",
        batido: false
    },
    {
        marca: "Fiat",
        modelo: "Mobi",
        ano: "2020",
        batido: false
    },
    {
        marca: "Honda",
        modelo: "civic",
        ano: "2010",
        batido: true
    },
    {
        marca: "Peugeot",
        modelo: "206",
        ano: "2012",
        batido: true
    }
]

// // carros.forEach(function(carro) {
// //     console.log('marca: ' + carro.marca);
// //     console.log('modelo: ' + carro.modelo);
// //     console.log('ano: ' + carro.ano);
// //     console.log("\n");
// // })

// carros.forEach(imprimir);

// function imprimir(carro) {
//     console.log('marca: ' + carro.marca);
//     console.log('modelo: ' + carro.modelo);
//     console.log('ano: ' + carro.ano);
//     console.log("\n");
// }


// let pessoas=[
//     {
//         nome: "João",
//         idade: "12",
//         poder: "força"
//     },
//     {
//         nome: "Maria",
//         idade: "12",
//         poder: "cura"
//     },
//     {
//         nome: "Bruxa",
//         idade: "134"
//         poder: "magia"
//     }
// ]


// const pessoasVivas = pessoas.map(function(pessoa) {
//     pessoa.status = 'viva';
//     console.log(pessoa);
// })

const numeros = [1, 7, 3, 5];

const pares = numeros.filter(function(numero){
    return numero % 2 === 0;
})

console.log(numeros);
console.log(pares);

if (pares.length === 0) {
    console.log("não tem nenhum numero par")
}

const primeiroImpar = numeros.find(function(numero){
    return numero % 2 === 1;
});

console.log('primeiro numero impar: ', primeiroImpar);

const temNumeroDesejado = numeros.find(function(numero){
    let numeroDesejado = numero === 4 ? 'tem o numero desejado.' : 'Não tem o numero desejado.'
    console.log(numeroDesejado);
});



// const carrosBatidos = carros.filter(function(carro){
//     return carro.batido === true
// }).filter(carro => console.log(`O veiculo ${carro.marca} ${carro.modelo} já foi batido.`))

// console.log(carros);