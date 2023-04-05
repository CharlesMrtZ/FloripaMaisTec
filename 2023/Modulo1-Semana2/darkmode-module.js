export function darkModeFunction() {
  let botaoClaro = document.getElementById('modoClaro');
  let botaoEscuro = document.getElementById('modoEscuro');

  botaoClaro.addEventListener('click', modoClaro);
  botaoEscuro.addEventListener('click', modoEscuro);

  function modoClaro() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    botaoClaro.style.display = 'none';
    botaoEscuro.style.display = 'initial';
  }

  function modoEscuro() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    botaoEscuro.style.display = 'none';
    botaoClaro.style.display = 'initial';
  }
}
