PRAGMA foreign_keys = ON;
PRAGMA encoding = "UTF-8";

-- Tabela de usuários
CREATE TABLE users (ção
    codigo TEXT PRIMARY KEY,
    nome TEXT NOT NULL
    imagem TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    codigo_autorizacao TEXT NOT NULL,
    created_at INTEGER DEFAULT (strftime('%s', 'now')),
    update_at INTEGER DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY(codigo_autorizacao) REFERENCES aigo)
);

-- Tabela de autorizações
CREATE TABLE autorizacoes (
    codigo TEXT PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    created_at INTEGER DEFAULT (strftime('%s', 'now')),
    update_at INTEGER DEFAULT (strftime('%s', 'now'))
);

-- Tabela de produtos
CREATE TABLE produtos (
    codigo TEXT PRIMARY KEY,
    nome TEXT UNIQUE NOT NULL,
    descricao TEXT NOT NULL,
    imagem TEXT NOT NULL,
    peso_unitario TEXT NOT NULL,
    codigo_unidade_de_medida TEXT NOT NULL,
    codigo_categoria TEXT NOT NULL,
    codigo_subcategoria TEXT NOT NULL,
    codigo_marca TEXT NOT NULL,
    codigo_fornecedor TEXT NOT NULL,
    observacao TEXT,
    who_made_the_change TEXT NOT NULL,
    created_at INTEGER DEFAULT (strftime('%s', 'now')),
    update_at INTEGER DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY(who_made_the_change) REFERENCES users(codigo)
);

-- Tabela de unidades de medida
CREATE TABLE unidade_de_medidas (
    codigo TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    who_made_the_change TEXT NOT NULL,
    created_at INTEGER DEFAULT (strftime('%s', 'now')),
    update_at INTEGER DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY(who_made_the_change) REFERENCES users(codigo)
);

-- Tabela de categorias
CREATE TABLE categorias (
    codigo TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    who_made_the_change TEXT NOT NULL,
    created_at INTEGER DEFAULT (strftime('%s', 'now')),
    update_at INTEGER DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY(who_made_the_change) REFERENCES users(codigo)
);

-- Tabela de subcategorias
CREATE TABLE subcategorias (
    codigo TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    who_made_the_change TEXT NOT NULL,
    created_at INTEGER DEFAULT (strftime('%s', 'now')),
    update_at INTEGER DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY(who_made_the_change) REFERENCES users(codigo)
);

-- Tabela de marcas
CREATE TABLE marcas (
    codigo TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    who_made_the_change TEXT NOT NULL,
    created_at INTEGER DEFAULT (strftime('%s', 'now')),
    update_at INTEGER DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY(who_made_the_change) REFERENCES users(codigo)
);

-- Tabela de estoque
CREATE TABLE estoque (
    codigo TEXT PRIMARY KEY,
    codigo_produto TEXT NOT NULL,
    preco_de_custo REAL NOT NULL,
    preco_de_venda REAL NOT NULL,
    data_fabricacao INTEGER NOT NULL,
    data_vencimento INTEGER NOT NULL,
    who_made_the_change TEXT NOT NULL,
    created_at INTEGER DEFAULT (strftime('%s', 'now')),
    update_at INTEGER DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY(who_made_the_change) REFERENCES users(codigo),
    FOREIGN KEY(codigo_produto) REFERENCES produtos(codigo)
);

-- Tabela de fornecedores
CREATE TABLE fornecedores (
    codigo TEXT PRIMARY KEY,
    nome_fantasia TEXT NOT NULL,
    razao_social TEXT NOT NULL,
    CNPJ_or_CPF TEXT NOT NULL,
    ramo_atuacao TEXT NOT NULL,
    codigo_contato TEXT NOT NULL,
    codigo_endereco TEXT NOT NULL,
    dados_bancarios TEXT NOT NULL,
    who_made_the_change TEXT NOT NULL,
    created_at INTEGER DEFAULT (strftime('%s', 'now')),
    update_at INTEGER DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY(who_made_the_change) REFERENCES users(codigo),
    FOREIGN KEY(codigo_contato) REFERENCES contatos(codigo),
    FOREIGN KEY(codigo_endereco) REFERENCES enderecos(codigo),
    FOREIGN KEY(dados_bancarios) REFERENCES dados_bancarios(codigo)
);

-- Tabela de contatos
CREATE TABLE contatos (
    codigo TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    telefone TEXT,
    celular TEXT NOT NULL,
    who_made_the_change TEXT NOT NULL,
    created_at INTEGER DEFAULT (strftime('%s', 'now')),
    update_at INTEGER DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY(who_made_the_change) REFERENCES users(codigo)
);

-- Tabela de endereços
CREATE TABLE enderecos (
    codigo TEXT PRIMARY KEY,
    cep TEXT NOT NULL,
    logadouro TEXT NOT NULL,
    complemento TEXT NOT NULL,
    cidade TEXT NOT NULL,
    estado TEXT NOT NULL,
    pais TEXT DEFAULT 'Brasil',
    localizacao TEXT,
    who_made_the_change TEXT NOT NULL,
    created_at INTEGER DEFAULT (strftime('%s', 'now')),
    update_at INTEGER DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY(who_made_the_change) REFERENCES users(codigo)
);

-- Tabela de dados bancários
CREATE TABLE dados_bancarios (
    codigo TEXT PRIMARY KEY,
    agencia TEXT NOT NULL,
    conta TEXT NOT NULL,
    beneficiario TEXT NOT NULL,
    PIX TEXT NOT NULL,
    who_made_the_change TEXT NOT NULL,
    created_at INTEGER DEFAULT (strftime('%s', 'now')),
    update_at INTEGER DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY(who_made_the_change) REFERENCES users(codigo)
);
