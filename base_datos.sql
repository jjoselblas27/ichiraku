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

CREATE TABLE menu(
	plato_id int NOT NULL auto_increment,
	name_plato varchar(50) NOT null,
	tipo_plato varchar(50) NOT null,
	price float NOT null,
	created_date datetime,
	modified_date datetime,
	PRIMARY kEY (menu_id)
);

CREATE TABLE reservaciones (
	id_reservacion int NOT NULL AUTO_INCREMENT,
	id_user int NOT NULL,
	nombre varchar(50) NOT NULL,
	n_personas int NOT NULL,
	tipo_mesa ENUM('Ventana - Piso1','Ventana - Piso2','Dentro - Piso1','Dentro - Piso2') NOT NULL,
	hora_reservacion datetime NOT NULL,
	fecha datetime,	
	correo varchar(255),
	telefono int,
	created_date datetime,
	modified_date datetime,
	PRIMARY KEY (id_reservacion),
	FOREIGN KEY (id_user) REFERENCES usuarios(id_user)
);

CREATE TABLE pedidos_online(
	id_pedido int NOT NULL AUTO_INCREMENT,
	plato varchar(200) NOT NULL,
	distrito enum('Callao', 'Comas', 'Carabayllo', 'San martin de Porres', 'Los Olivos') NOT NULL,
	dirección varchar(255) NOT NULL,
	id_user int NOT NULL,
	PRIMARY KEY(id_pedido),
	FOREIGN KEY (id_user) REFERENCES usuarios(id_user)
);

CREATE TABLE comentarios(
	id_comentario int NOT NULL AUTO_INCREMENT,
	id_user int NOT NULL,
	puntuación int NOT NULL,
	comentario varchar(5000),
    modified_date DATETIME NOT NULL,
    created_date DATETIME NOT NULL,
	PRIMARY KEY(id_comentario),
	FOREIGN KEY (id_user) REFERENCES usuarios(id_user)
);

CREATE TABLE zonas_reparto(
	id_zona int NOT NULL AUTO_INCREMENT,
	distrito varchar(255) NOT NULL,
	disponibilidad ENUM('Si','No') NOT NULL,
	modified_date DATETIME,
	created_date DATETIME,
	PRIMARY KEY(id_zona)
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

INSERT INTO menu(plato_id, name_plato, tipo_plato, price, created_date, modified_date)
VALUES(1, "Ramen", "Sopa", 20.00, NOW(), NOW());
INSERT INTO menu(plato_id, name_plato, tipo_plato, price, created_date, modified_date)
VALUES(2, "Yakitori","brocheta", 40.00, NOW(), NOW());

INSERT INTO zonas_reparto(distrito, disponibilidad)
VALUES ('Callao','Si',NOW(),NOW());
INSERT INTO zonas_reparto(distrito, disponibilidad)
VALUES ('Comas','Si',NOW(),NOW());
INSERT INTO zonas_reparto(distrito, disponibilidad)
VALUES ('Carabayllo','Si',NOW(),NOW());
INSERT INTO zonas_reparto(distrito, disponibilidad)
VALUES ('San Martin de Porres','Si',NOW(),NOW());
INSERT INTO zonas_reparto(distrito, disponibilidad)
VALUES ('Los Olivos','No',NOW(),NOW());
