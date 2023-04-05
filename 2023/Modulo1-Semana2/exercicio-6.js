
var valorIngresso;
var espectador = {
    nome: "Roberto",
    genero: "masculino", 
    idade: 61, 
    estudante: false};


if(espectador.genero == "masculino" && espectador.idade >= 18){
    if(espectador.idade >= 60 || espectador.estudante == true){
        valorIngresso = "entrada gratuita";
        console.log(`${espectador.nome} terá a ${valorIngresso}`)
    } else {
        valorIngresso = 80;
        console.log(`${espectador.nome} pagará R$ ${valorIngresso}`)
    }

} else if (espectador.genero == "feminino" && espectador.idade >= 18) {
    if(espectador.idade >= 60 || espectador.estudante == true){
        valorIngresso = "Entrada Gratuita";
        console.log(`${espectador.nome} terá a ${valorIngresso}`)
    } else {
        valorIngresso = 50;
        console.log(`${espectador.nome} pagará R$ ${valorIngresso}`)
    }
} else if (espectador.idade <= 18 && !espectador.estudante) {
    valorIngresso = "entrada proíbida";
    console.log(`${espectador.nome} terá a ${valorIngresso}`)
}
else{
    valorIngresso = "Entrada Gratuita";
    console.log(`${espectador.nome} terá a ${valorIngresso}`)
}