const user = {
  id: "70f85db8-4a63-41c1-bf14-7bf649cc536a", // PK
  nome: "", // Obrigatorio
  imagem: "", // Obrigatorio vai guardar uma imagem em base64
  email: "", // Obrigatorio Unico
  senha: "", // Obrigatorio
  data_nascimento: 1698617510773, //Obrigatorio tem que ser menor que 130 anos e maior que 17 anos
  autorizacao: [], // JSON por padrão "['basico']"
  created_at: 1698617510773,
  update_at: 1698617510773,
}

const autorizacoes = {
  codigo: "", // PK
  name: "", // Obrigatorio Unico
  created_at: 1698617510773, // Timestamp default now
  update_at: 1698617510773, // Timestamp default now
}

const produto = {
  codigo: "f78912bf-87d7-44ce-b519-4dd9ed5e1c59", // PK
  nome: "", // Obrigatorio Unico
  descricao: "", // Obrigatorio
  imagem: "", // Obrigatorio vai guardar uma imagem em base64
  peso_unitario: "", // Obrigatorio
  codigo_unidade_de_medida: "e1ff4b22-ccdf-48a2-8d38-238618d3d85d", // Obrigatorio
  codigo_categoria: "0654b2fc-6476-481c-b9e0-5126455fec75", // Obrigatorio
  codigo_subcategoria: "3bfd346b-c3ef-41f0-bd1d-4a2e79e0b01b", // Obrigatorio
  codigo_marca: "d71ca211-094a-46bc-81e5-e8eaa9e48f7a", // Obrigatorio
  codigo_fornecedor: "60404117-7e15-43b2-9c47-2d09d8c0a848", // Obrigatorio
  observacao: "", // Opcional
  who_inserted_or_modified: "d783860c-0207-485e-a065-e4c304d8a83d", // Obrigatorio
  created_at: 1698617510773, // Timestamp default now
  update_at: 1698617510773, // Timestamp default now
}

const unidade_de_medidas = {
  codigo: "e1ff4b22-ccdf-48a2-8d38-238618d3d85d", // PK
  nome: "", // Obrigatorio
  who_inserted_or_modified: "d783860c-0207-485e-a065-e4c304d8a83d", // Obrigatorio
  created_at: 1698617510773, // Timestamp default now
  update_at: 1698617510773, // Timestamp default now
}

const categorias = {
  codigo: "0654b2fc-6476-481c-b9e0-5126455fec75", // PK
  nome: "", // Obrigatorio
  who_inserted_or_modified: "d783860c-0207-485e-a065-e4c304d8a83d", // Obrigatorio
  created_at: 1698617510773, // Timestamp default now
  update_at: 1698617510773, // Timestamp default now
}

const subcategorias = {
  codigo: "3bfd346b-c3ef-41f0-bd1d-4a2e79e0b01b",  // PK
  nome: "", // Obrigatorio
  who_inserted_or_modified: "d783860c-0207-485e-a065-e4c304d8a83d", // Obrigatorio
  created_at: 1698617510773, // Timestamp default now
  update_at: 1698617510773, // Timestamp default now
}

const marca = {
  codigo: "d71ca211-094a-46bc-81e5-e8eaa9e48f7a", // PK
  nome: "", // Obrigatorio
  who_inserted_or_modified: "d783860c-0207-485e-a065-e4c304d8a83d", // Obrigatorio
  created_at: 1698617510773, // Timestamp default now
  update_at: 1698617510773, // Timestamp default now
}

const estoque = {
  codigo: "d542dc65-bfea-4bf5-9637-b188807924d5", // PK
  codigo_produto: "f78912bf-87d7-44ce-b519-4dd9ed5e1c59", // Obrigatorio
  preco_de_custo: 4.29, // Obrigatorio
  preco_de_venda: 5.15, // Obrigatorio
  data_fabricacao: 1698617510773, // Obrigatorio
  data_vencimento: 1698617510773, // Obrigatorio
  who_inserted_or_modified: "d783860c-0207-485e-a065-e4c304d8a83d", // Obrigatorio
  created_at: 1698617510773, // Timestamp default now
  update_at: 1698617510773, // Timestamp default now
}

const fornecedores = {
  codigo: "12bff863-f4ea-4272-afb9-519e4fa3b20a", // PK
  nome_fantasia: "", // Obrigatorio
  razao_social: "", // Obrigatorio
  CNPJ_or_CPF: "", // Obrigatorio
  ramo_atuacao: "", // Obrigatorio
  codigo_contato: "17ade906-987f-4804-9fdb-1dc4d311e13d", // Obrigatorio
  codigo_endereco: "83f534e3-70b5-4894-a164-fd7a57e344bd", // Obrigatorio
  dados_bancarios: "589b8556-66df-4d3e-90ef-5f98fc6d4e3d", // Obrigatorio
  who_inserted_or_modified: "d783860c-0207-485e-a065-e4c304d8a83d", // Obrigatorio
  created_at: 1698617510773, // Timestamp default now
  update_at: 1698617510773, // Timestamp default now
}

const contatos = {
  codigo: "17ade906-987f-4804-9fdb-1dc4d311e13d", // PK
  nome: "", // Obrigatorio
  telefone: "", // Opcional
  celular: "", // Obrigatorio
  who_inserted_or_modified: "d783860c-0207-485e-a065-e4c304d8a83d", // Obrigatorio
  created_at: 1698617510773, // Timestamp default now
  update_at: 1698617510773, // Timestamp default now
};

const enderecos = {
    codigo: "83f534e3-70b5-4894-a164-fd7a57e344bd", // PK
    cep: "", // Obrigatorio
    logadouro: "", // Obrigatorio
    complemento: "", // Obrigatorio
    cidade: "", // Obrigatorio
    estado: "", // Obrigatorio
    pais: "", // Opcional por padrão "Brasil"
    localizacao: { 
      long: -22.557233447897996, 
      lat: -47.26100034110007
    }, // Opcional
    who_inserted_or_modified: "d783860c-0207-485e-a065-e4c304d8a83d", // Obrigatorio
    created_at: 1698617510773, // Timestamp default now
    update_at: 1698617510773, // Timestamp default now
}
  
const dados_bancarios = {
    codigo: "589b8556-66df-4d3e-90ef-5f98fc6d4e3d", // PK
    agencia: "", // Obrigatorio
    conta: "", // Obrigatorio
    beneficiario: "", // Obrigatorio
    PIX: "", // Obrigatorio
    who_inserted_or_modified: "d783860c-0207-485e-a065-e4c304d8a83d", // Obrigatorio
    created_at: 1698617510773, // Timestamp default now
    update_at: 1698617510773, // Timestamp default now
}