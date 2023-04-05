import Fornecedor from './models/Fornecedor.js'

export function cadastrar(produto) {
    console.log('Fornecedor cadastrado com sucesso!!');
}

export function buscarFornecedorPorProduto(produto) {
    // fazer a busca (find)
    const fornecedor = new Fornecedor('XYZ', '1231231231');
    return fornecedor;
}