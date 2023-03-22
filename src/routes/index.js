import { Router } from 'express'

import { actualizarSuscriptoresGet, actualizarSuscriptoresPost, crearSuscriptores, eliminarSuscriptores, listarSuscriptores, renderIndex } from '../controllers/suscripcionControlllers.js'
const router = Router()

//-----------GET-----------------

// rutas relaccionadas con la aplicacion

router.get('/', renderIndex);
router.get("/actualizar/:id", actualizarSuscriptoresGet);
router.get('/administracion', listarSuscriptores);
router.get('/eliminar/:id', eliminarSuscriptores)

//-----------POST----------------------
router.post('/crud/crear', crearSuscriptores)
router.post("/actualizar/:id", actualizarSuscriptoresPost)

export default router