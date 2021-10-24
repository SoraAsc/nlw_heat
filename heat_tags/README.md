# HeatTags

Antes de tudo é necessário ir no arquivo `dev.exs` dentro da pasta `config` e então mudar os seguintes campos com sua informação.

```
  username: "postgres",
  password: "sua senha",
  database: "heat_tags_dev",
  hostname: "seu host",
```

<br>

Para iniciar o servidor Phoenix é necessário usar.

  #### `mix deps.get` - Para instalar as dependências
  #### `mix ecto.setup` - Para criar e configurar o banco de dados
  #### `mix php.server` Inicia o servidor na porta definida, padrão = 4000

  <br>

endpoints: 

- Endereço padrão - Atualmente não possui nenhuma rota definida
```
http://localhost:4000
```

- Endereço que contém os emails enviados 
```
http://localhost:4000/dev/sent_emails
```

<br>

Para inserir uma mensagem na API - POST

- Endereço
```
http://localhost:4000/api/message
```

- JSON

```
{
    "message": "Teste de mensagem",
    "username": "Eu",
    "email": "dwwa@gmaddw.com"
}
```


