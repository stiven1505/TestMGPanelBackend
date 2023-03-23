import express from 'express';
import ejs from 'ejs';
import indexRoutes from './routes/index.js';//importamos el archivo que manejara el enrutamiento 
import morgan from 'morgan'; //registra informacion HTTP

const app = express()

//sirve para tener la ruta absoluta sin importar el OS
import { fileURLToPath } from 'url';
import { dirname, join } from 'path'



app.set('views', join(__dirname, 'views')) //Se agrega la direccion donde estan las vistas 
app.set('view engine', 'ejs') //Para comunicarle al servidor que vamos a utilizar el motor de plantilla

//middlewares
app.use(morgan('dev'));//registro que se ve en consola
app.use(express.urlencoded({extended:false}));



app.use(indexRoutes) //utilizar los routers 
//static archivos
app.use(express.static(join(__dirname, "public")));

export default app;
