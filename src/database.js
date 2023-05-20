import mongoose from 'mongoose'

export async function connect(){
    
    try {
        //mongoose 7 se actualiza y se inserta esta linea
        mongoose.set('strictQuery', false);
        await mongoose.connect("mongodb://127.0.0.1/Prodcut-App",{
            useNewUrlParser: true,
            //useUnifiedTopology:true
        });
        console.log("database connected")
        
    } catch (error) {
        console.log("ocurrio error en la conexion DB"+error)
    }   


}