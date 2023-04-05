import { somar, multiplicar, dividir } from './src/modules/calculos.js';

import { cadastrar as cadastrarProduto, remover, editar } from './src/modules/produtos.js';
import { cadastrar as cadatrarFornecedor } from './src/modules/fornecedores.js';

import Produto, { validarNome, validarPreco } from './src/modules/models/Produto.js';
// import Produto, * outrasFuncoes from './src/modules/models/Produto.js';

// const resultadoDaSoma = somar(10, 2);
// const resultadoDaMultiplicacao = multiplicar(10, 2);
// const resultadoDaDivisao = dividir(10, 2);

// console.log(resultadoDaSoma);
// console.log(resultadoDaMultiplicacao);
// console.log(resultadoDaDivisao);

// console.log(editar());

// const pessoa = new Produto('Iphone 12', 1500)
// console.log(pessoa);

console.log(cadastrarProduto());
// console.log(cadatrarFornecedor());

