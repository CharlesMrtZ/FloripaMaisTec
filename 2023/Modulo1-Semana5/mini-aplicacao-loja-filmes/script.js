const newMovieTitle = document.querySelector("#new-movie-title");
const newMovieGrade = document.querySelector("#new-movie-grade");
const newMovieDuration = document.querySelector("#new-movie-duration");
const btnNewMovieEntry = document.querySelector("#btn-new-movie-entry");
const contadorMinutos = document.querySelector("#tempoAssistido");

const btnSearch = document.querySelector("#btnSearch");
const searchInput = document.querySelector("#search");
const searchResult = document.querySelector("#searchResult");

const movieList_el = document.querySelector('#movieList')


let minutosAssistidos = 0

let filmes = [
    {
        title:"Vingadores Ultimato",
        titleId: "VingadoresUltimato",
        grade: 9,
        duration: 183,
        watched: false,
        favorite: false,
    }, 
    {
        title:"Matrix",
        titleId: "Matrix", 
        grade: 10,
        duration: 136,
        watched: false,
        favorite: true,
    }, 
    {
        title:"Donnie Darko",
        titleId: "DonnieDarko", 
        grade: 10,
        duration: 117,
        watched: false,
        favorite: true,
    }, 
    {
        title:"Laranja Mecânica", 
        titleId: "LaranjaMecanica",
        grade: 0,
        duration: 136,
        watched: false,
        favorite: false,
    }
    ];

window.onload = filmes.map(
    filme => mostrarCardFilme(
        filme.title, 
        filme.grade, 
        filme.duration, 
        filme.watched, 
        filme.favorite
    )
);
        
btnNewMovieEntry.addEventListener('click', cadastrarFilme);
searchInput.addEventListener('input', buscarFilme);



class NewFilme{
    title;
    grade;
    duration;

