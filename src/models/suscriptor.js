import { Schema, model } from "mongoose";

const suscriptorSchema = Schema(
    {
        nombre: {
            type: String,
            required: true
          },
        correo: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            validate: {
              validator: function(v) {
                // Validación de correo electrónico utilizando expresiones regulares
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
              },
              message: props => `${props.value} no es un correo electrónico válido!`
            }
          }
          
          
    }, {
      versionKey: false,//quitar el __v:num
    });
  
  export default model("suscriptor", suscriptorSchema);