CREATE TABLE usuarios(	
    id_user int NOT NULL AUTO_INCREMENT,
	username varchar(50) NOT NULL,
	password varchar(255) NOT NULL,
	correo varchar(255) ,
	phone int,
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


--pruebas--
INSERT INTO usuarios(id_user, username, password, correo, phone, created_date, modified_date) 
VALUES (1,'JUAN', MD5('12345'), NULL, NULL, NOW(), NOW());

INSERT INTO comentarios(id_comentario, id_user, puntuación, comentario, modified_date, created_date)
VALUES (1,1,5,"muy buen restaurante", NOW(), NOW());