import {connect} from "mongoose";
//Para cargar leer las variables de entorno .env
import {config} from 'dotenv';
config();




(async()=> {
 
    
    try{
        const db = await connect(process.env.MONGO_URI || "mongodb://localhost/test");
        console.log('DB connect',db.connection.name)
    }catch(e){
        console.log(e);
    }
   
})()

