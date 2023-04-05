export const pesquisarCarros = (carros, termo) => carros.filter((carro) => carro.nome.toLowerCase().includes(termo.toLowerCase()));


export const carros = [
    {
        nome: 'Fiat - Uno - 2012',
    },
    {
        nome: 'Volkswagen - Gol G2 - 2009',
    },
    {
        nome: 'Renault - Logan - 2014',
    },
    {
        nome: 'Toyota - Corolla - 2015',
    },
    {
        nome: 'Fiat - Argo - 2020'
    },
    {
        nome: 'Renault - Clio - 2022'
    }
];