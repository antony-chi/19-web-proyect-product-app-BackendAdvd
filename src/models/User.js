import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        inique: true
    },
    password: {
        type:String,
        require: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//funcion para encriptar la password
userSchema.statics.encriptarPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}
//funcion para desencriptar
userSchema.statics.compararPassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}


export default model("User", userSchema);