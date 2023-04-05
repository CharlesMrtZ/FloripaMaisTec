export const comprarIngresso = (ingresso, pessoa) => `Sr(a) ${pessoa} acaba de adquirir o último ingresso para o show do ${ingresso.nome} se será no dia ${ingresso.data}`;

export const venderIngresso = (ingresso, pessoa) => `Sr(a) ${pessoa} seu ingresso nº ${ingresso.numero} foi vendido`;