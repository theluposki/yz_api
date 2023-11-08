PRAGMA foreign_keys = ON;

PRAGMA encoding = "UTF-8";

CREATE TABLE IF NOT EXISTS
    users (
        id TEXT PRIMARY KEY,
        nome TEXT NOT NULL,
        imagem TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL,
        data_nascimento INTEGER NOT NULL,
        autorizacao TEXT DEFAULT '["basico"]',
        created_at INTEGER DEFAULT (strftime('%s', 'now')),
        update_at INTEGER DEFAULT (strftime('%s', 'now')),
        CHECK (
            data_nascimento < strftime('%s', 'now', '-17 years') * 1000
            AND data_nascimento > strftime('%s', 'now', '-130 years') * 1000
        )
    );