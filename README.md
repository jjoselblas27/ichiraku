# PROPUESTA DE PROYECTO

<a href="https://wikimedia.org/">
  <img
    alt="UTEC"
    height="800"
    width="820"
    src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Utec-logo.jpg" />
</a>


<pre>						<b>ciencia de la computacion
	 				    Desarrollo basado en plataformas</b>
</pre>

**Integrantes:**

Nombre | Usuario github | Correo utec
------------ | ------------- | ------------- 
Alessandro Huayta | [alessandrohuaytac](https://github.com/alessandrohuaytac) | alessandro.huayta@utec.edu.pe
Juan Leandro(RP) | [jjoselblas27](https://github.com/jjoselblas27) | juan.leandro@utec.edu.pe
Sebastian Rejas | [SebastianRejas19](https://github.com/SebastianRejas19) | sebastian.rejas@utec.edu.pe
Anthony Roca | [Tony1411](https://github.com/Tony1411) | anthony.roca@utec.edu.pe

RP: representante del grupo

## Resumen del proyecto
**Tematica del restaurante :** *comida japonesa*

**Nombre del restaurante :** *Ichiraku*

*La aplicación web se centrará en la presentación del restaurante al público. Por lo tanto este contará con los horarios de atención, dirección del local y el menú de comidas ofrecidas. Además el usuario podrá loguearse, pudiendo reservar mesas y hacer pedidos online.*

*La aplicación móvil se centra en la atención al cliente. Cuando se encuentre en el local físico podrá pedir su comida sin necesidad de esperar a un mesero que lo atienda. Dados los tiempos de pandemia se habilitaron los pedidos online, en los cuales el usuario podrá pedir su comida y nosotros nos encargaremos de llevarlo a su hogar. Además el usuario podrá hacer reservaciones de mesas.*

## Motivación ¿Por qué nuestra idea es interesante?
*¿Cuántas veces nos hemos cansado de esperar al mesero(a) para que nos de la carta y poder ordenar nuestro pedido?, han sido largos minutos que hasta nos hemos cansado de esperar hasta el punto de desmotivarse e irnos con un sabor amargo en la boca, producto de ese problema surgió la idea de crear una aplicación web / móvil para que puedan dar un giro a esta situación que beneficiaría no solo a  los usuarios si no a la misma empresa con lo siguiente:*
- Es una idea innovadora para el restaurante
- Captaría la atención de los clientes
- Agiliza el servicio al cliente brindándole un medio más efectivo
- Reduce el tiempo de espera en la atención al cliente
- Aumenta la productividad de la empresa
- Genera mayor control de los servicios del restaurante
- Fortalece la relación empresa-cliente
- Reforzaría la imagen del restaurante

*Sabiendo que actualmente estamos en época de pandemia y la capacidad máxima de aforo es 50% esta idea puede ser de gran ayuda para no exponerse demasiado al virus debido a que contará con opciones de delivery para evitar ir al restaurante si no lo deseas o una carta virtual que facilitará al cliente la decisión de entrar al restaurante para disfrutar el servicio, el producto y la ambientación.*

## Finalidad de la Aplicación Web para el proyecto
*En la página web se va a crear todo tipo de publicidad, se podrá ver el horario de atención, hacer reservaciones, ver el menú y hacer pedidos online en la que podrás loguearte y poner tus datos necesarios para realizar el delivery, de modo que en un siguiente pedido el proceso sea más automático.*


## Finalidad de la Aplicación Mobile para el proyecto
*En la aplicación móvil se podrá hacer reservaciones como también pedir la carta y realizar el pedido. Esta generará comandas que llegarán directamente a la cocina. Con respecto al delivery, la app tendrá una opción en donde se pueda ordenar y consultar los precios de los platos.*

# Tema del proyecto

`Restaurante de comida japonesa`

## Motivación

Ante la situacion de pandemia y posterior medidas de prevencion, nues


## Funcionalidades

| Angular Route | Backend URLs | Funcionalidad |
| --- | --- | --- |
| `/` | `GET / comentarios` | mostrar la vista principal junto con comentarios de los usuarios |  
| `/login` | `POST /login` | Realizar login | 
| `/register` | `POST /register` | Crear un nuevo usuario | 
| `/home/compra` | `GET / menu ` | mostrara el menu | 
| `/comentarios_new` | ` POST / Comentarios_new` | agregar un nuevo comentario |
| `/menu/carta` | `GET / menu` |mostrar los platos que se ofrece | 
| `/home/zonas_reparto` | `GET / zonas_reparto` | se muestra las zonas de reparto | 
| `/home/reservaciones` | `POST / reservaciones_new` | agregar una nueva reservación |  
| `/home/reclamaciones` | `POST /reclamos` | muestra al usuario un formulario para mandar su reclamo |

## Instalación

### Base de datos

1. Abrir MySQL
2. Ejecutar el script de inicialización de la DB:

`source base_datos.sql`

3. Necesita tener el siguiente usuario:

- Usuario: `cliente`
- Clave: `123456789`

### Backend

1. Instalar dependencias

`npm install`

2. Iniciar el proyecto

`node index.js`

### Frontend

1. Instalar dependencias

`npm install`

2. Iniciar el proyecto

`ng serve --open`
