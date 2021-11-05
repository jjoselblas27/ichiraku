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
	PRIMARY kEY (plato_id)
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
	puntuacion int NOT NULL,
	comentario varchar(5000),
    modified_date DATETIME NOT NULL,
    created_date DATETIME NOT NULL,
	PRIMARY KEY(id_comentario),
	FOREIGN KEY (id_user) REFERENCES usuarios(id_user)
);

CREATE TABLE reclamos(
	id_reclamo int NOT NULL AUTO_INCREMENT,
	nombre varchar(60) NOT NULL,
	apellido_p varchar(50)	NOT NULL,
	apellido_m varchar(50) NOT NULL,
	direccion varchar(150) NOT NULL,
	tipo_documento enum('DNI','CARNET', 'PASAPORTE') NOT NULL,
	documento int NOT NULL,
	telefono int NOT NULL,
	email varchar(255) NOT NULL,
	edad int NOT NULL,
	reclamo varchar(5000) NOT NULL,
	created_date datetime,
	modified_date datetime,
	PRIMARY KEY (id_reclamo)
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

INSERT INTO comentarios(id_comentario, id_user, puntuacion, comentario, modified_date, created_date)
VALUES (1,1,5,"maso el restaurante :V", NOW(), NOW());
INSERT INTO comentarios(id_comentario, id_user, puntuacion, comentario, modified_date, created_date)
VALUES (2,2,3,"a nada :|", NOW(), NOW());

insert into menu values(1, 'California Roll', 'Maki', '25', '2019-09-14', '2020-08-15');
insert into menu values(2, 'Acevichado', 'Maki', '28' , '2020-07-14', '2020-09-15');
insert into menu values(3, 'Causa Roll ', 'Maki', '25', '2020-09-14', '2021-08-15');
insert into menu values(4, 'Lomo Saltado Maki ', 'Maki', '20', '2020-09-14', '2021-08-15');
INSERT INTO menu(plato_id, name_plato, tipo_plato, price, created_date, modified_date)
VALUES(5, "Ramen", "Sopa", 20.00, NOW(), NOW());
INSERT INTO menu(plato_id, name_plato, tipo_plato, price, created_date, modified_date)
VALUES(6, "Yakitori","brocheta", 40.00, NOW(), NOW());

INSERT INTO zonas_reparto(id_zona, distrito, disponibilidad, modified_Date, created_Date)
VALUES (1,'Callao','Si',NOW(),NOW());
INSERT INTO zonas_reparto(id_zona, distrito, disponibilidad, modified_Date, created_Date)
VALUES (2,'Comas','Si',NOW(),NOW());
INSERT INTO zonas_reparto(id_zona, distrito, disponibilidad, modified_Date, created_Date)
VALUES (3, 'Carabayllo','Si',NOW(),NOW());
INSERT INTO zonas_reparto(id_zona, distrito, disponibilidad, modified_Date, created_Date)
VALUES (4, 'San Martin de Porres','Si',NOW(),NOW());
INSERT INTO zonas_reparto(id_zona, distrito, disponibilidad, modified_Date, created_Date)
VALUES (5, 'Los Olivos','No',NOW(),NOW());


INSERT INTO reclamos (id_reclamo, nombre, apellido_p, apellido_m, direccion, tipo_documento, documento, telefono, email, edad, reclamo, modified_date, created_date) 
VALUES (1,'ale','a','b','av.are','DNI', 73011282, 972043522,'alessandro@gmail.com',19,'pesimo restaurante :/',NOW(), NOW());