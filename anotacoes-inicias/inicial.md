# Manipulação do DOM

Com Javascript nos podemos manipular a página baseado nas ações do usuário

1. Seleciona o elemento e atribui a uma variável.

Ex:

```javascript
const nav = document.querySelector("nav");
```

2. Depois altera o que você quiser nele através de propriedades e métodos
   <https://developer.mozilla.org/en-US/docs/Web/API/Element>

Ex:

```javascript
nav.style.backgroundColor = "black";
```

# Tipo de Dados

- String = Representa um texto, colocando em aspas simples ou duplas. <br>Podemos utilizar o sinal de + para concatenar
- Number
- Object
- Array
- Boolean
- Null/Undefined

**Transformar String em Número: const transformar = Number("20");**

# Objetos

Manter os dados associados e organizados.<br>
Tudo em JavaScript é Objeto! <br>Ex:

```javascript
const livro = {
  nome: "O Senhor dos Anéis",
  ano: 1954,
  autor: "J. R. R. Tolkien",
};
```

Selecionar propriedade de um objeto <br>Ex:

```javascript
console.log(livro.autor);
```

Uma simples String também é um objeto!<br>Ex:

```javascript
const autor = "J. R. R. Tolkien";
console.log(autor.length); // Da a quantidade de caracteres da String
console.log(autor.toUpperCase()); // Método para Retornar em Maiúscula

const decimal = 2.99;
console.log(decimal.toFixed()); // Para arredondar, essa função retorna em String
console.log(Number(decimal.toFixed())); // Agora convertido para número
```

# Funções

As funções (Function) são blocos de código que podem ser executados. A execução pode acontecer em diferentes cenários e diversas vezes. Para executar utilizamos os parênteses <br>Ex:

```javascript
function logCurso() {
  const nome = "JavaScript";
  const horas = "40 horas";
  console.log(nome, horas);
}

logCurso();
```

## Parâmetro e Argumento

Podemos definir parâmetros durante a criação da função. Durante a execução, podemos passar argumentos ('nome'), que serão utilizados nos parâmetros.<br>Ex:

```javascript
function logCurso(nome, horas) {
  // nome e horas são os parâmetros
  console.log(nome, horas, "horas");
}

logCurso("JavaScript", "40"); // JavaScript e 40 são os argumentos
logCurso("HTML", "20");
logCurso("CSS", "30");
```

## Retorno

Toda função retorna um valor (tipo de dado). Se o retorno não for declarado utilizado a palavra return, o valor retornado será undefined.<br>Ex:

```javascript
function logCurso(nome) {
  console.log(nome);
  return nome + " Log";
}

const valor = logCurso("JavaScript");
console.log(valor);
```

## Escopo

Uma função cria o seu próprio escopo. Isso significa que variáveis declaradas dentro de uma função, não podem ser acessadas fora das mesmas. Porém, variáveis criadas fora da função, podem ser acessadas pela mesma.<br>Ex:

```javascript
const nome = "JavaScript";

function logCurso() {
  console.log(nome);
}

// loga JavaScript
logCurso();

function logLivro() {
  const livro = "O Senhor dos Anéis";
  console.log(livro);
}

logLivro();

// Erro, pois a constante livro não existe
console.log(livro);
```

# Método

É uma função dentro de um Objeto<br>Ex:

```javascript
const curso = {
  nome: "JavaScript",
  completar() {
    console.log(this.nome + ": Curso Completo.");
  },
  horas: "40 horas",
};

curso.completar();
```

# Eventos

Podemos adicionar funções que serão executadas caso um evento ocorra. O evento ocorre no documento inteiro ou no elemento do dom. Usamos o método addEventListener para adicionar eventos.<br>Ex:

```javascript
const ativar = document.querySelector(".ativar");

function ativarAoClick() {
  console.log("Clicou em:", ativar);
}

// A função passada é chamada de callback
ativar.addEventListener("click", ativarAoClick);
```
