CREATE DATABASE restaurant;
USE restaurant;	

CREATE TABLE usuarios(	
    id_user int NOT NULL AUTO_INCREMENT,
	username varchar(50) NOT NULL,
	password varchar(255) NOT NULL,
	correo varchar(255),
	telefono int,
    created_date DATETIME NOT NULL,
    modified_date DATETIME NOT NULL,

    PRIMARY KEY(id_user)
);

CREATE TABLE comentarios(
	id_comentario int NOT NULL AUTO_INCREMENT,
	id_user int NOT NULL,
	puntuación int NOT NULL,
	comentario varchar(255),
    modified_date DATETIME NOT NULL,
    created_date DATETIME NOT NULL,

	PRIMARY KEY(id_comentario),
	FOREIGN KEY (id_user) REFERENCES usuarios(id_user)
);

CREATE TABLE pedidos_online(
	id_pedido int NOT NULL AUTO_INCREMENT,
	plato varchar(200) NOT NULL,
	distrito enum(“todos los distritos donde tenga cobertura el restaurante”) NOT NULL,
	dirección varchar(255) NOT NULL,
	id_user int NOT NULL,
	PRIMARY KEY(id_pedido)
	FOREIGN KEY (id_user) REFERENCES usuarios(id_user)
);



--pruebas--
INSERT INTO usuarios(id_user, username, password, correo, telefono, created_date, modified_date) 
VALUES (1,'JUAN', MD5('12345'), NULL, NULL, NOW(), NOW());
INSERT INTO usuarios(id_user, username, password, correo, telefono, created_date, modified_date) 
VALUES (2,'JOSE', MD5('54321'), NULL, NULL, NOW(), NOW());

INSERT INTO comentarios(id_comentario, id_user, puntuación, comentario, modified_date, created_date)
VALUES (1,1,5,"muy buen restaurante", NOW(), NOW());
INSERT INTO comentarios(id_comentario, id_user, puntuación, comentario, modified_date, created_date)
VALUES (2,2,3,"a nada :|", NOW(), NOW());
