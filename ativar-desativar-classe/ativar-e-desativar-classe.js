const botao = document.querySelector(".botao"); // peguei o elemento
console.log(botao);

// criei a função
function mostrar() {
  const texto = document.querySelector(".texto"); // peguei o elemento que vai mudar
  texto.classList.toggle("ativar"); // add e removi através do toggle a classe
}

botao.addEventListener("click", mostrar); // adicionei o evento de click para a função
