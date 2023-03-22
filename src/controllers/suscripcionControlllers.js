import suscriptor from '../models/suscriptor.js'

export const renderIndex = (req, res) => res.render('index', { title: 'Wee Logistic' });

export const actualizarSuscriptoresPost = async (req, res) => {

    try {
        const {id}= req.params //id que se va actualizar
       await suscriptor.findByIdAndUpdate(id, req.body)

        res.redirect("/administracion")
    } catch (error) {
        console.log(error)
    }


}

export const actualizarSuscriptoresGet = async(req, res) => {

    try {
        const suscriptorActualizado = await suscriptor.findById(req.params.id).lean()//lean vuelve un obj de js
    res.render('actualizar', {suscriptorActualizado});

    } catch (error) {
        console.log(error.message)
    }
    

}

export const listarSuscriptores = async (req, res) => {

    const suscriptorListado = await suscriptor.find().lean()//devuelve una lista de objetos tipica  con lean

    res.render('administracion', { suscriptorListado: suscriptorListado });

};


export const eliminarSuscriptores = async(req,res)=>{
    const { id } = req.params;

    await suscriptor.findByIdAndDelete(id)

    res.redirect("/administracion")
};


export const crearSuscriptores = async (req, res) => {

    try {
        const suscriptorCreado = suscriptor(req.body);//extrae los inputs del formulario crear.js
        await suscriptorCreado.save();//guarda en la base de datos
        res.redirect("back");
    } catch (error) {
        console.log(error)
    }


};