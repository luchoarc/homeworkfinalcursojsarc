const express = require('express');
const path = __dirname;
const host = "localhost";

const app = express();
const router = express.Router();
app.set('port', process.env.PORT || 9299);
router.use(function (req,res,next) {
    next();
});
router.get('/inicio', function(req, res){
	res.sendFile(path + '/index.html');
 }
);

//Todos los recursos que utilice la pagina html, como imagenes, estilos js, van a quedar almacenadas y disponibles en esa carpeta
app.use(express.static(__dirname + '/resources'));
app.use(express.static(__dirname + '/pages'));
//Dirige directo al mapa
app.use('/', router);

app.use( (req,res,next)=>{
    res.end("<h1> 404 Not Found Lucho </h1>");
});

app.listen(app.get('port'), function(){
	console.log( `Listening at http://${host}:${app.get('port')}`);
});

/* Para levantar el servidor se ejecuta en consola

node .\server2.js

*/
/* Para instalar paquetes de node.js se ejecuta en consola

npm install express

*/


//Tarea: desplegar todos los ejericios realizados anteriormente en servidores node js