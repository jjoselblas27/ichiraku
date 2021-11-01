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

CREATE TABLE menu{
	id_menu int not null auto_increment;
	plato varchar(50) not null;
	price float not null;
	created_date datetime;
	modified_date datetime;
	Primary kEY (id_menu);
};

CREATE TABLE reservaciones (
	id_reservacion int NOT NULL AUTO_INCREMENT,
	id_user int NOT NULL,
	nombre varchar(50) NOT NULL,
	n_personas int NOT NULL,
	tipo_mesa ENUM(‘Ventana - Piso1’,’Ventana - Piso2’,’Dentro - Piso1’,’Dentro - Piso2’) NOT NULL,
	hora_reservacion datetime NOT NULL,
	correo varchar(50),
	telefono varchar(15),
	fecha datetime,
	created_date datetime,
	modified_date datetime,
	PRIMARY KEY (id_reservacion)
	FOREIGN KEY (id_user) REFERENCES usuarios(id_user)
);

CREATE TABLE pedidos_online(
	id_pedido int NOT NULL AUTO_INCREMENT,
	plato varchar(200) NOT NULL,
	distrito enum('Callao', 'Comas', 'Carabayllo', 'San martin de Porres', 'Los Olivos') NOT NULL,
	dirección varchar(255) NOT NULL,
	id_user int NOT NULL,
	PRIMARY KEY(id_pedido)
	FOREIGN KEY (id_user) REFERENCES usuarios(id_user)
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

CREATE TABLE zonas_reparto(
	id_zona int NOT NULL,
	distrito varchar(255),
	disponibilidad bool
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

INSERT INTO menu(id_menu, plato, price, created_date, modified_date)
VALUES(1, "Ramen", 20.00, NOW(), NOW());
INSERT INTO menu(id_menu, plato, price, created_date, modified_date)
VALUES(2, "Yakitori", 40.00, NOW(), NOW());
