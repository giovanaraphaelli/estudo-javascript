## MÉTODOS DE ARRAY EM JS

**MAP**
Usado quando desejamos gerar um novo array

```js
const array = [1, 2, 3, 4, 5];

const novoArray = array.map((item) => item * 2);
```

**FILTER**
Nao altera os valores, ele apenas pela um pedaço do array

```js
const array = [1, 2, 3, 4, 5];

const novoArray = array.filter((item) => item % 2 === 0);
```

**EVERY**
Verifica se todos os itens satisfazem uma condição e retorna um booleano (true ou false)

```js
const array = [1, 2, 3, 4, 5];

const todosOsItensSaoNumeros = array.every((item) => typeof item === 'number');
```

**SOME**
Verifica se pelo menos um item satisfaz uma condição e retorna um booleano (true ou false)

```js
const array = [1, 2, 3, 4, 5];

const peloMenosUmItemNaoEUmNumero = array.some(
  (item) => typeof item !== 'number'
);
```

**FIND**
Encontra o primeiro item que satisfaz uma condição e retorna o item

```js
const array = [1, 2, 3, 4, 5];

const par = array.find((item) => item % 2 === 0);
```

**FINDINDEX**
Encontra o primeiro item que satisfaz uma condição e retorna o índice

```js
const array = [1, 2, 3, 4, 5];

const par = array.findIndex((item) => item % 2 === 0);
```

**REDUCE**
Usado para criar uma nova estrutura de dados baseado em um array, ele recebe dois parâmetros.
O primeiro é uma função, e o segundo é o valor inicial da nova estrutura de dados

```js
const array = [1, 2, 3, 4, 5];

const soma = array.reduce((acc, item) => {
  return acc + item;
}, 0);
```
