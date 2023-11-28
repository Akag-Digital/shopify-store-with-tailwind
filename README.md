# Executando com Docker

## Configuração Inicial
Caso o seu docker for mais atualizado
o comando que deve ser execultado e o 
`docker compose` e nao o `docker-compose`.

Realize o build do container se for a primeira vez:
```bash
$ docker-compose up --build
```


Acesse o container:
```bash
$ docker exec -it {NOME_DO_CONTAINER} bash
```

Dentro do container, execute:

```bash
$ shopify theme dev --store={URL_DA_LOJA}
```

Após executar este comando, pressione Enter. Em poucos segundos, ele retornará um link. Clique no link para fazer login no Shopify CLI.

Depois de fazer o login, será fornecida uma URL de retorno. Copie esta URL e, em outra aba do terminal, execute o seguinte comando curl:

```bash
$ curl "{URL_DE_RETORNO}"
```


Após isso, você estará logado no CLI. No mesmo terminal em que você executou o comando curl, execute o seguinte:

```bash
$ yarn css
```

Para execuções subsequentes, você pode pular as etapas iniciais. Basta executar:

```bash
$ docker-compose up -d
```


Acesse o container:

```bash
$ docker exec -it {NOME_DO_CONTAINER} bash
```
Dentro do container, execute:

```bash
$ shopify theme dev --store={URL_DA_LOJA}
```
E em seguida:

```bash
$ yarn css
```

Isso agilizará o processo, e você não precisará repetir todas as etapas da configuração inicial.


feito isso ira logar no cli e pronto
basta no mesmo terminal onde execultou o curl execulta 
o comando abaixo
```yml
   yarn css
```

apois a primeira ves quando for rodalo novamente 
rodara mais rapido e nao precisarar fazer todos os passos 
precisando somente execulta
```yml
    docker compose up -d or docker-compose up -d
```
acesse o container :
```yml
    docker exe -it {NAME OF CONTAINER} bash
```
dentro do container execute:
```yml
   shopify theme dev --store={URL OF STORE}
```
```yml
   yarn css
```

## RUN WITHOUT DOCKER
### ❓ Starter theme store with tailwind

- Aplicação para loja online.

### 🏃🏽‍♀️ Run

- Run yarn to install dependecies
```yml
    yarn 
```
- Leave this command running so you can listen to liquid changes
```yml
    yarn start
```
- Leave this command running so you can listen to css theme changes
```yml
    yarn css
```

### ⚠️ Obs

- Make sure you have the [Shopify Theme](https://shopify.dev/docs/themes/tools/theme-kit/getting-started#linux) installed


