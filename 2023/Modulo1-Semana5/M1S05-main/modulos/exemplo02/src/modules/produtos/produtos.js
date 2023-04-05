import { buscarFornecedorPorProduto } from '../fornecedores/fornecedores.js';

export function cadastrar(produto) {
    const fornecedor = buscarFornecedorPorProduto(produto);
    console.log('Produto cadastrado com sucesso!!', fornecedor);
}

export function editar(produto) {
    console.log('Produto alterado com sucesso!!');
}

export function remover(produto) {
    console.log('Produto removido com sucesso!!');
}

export function buscar(produto) {
    console.log('Produto encontrado!!');
}

// export { cadastrar, editar, remover, buscar }