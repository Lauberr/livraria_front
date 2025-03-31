DROP TABLE IF EXISTS editora_info, editora

-- =============================================================
--                            LIVROS
-- =============================================================

CREATE TABLE livro(
	id_livro SERIAL PRIMARY KEY,
	isbn INT UNIQUE,
	titulo VARCHAR(100) NOT NULL,
	qt_disponivel INT,
	genero VARCHAR(100),
	edicao VARCHAR(100),
	capa BYTEA
);

-- --------------------------AUTORES---------------------------

CREATE TABLE autores(
	id_autor SERIAL PRIMARY KEY,
	nome_autor VARCHAR(100)
);

CREATE TABLE autor_livro(
	id_livro INTEGER REFERENCES livro(id_livro),
	id_autor INTEGER REFERENCES autores(id_autor),
	PRIMARY KEY (id_livro, id_autor)
);
	
-- --------------------------EDITORA---------------------------

CREATE TABLE editora(
	id_editora SERIAL PRIMARY KEY,
	nome_editora VARCHAR(100),
	data_publicacao TIMESTAMP
);

CREATE TABLE editora_livro(
	id_editora INTEGER REFERENCES editora(id_editora),
	id_livro INTEGER REFERENCES livro(id_livro),
	PRIMARY KEY(id_livro, id_editora)
);

-- -------------------------CATEGORIA--------------------------

CREATE TABLE categoria(
	id_cat SERIAL PRIMARY KEY,
	nome_cat VARCHAR(100)
);


CREATE TABLE arvore_categoria(
	id_cat INTEGER REFERENCES categoria(id_cat),
	id_subcat SERIAL,
	PRIMARY KEY(id_cat, id_subcat)
);

CREATE TABLE categoria_livro(
	id_cat INTEGER REFERENCES categoria(id_cat),
	id_livro INTEGER REFERENCES livro(id_livro),
	PRIMARY KEY(id_livro, id_cat)
);



-- =============================================================
--                          LOCATARIO
-- =============================================================


CREATE TABLE locatario (
	id_locatario SERIAL,
	tipo_locatario INT,
	nome_locatario VARCHAR(100) NOT NULL,
	data_nascimento DATE,
	email VARCHAR(255),
	telefone VARCHAR(30),
	PRIMARY KEY(id_locatario)
);

-- ---------------------------TIPOS----------------------------

CREATE TABLE aluno(
	id_tipo INT UNIQUE PRIMARY KEY,
	registro_acad INT
);
	

CREATE TABLE professor(
	id_tipo INT UNIQUE PRIMARY KEY,
	registro_acad INT
);


CREATE TABLE bibliotecario(
	id_tipo INT UNIQUE PRIMARY KEY,
	login 
	senha
);

-- ---------------------------CURSO----------------------------

CREATE TABLE curso(
	id_curso SERIAL PRIMARY KEY,
	nome_curso VARCHAR(50) NOT NULL
);

-- -------------------------EMPRESTIMO-------------------------

CREATE TABLE emprestimo (
	id_locatario INTEGER REFERENCES locatario(id_locatario),
	id_livro INTEGER REFERENCES livro(id_livro),
	data_hora_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	data_devolucao TIMESTAMP,
	PRIMARY KEY (id_locatario, id_livro, data_hora_reserva)
);

-- --------------------------DIVIDAS--------------------------

CREATE TABLE dividas(
	id_divida SERIAL PRIMARY KEY,
	id_livro INTEGER,
	id_locatario INTEGER,
	data_hora_reserva TIMESTAMP,
	valor NUMERIC (15,2) NOT NULL,
	data_hora_divida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	estado INT CHECK (estado IN (0,1)) NOT NULL,
	FOREIGN KEY (id_livro, id_locatario, data_hora_reserva)
	REFERENCES emprestimo(id_livro, id_locatario, data_hora_reserva) ON DELETE CASCADE
);

