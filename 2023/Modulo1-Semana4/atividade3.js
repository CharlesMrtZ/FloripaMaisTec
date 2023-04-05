// Ex 3 Crie uma função que recebe um array de números e retorna a quantidade de números pares e a quantidade de números ímpares. Em seguida imprima na tela uma string informando a quantidade de valores informados, a quantidade de ímpares e de pares.
// (ex: A quantidade informada foi _____, a de valores pares foi ___ e a de valores ímpares foi __)

function verificarnumerosParesOuImpares(...nums) {
    let qtdPares = 0;
    let qtdImpares = 0;

    for (let num of nums) {
        if (num % 2 == 0)
            qtdPares++;
         else
            qtdImpares++;
        }

    return `A quantidade informada foi ${nums.length}, a de valores pares foi ${qtdPares} e a de valores ímpares foi ${qtdImpares}`

}

console.log(verificarnumerosParesOuImpares(2,3,4,6));
