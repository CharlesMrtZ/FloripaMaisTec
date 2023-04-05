const nome_el = document.querySelector('#input-nome')
const img_el = document.querySelector('#input-imagem')
const description_el = document.querySelector('#input-descricao')
const btn_confirm_el = document.querySelector('#btn-criar-usuario')

const img_template = "https://source.unsplash.com/random/250x200"

btn_confirm_el.addEventListener('click', cadastrarUsuario)

const usuarios = [];

class Usuario {
    nome;
    img;
    descricao;

    constructor(nome, img, descricao){
        this.nome = nome;
        this.img = img;
        this.descricao = descricao;
    }
}

function cadastrarUsuario(){
    const obj = new Usuario(nome_el.value, img_template, description_el.value)
    usuarios.push(obj)

    const div = document.querySelector('#container-itens')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    li.classList = "li-usuario"
    li.innerText = obj.nome;
    const img = document.createElement('img')
    img.src = img_template;
    const p = document.createElement('p')
    p.innerText = obj.descricao;

    ul.appendChild(img);
    ul.appendChild(li);
    ul.appendChild(p);
    div.appendChild(ul);
    



    console.log(obj)
    console.log(usuarios)
}