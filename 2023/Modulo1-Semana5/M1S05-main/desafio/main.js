import { somador } from "./src/modules/calculos.js";
import { carros, pesquisarCarros } from "./src/modules/carros.js";
import { Ingresso } from "./src/modules/classes/Ingresso.js";
import { comprarIngresso, venderIngresso } from "./src/modules/ingressos.js";
import { pesquisarTermo } from "./src/modules/utils.js";





const ingresso1 = new Ingresso('Coldplay', 400.00, '28/08/2023', '12SADV1');
const ingresso2 = new Ingresso('U2', 350.00, '04/09/2023', 'L341AV13');

const ingressoComprado1 = comprarIngresso(ingresso1, 'Ana');
const ingressoComprado2 = comprarIngresso(ingresso2, 'Joaquim');

const ingressoVendido = venderIngresso(ingresso1, 'Joaquim');

console.log(ingressoComprado1);
console.log(ingressoComprado2);
console.log(ingressoVendido);


const soma = somador([10, 20, 30]);
console.log('O resultado da soma dos valores é: ', soma);


const frase = 'Imagine uma nova história para sua vida e acredite nela.';
const termo = 'VsiDA';

console.log(pesquisarTermo(frase, termo) ? 'Encontrou o termo' : 'Não encontrou o termo');





console.log('Carros encontrados são: ', pesquisarCarros(carros, 'fiat'));