        constructor(title, grade, duration, watched, favorite){
            this.title = title;
            this.titleId = title.replace(/\s+/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            this.grade = grade;
            this.duration = duration;
            this.watched = watched
            this.favorite = favorite
        }
};

function cadastrarFilme(newTitle, newGrade, newDuration) {
    newTitle = newMovieTitle.value;
    newGrade = Number(newMovieGrade.value);
    newDuration = Number(newMovieDuration.value);

    const newFilme = new NewFilme(newTitle, newGrade, newDuration);

    if (newTitle == ""){
        alert('Insira todos os dados corretamente')
    } else{
                
            if (filmes.find((filme) => filme.title === newTitle)){
                alert('ja tem o filme')
            } else {
                filmes.push(newFilme);
                alert('Filme adicionado com sucesso');
                mostrarCardFilme(newTitle, newGrade, newDuration);
            }
                console.log(filmes)

                newMovieTitle.value = ""
                newMovieGrade.value = ""
                newMovieDuration.value = ""
        }
    };

function mostrarCardFilme(parametroTitulo, parametroNota, parametroDuracao, parametroWatched, parametroFavorite) {
    const replace = parametroTitulo.replace(/\s+/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    const div = document.createElement('div')
    div.classList = ('movieItem')
    
    const divCard = document.createElement('div')
    divCard.classList = ('divCard')

    const figure = document.createElement('figure')
    
    const img = document.createElement('img')
        img.id = `cardMovie${parametroTitulo}`
        img.src = "https://source.unsplash.com/random/250x200";

    const pDuration = document.createElement('p')
        pDuration.innerText = (`duração do filme: ${parametroDuracao} minutos`)
    
    const pGrade = document.createElement('p')
        pGrade.innerText = (`nota: ${parametroNota}`)
        
    const h3 = document.createElement('h3')
         h3.innerText = (`${parametroTitulo}`)

    const divIcons = document.createElement('div')
    divIcons.classList = ('divIcons')
    const divIconWatched = document.createElement('div')
    divIconWatched.classList = ('divIconWatched')
    const divIconFavorite = document.createElement('div')
    divIconFavorite.classList = ('divIconFavorite')

    const iconWatched = document.createElement('img')
        iconWatched.id = `${replace}Watched`
        if (parametroWatched == true) {
            iconWatched.src = `./assests/watched-yes.svg`
        } else {
            iconWatched.src = `./assests/watched-no.svg`
        }

        iconWatched.addEventListener('click', function assistirFilme(){
            let idFilmeWatched = iconWatched.id
            let idFilme = idFilmeWatched.replace('Watched', '')
            let filmeAssistido = filmes.find(function(filme){
                return filme.titleId === idFilme
            })
                if (!filmeAssistido.watched) {
                filmeAssistido.watched = true
                minutosAssistidos = minutosAssistidos + parametroDuracao
                console.log("Agora " + filmeAssistido.title + " é um filme assistido.");
                iconWatched.src = `./assests/watched-yes.svg`
                contadorMinutos.innerHTML = `Você já gastou <b>${minutosAssistidos} minutos</b> assistindo filmes`
                return minutosAssistidos
            } else {
                filmeAssistido.watched = false
                console.log("Agora " + filmeAssistido.title + " não é um filme assistido.");
                minutosAssistidos = minutosAssistidos - parametroDuracao
                iconWatched.src = `./assests/watched-no.svg`
                contadorMinutos.innerHTML = `Você já gastou <b>${minutosAssistidos} minutos</b> assistindo filmes`
                return minutosAssistidos
            }
            console.log(minutosAssistidos);
        })
        
    const iconFavorite = document.createElement('img')
        iconFavorite.classList= ('favorito')
        iconFavorite.id = `${replace}Favorite`
        if (parametroFavorite == true) {
            iconFavorite.src = './assests/favorite_yes.svg'
        } else {
            iconFavorite.src = './assests/favorite_no.svg'
        }

        iconFavorite.addEventListener('click', function favoritarFilme(){
            let idFilmeFavorite = iconFavorite.id
            let idFilme = idFilmeFavorite.replace('Favorite', '')
            let filmeFavorito = filmes.find(function(filme){
                return filme.titleId === idFilme
            })
                if (!filmeFavorito.favorite) {
                filmeFavorito.favorite = true
                console.log("Agora " + filmeFavorito.title + " é um filme favorito.");
                iconFavorite.src = './assests/favorite_yes.svg'
        
            } else {
                filmeFavorito.favorite = false
                console.log("Agora " + filmeFavorito.title + " não é um filme favorito.");
                iconFavorite.src = './assests/favorite_no.svg'
            }
            console.log(filmes);
        })
       
    figure.appendChild(img)
    div.appendChild(figure)
    divCard.appendChild(h3)
    divCard.appendChild(pDuration)
    divCard.appendChild(pGrade)
    divIconWatched.appendChild(iconWatched)
    divIconFavorite.appendChild(iconFavorite)
    div.appendChild(divCard)
    divIcons.appendChild(divIconWatched)
    divIcons.appendChild(divIconFavorite)
    divCard.appendChild(divIcons)
    movieList_el.appendChild(div)
};

window.onload = setTimeout(() => {
    contadorMinutos.innerHTML = `Você já gastou <b>${minutosAssistidos} minutos</b> assistindo filmes`
}, 1000);

function buscarFilme(){
    
    const searched = searchInput.value
    const filmeFiltrado = (filmes, termo) => filmes.find((filme) => filme.title.toLowerCase().includes(termo.toLowerCase()));
    
    
    movieList_el.innerHTML= `<div></div>`
    if (searched !== "") {
        const filmeResult = filmeFiltrado(filmes, searched)
        console.log(filmeResult);
            if (filmeResult !== undefined) {
                // console.log(filmeFiltrado(filmes, searched))
                // console.log(filmeResult.title)
                mostrarCardFilme(filmeResult.title, filmeResult.grade, filmeResult.duration)
                console.log(filmeResult);
                searchResult.innerHTML= ""
            } else {
                // alert('Não encontrou o filme');
                searchResult.innerHTML= `<div id="searchResult">Nenhum filme com este nome foi encontrado.</div>`
            }
    } else {
        console.log("Digite um titulo");
    }
};



