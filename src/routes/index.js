import { Router } from 'express'
import suscriptor from '../models/suscriptor.js'
const router = Router()

//-----------GET-----------------

// rutas relaccionadas con la aplicacion es decir va estar conectada con el menu 

// cuando se haga la consulta de la pagina principal se muestra lo que esta en la funcion
router.get('/', (req, res) => res.render('index', { title: 'Wee Logistic' }));

router.get('/administracion', async (req, res) => {

    const suscriptorListado = await suscriptor.find().lean()//devuelve una lista de objetos tipica  con lean

    res.render('administracion', { suscriptorListado: suscriptorListado });

});


//-----------POST----------------------
router.post('/crud/crear', async (req, res) => {

    const suscriptorCreado = suscriptor(req.body);//extrae los inputs del formulario crear.js
    await suscriptorCreado.save();//guarda en la base de datos
    res.redirect("back");


})

export default router