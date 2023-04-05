

let salarioInicial = 1200;
let metaSalarial = 2500;
let meses = 0

for(let i; salarioInicial <= metaSalarial; i++){
    meses++
    novoSalario = ((salarioInicial / 100) * 10);
    salarioInicial += novoSalario;
    console.log("Após " + meses + " meses, o valor do salario estará: " + salarioInicial.toFixed(2));
}