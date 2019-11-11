# Survey Front-end

Interface para criação e votação em enquetes, para ser usada juntamente com o projeto [Survey API](https://github.com/giovanef/survey-api).


## Inicialização

### Pré-requisitos

Para a execução deste projeto, é necessária a instalação do Node.js.


### Instalação

1. Após o download do repositório, instale as dependências usando o npm:
    ```
    npm install
    ```

2. Faça uma cópia do arquivo *```env.example```* renomeie-a para *```.env```* e preencha a opção *```VUE_APP_API_URL```* com a URL da API.

3. Execute o servidor de desenvolvimento, usando o comando:
    ```
    npm run serve
    ```

4. Acesse a URL que aparece no terminal (normalmente http://localhost:8080).


## Compilando para produção
Para compilar o projeto para produção, execute o comando:
```
npm run build
```

## Testando

Para rodar os testes, execute o comando:
```
npm run test:unit
```
