var marcasVeiculos = ["Toyota", "Chevrolet"];

function cadastrarMarcas(nomeDaMarca){
  nomeDaMarca = "Fiat";
  marcasVeiculos.push(nomeDaMarca);
  console.log(`Marca ${nomeDaMarca} cadastrada com sucesso!`)
}
cadastrarMarcas();
console.log(marcasVeiculos)

var modelosVeiculos = ["etios", "celta"];

function cadastrarModelo(modeloDeVeiculo){
  modeloDeVeiculo = "siena";
  modelosVeiculos.push(modeloDeVeiculo);
  console.log(`O modelo ${modeloDeVeiculo} foi cadastrado com sucesso!`)
}
cadastrarModelo();
console.log(modelosVeiculos)

var veiculos = [{cor:"vermelho", km: 10000},{cor:"branco", km: 15000}]

function cadastrarVeiculos(veiculo){
  veiculo = {cor:"cinza", km: 13000};
  veiculos.push(veiculo);
  console.log(`A cor ${veiculo.cor} foi cadastrado com sucesso!`)
  console.log(`A kilometragem ${veiculo.km} foi cadastrado com sucesso!`)
}
cadastrarVeiculos();
console.log(veiculos)

veiculosCadastrados = {Marca: marcasVeiculos[0], modelo: modelosVeiculos[0], veiculo: veiculos[0]}

console.log(veiculosCadastrados)
