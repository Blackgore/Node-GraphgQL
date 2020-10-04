import mongoose from "mongoose";

export async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/mongodbgraphql',{
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
        console.log('>>> DB is connect');
    }catch(e){
        console.log("error en la conexion a la base de datos");
        console.log(e);
    }
}

