[⬅️ return to **documentation**](/docs/indice.md)
# Criação de conta


> Para registra uma conta, basta fazer uma solicitação ``POST`` para a rota. ``/api/v1/users``

|
**Dados**
> Envie um ``JSON`` com os seguintes campos.
```json
{
	"nome": "",
	"imagem": "",
	"email": "",
	"senha": "",
	"data_nascimento": "",
	"autorizacao": [""]
}
```

Exemplo
```js
{
	nome: "user doe", // Nome completo do usuário.
	imagem: "data:image/png;base64, RgAB...", // Imagem em formato base64
	email: "usermail@mail.com", // E-mail
	senha: "MyPassw0rd#2023", // Senha
	data_nascimento: "1977-08-17", // Data de Nascimento
	autorizacao: ["administrator"] // Um Array com as permições "administrator" auto nível
}
```

---
>  você pode fazer o teste pelo terminal usando o ``curl``

|
Requisição com **Curl**
```bash
RESPONSE=$(curl -sS -X POST \
  -H "Content-Type: application/json" \
  --cookie cookies.txt \
  -d '{"nome": "NewUser", "imagem": "imagem", "email": "newuser@mail.com", "senha": "MyPassw0rd#2023", "data_nascimento": "1977-08-17", "autorizacao": ["administrator"]}' \
  http://localhost:3327/api/v1/users)

echo "Resposta:\n"
echo "$RESPONSE" | jq .

```

#### Ou

> na sua aplicação ``frontend`` usando ``Axios``

para instalar o axios no seu frontend.

```bash
npm install axios --save
```

> Crie uma "``função``" ou uma "``classe``". 

---

|
Requisição com  **Axios**
```javascript
const request = async () => {
  const url = 'http://localhost:3327/api/v1/users';
  const data = {
    nome: "NewUser",
    imagem: "imagem",
    email: "newuser@mail.com",
    senha: "MyPassw0rd#2023",
    data_nascimento: "1977-08-17",
    autorizacao: ["administrator"]
  };

  try {
    const response = await axios.post(url, data, {
      mode: 'cors',
      cache: 'no-cache',
      withCredentials: true,
      referrerPolicy: 'origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Resposta:', response.data);
  } catch (error) {
    console.error('Erro:', error.message);
  }
};
```
---

Se o processo transcorrer sem problemas, será obtida uma resposta indicando sucesso.

Resposta 
> status code ``201``

- body
```json
{
  "message":"Registrado com sucesso!"
}
```
___

Caso voçê não estiver autenticado, uma resposta será recebida.

> status code ``401``

- body
```json
{
	"error": "Authentication failed: invalid token"
}
```

Requisição com **Curl** e guardando o cookie para solicitações posteriores.
```bash
# Faz a solicitação de autenticação e extrai o token do cookie usando awk
TOKEN=$(curl -sS -X POST \
  -H "Content-Type: application/json" \
  -i \
  --cookie-jar cookies.txt \
  -d '{"email": "johndoe@mail.com", "senha": "MyPassw0rd#2023"}' \
  http://localhost:3327/api/v1/auth | awk -F' ' '/token=/ {print $2}' | tr -d '\r\n')


# Imprime o token
echo "Token: $TOKEN"
```

---

Caso as propriedades que são obrigarias estiverem ausente, uma resposta será recebida.

> status code ``400``

- body
```json
{
	"error": "nome is mandatory."
}
```

---

Caso o usuário ja for cadastrado, uma resposta será recebida.

> status code ``400``

- body
```json
{
  "error": "User already exists."
}
```
