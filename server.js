// Se carga el módulo de HTTP
var http = require("http");

// Creación del servidor HTTP, y se define la escucha
// de peticiones en el puerto 8081
http.createServer(function(request, response) {
//funciones callback
    // Se define la cabecera HTTP, con el estado HTTP (OK: 200) y el tipo de contenido
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Se responde, en el cuerpo de la respuesta con el mensaje "Hello World"
    response.end('Hola Mundo!\n');
}).listen(8081);

// Se escribe la URL para el acceso al servidor
console.log('Servidor en la url http://127.0.0.1:8081/');