## Promises

Funções assíncronas

### then/catch

```js
fetch('https://api.github.com/users/giovanaraphaelli')
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    console.log(body);
  })
  .catch((erro) => {
    console.log(erro);
  })
  .finally(() => {
    console.log('executa independe se deu certo ou errado');
  });
```

### async/await

```js
async function buscaDadosNoGithub() {
  try {
    const response = await fetch(
      'https://api.github.com/users/giovanaraphaelli'
    );
    const body = await response.json();
    console.log(body);
  } catch (erro) {
    console.log(erro);
  } finally {
    console.log('executa independe se deu certo ou errado');
  }
}

buscaDadosNoGithub();
```
