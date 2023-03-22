import {connect} from "mongoose";

(async()=> {

    try{
        const db = await connect("mongodb+srv://stivengar20088:stivengar20088@cluster0.mcr9jzo.mongodb.net/Cluster0?retryWrites=true&w=majority")

        console.log('DB connect',db.connection.name)
    }catch(e){
        console.log(e);
    }
   
})()

