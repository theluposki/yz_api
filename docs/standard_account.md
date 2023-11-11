[⬅️ return to **documentation**](/docs/index.md)
# Standard account

|
**Dados**
```json
{
  "email": "johndoe@mail.com",
  "senha": "MyPassw0rd#2023"
}
```
---
|
Requisição com **Curl**
```bash
 curl -sS  -X POST \
  -H "Content-Type: application/json" \
  -d '{"email": "johndoe@mail.com", "senha": "MyPassw0rd#2023"}' \
  http://localhost:3327/api/v1/auth | jq .
```

#### Ou
---

|
Requisição com **Axios**
```javascript
const request = async () => {
  const url = 'http://localhost:3327/api/v1/auth';
  const data = {
    email: 'johndoe@mail.com',
    senha: 'MyPassw0rd#2023',
  };

  try {
    const response = await axios.post(url, data, {
      mode: 'no-cors',
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
Resposta
```json
{
  "message":"Autenticado com sucesso!"
}
```