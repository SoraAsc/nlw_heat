# <center>NLW Node</center>

#### Esse projeto foi criado durante a NLW, ofertado pela Rocketseat.

#### Essa parte abrange a parte do Back-end.

<br>

# Tecnologias Usadas

- Node.js
- Prisma
- TypeScript
- Json Web Token
- Socket.IO
- Express
- Axios

<br>

# Passo a Passo

1. Primeiro de tudo é necessário instalar as dependências para isso se deve usar o comando abaixo.

```
npm install
```

2. Crie o arquivo ".env" para com suas próprias configurações, sendo seus campos "JWT_SECRET", aonde você pode inserir um texto aleatório, já as propriedades GITHUB "GITHUB_CLIENT_SECRET" e "GITHUB_CLIENT_ID", as duas podem ser encontradas no caminho citado abaixo.

```
https://github.com/settings/developers
```
Nesse link é só ir em OAuth Apps e criar seu registro.


3. Após isso você deve usar usar o seguinte comando para gerar o BD junto com suas migrações.

```
npx prisma migrate dev
```

4. Com todos esses processos feitos e só rodar o projeto.

```
npm run dev
```
