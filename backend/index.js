const mysql = require('mysql');
const express = require('express');


var app = express();

app.use(express.json());
var cors = require('cors');

app.use(cors());



//comprobacion
app.post('/login', function(req, res){
  // Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'cliente',
    password: '123456789',
    database: 'restaurant'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // Step 2: Mandar el query
  var myQuery = " SELECT id_user, username " +
                " FROM usuarios " +
                " WHERE username = ? " +
                " AND password = MD5(?) ";
  
  var myValues = [ req.body.username, req.body.password ];
  
  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results[0]);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});


//registro de nuevos usuarios
app.post('/register', function(req, res){
  // Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'cliente',
    password: '123456789',
    database: 'restaurant'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // Step 2: Mandar el query
  var myQuery = " INSERT INTO usuarios (username, password, correo, telefono, modified_date, created_date) " +
                " VALUES (?, MD5(?), ?, ?, NOW(), NOW()) ";
  
  var myValues = [req.body.username, req.body.password, req.body.correo, req.body.telefono ];
  
  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});


//REGISTRO DE RECLAMOS 
app.post('/reclamos', function(req, res){
   // Step 0: Definir la conexion a la BD
    var connection = mysql.createConnection({
    host: 'localhost',
    user: 'cliente',
    password: '123456789',
    database: 'restaurant'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // Step 2: Mandar el query
  var myQuery = " INSERT INTO reclamos (nombre, apellido_p, apellido_m, direccion, tipo_documento, documento, telefono, email, edad, reclamo, modified_date, created_date) " +
                " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW()) ";
  var myValues = [req.body.nombre, req.body.apellido_p, req.body.apellido_m, req.body.direccion, req.body.tipo_documento, req.body.documento, req.body.telefono, req.body.email, req.body.edad, req.body.reclamo];
  
  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});


//Update Datos del Usuario
app.put('/usuario/:id_user', function(req, res){
//Step 0: Definir la conexion a la BD
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'cliente',
  password: '123456789',
  database: 'restaurant'
});

// Step 1: Establecer la conexion
connection.connect();
// Step 2: Mandar el query
  var myQuery = " UPDATE usuarios SET modified_date = NOW() ";
  var myValues = [ ];
  
  if (req.body.username){
    myQuery += " , username = ? ";
    myValues.push(req.body.username);
  }

  if (req.body.password){
    myQuery += " , password = MD5(?) ";
    myValues.push(req.body.password);
  }

  if (req.body.correo){
    myQuery += " , correo = ? ";
    myValues.push(req.body.correo);
  }

  if (req.body.phone){
    myQuery += " , telefono = ? ";
    myValues.push(req.body.phone);
  }

  myQuery += " WHERE id_user = ? "
  myValues.push(req.params.id_user);

  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});


// Mostrar Comentarios del Usuario:
app.get('/comentarios', function(req, res){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'cliente',
        password: '123456789',
        database: 'restaurant'
    });

    connection.connect();

    var myQuery = " SELECT id_comentario, id_user, puntuacion, comentario, modified_date, created_date FROM comentarios WHERE 1 = 1 ";
    var myValues = [];

    connection.query(myQuery, myValues, function(error, results, fields){
        // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
        if (error) throw error;
        
        // Step 3: Procesar el resultado de la BD
        res.send(results);
    
        // Step 4: Cerrar la conexion
        connection.end();
      });
    });


//Update Comentario cuando esta logeado
app.put('/comentarios/:id_comentario', function(req, res){
  //Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'cliente',
    password: '123456789',
    database: 'restaurant'
  });
  
  // Step 1: Establecer la conexion
  connection.connect();
 // Step 2: Mandar el query
  var myQuery = " UPDATE comentarios SET modified_date = NOW() ";
  var myValues = [ req.body.id_comentario, req.body.id_user];
  
  if (req.body.comentario){
    myQuery += " , comentario = ? ";
    myValues.push(req.body.comentario);
  }


  myQuery += " WHERE id_comentario = ? "
  myValues.push(req.params.id_comentario);

  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});


//Tabla de Pedidos
app.post('/pedido_online', function(req, res){
  // Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'cliente',
    password: '123456789',
    database: 'restaurant'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // Step 2: Mandar el query
  var myQuery = " INSERT INTO usuarios (username, password, correo, telefono, modified_date, created_date) " +
                " VALUES (?, MD5(?), ?, ?, NOW(), NOW()) ";
  
  var myValues = [ req.body.username, req.body.password, req.body.correo, req.body.telefono ];
  
  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});


