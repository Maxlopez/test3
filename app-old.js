const http = require('http');

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'application/json'});
    let salida = {
        nombre: 'Max',
        edad: 26,
    };
    res.write(JSON.stringify(salida));
    res.end();
});
server.listen(8080);
console.log('Escuchando puerto 8080');