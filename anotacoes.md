#Manipulação do DOM#

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

#Tipo de Dados#

- String = Representa um texto, colocando em aspas simples ou duplas.
  Podemos utilizar o sinal de + para concatenar
- Number
- Object
- Array
- Boolean
- Null/Undefined

**Transformar String em Número: const transformar = Number("20");**

#Objetos#

Manter os dados associados e organizados

Ex:

```javascript
const livro = {
nome: "O Senhor dos Anéis"
ano: 1954,
autor: "J. R. R. Tolkien"
}
```