//DELETE comentarios
app.delete('/deleteComentarios', function(req,res){
  // Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'cliente',
    password: '123456789',
    database: 'restaurant'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // Step 2: Mandar el query
  var myQuery = "DELETE FROM comentarios "+
                " WHERE id_comentario = ? AND id_user = ?";
        
  
  var myValues = [ req.body.id_comentario, req.body.id_user];
  
  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });

})


//Registro de nueva reserva
app.post('/reserva', function(req, res){
  // Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
     host: 'localhost',
     user: 'cliente',
     password: '123456789',
     database: 'restaurant'
 });

 // Step 1: Establecer la conexion
 connection.connect();

 // ;Step 2: Mandar el query
 var myQuery =   " INSERT INTO reservaciones (nombre, " +
                 " n_personas, tipo_mesa, hora_reservacion, fecha, correo," +
                 " telefono, created_date, modified_date ) " +
                 " VALUES (?,?,?,?,?,?,?, NOW(), NOW()); ";

 var myValues = [req.body.nombre, req.body.n_personas, req.body.tipo_mesa, req.body.hora_reservacion, req.body.fecha, req.body.correo, req.body.telefono];

 connection.query(myQuery, myValues, function(error, results, fields){
     // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
     if (error) throw error;
     
     // Step 3: Procesar el resultado de la BD
     res.send(results);

     // Step 4: Cerrar la conexion
     connection.end();
 });
});


//DELETE reserva
app.delete('/reserva/:id_user', function(req,res){
  // Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'cliente',
    password: '123456789',
    database: 'restaurant'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // Step 2: Mandar el query
  var myQuery = "DELETE FROM reservaciones "+
                " WHERE id_reservacion = ? AND id_user = ?";
        
  var myValues = [req.body.id_reservacion, req.body.id_user];
  
  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });

})


//DELETE reserva
app.get('/zonas_reparto', function(req,res){
  // Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'cliente',
    password: '123456789',
    database: 'restaurant'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // Step 2: Mandar el query
  var myQuery = " SELECT id_zona, distrito, disponibilidad FROM zonas_reparto; "; 
        
    
  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });

})


// Mostrar todos los platos de la carta con sus precios 
app.get('/menu', function(req, res){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'cliente',
        password: '123456789',
        database: 'restaurant'
    });

    connection.connect();

    var myQuery = " SELECT plato_id, name_plato, tipo_plato, price, created_date, modified_date FROM menu WHERE 1 = 1 ";
    var myValues = [];

    connection.query(myQuery, myValues, function(error, results, fields){
        // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
        if (error) throw error;
        
        // Step 3: Procesar el resultado de la BD
        res.send(results);
    
        // Step 4: Cerrar la conexion
        connection.end();
      });
    });


// Actualizar datos de los platos 
app.put('/menu/:plato_id', function(req, res){
        // Step 0: Definir la conexion a la BD
        var connection = mysql.createConnection({
          host: 'localhost',
          user: 'cliente',
          password: '123456789',
          database: 'restaurant'
        });
      
        // Step 1: Establecer la conexion
        connection.connect();
      
        // Step 2: Mandar el query
        var myQuery = " UPDATE menu SET modified_date = NOW() ";
        var myValues = [ ];
        
        if (req.body.name_plato){
          myQuery += " , name_plato = ? ";
          myValues.push(req.body.name_plato);
        }
      
        if (req.body.tipo_plato){
          myQuery += " , tipo_plato = ? ";
          myValues.push(req.body.tipo_plato);
        }
      
        if (req.body.price){
          myQuery += " , price = ? ";
          myValues.push(req.body.price);
        }
      
      
        myQuery += " WHERE plato_id = ? "
        myValues.push(req.params.plato_id);
      
        connection.query(myQuery, myValues, function(error, results, fields){
          // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
          if (error) throw error;
          
          // Step 3: Procesar el resultado de la BD
          res.send(results);
      
          // Step 4: Cerrar la conexion
          connection.end();
        });
      });





app.listen(3000, function(){
    console.log("server 3000 abierto")
})


