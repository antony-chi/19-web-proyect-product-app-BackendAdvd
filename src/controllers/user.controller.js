import config from "../config.js"
import Role from "../models/Role.js"
import User from "../models/User.js"
import jwt from "jsonwebtoken"

export const createUser = async (req, res) => {
    try {
        const {username, email, password, roles} = req.body

    const crearUsario = new User({
        username: username,
        email: email,
        password: await User.encriptarPassword(password)//se encripta la pass 
    })
    //validando roles
    if(roles){
        //busca en la db si el role escrito en el body.roles existe en la BD
        const fondoRoles = await Role.find({name: {$in: roles}})
        //si esxiste el role
        //map recorre el areglo de req.body.roles y por cada role le inserta el _id del model ROLE
        crearUsario.roles = fondoRoles.map(role => role._id)
        console.log(crearUsario)
    }else{
        //insertamos role user por defecto si no se manda ROLE en la peticion
        //busca en la DB en el modelo role y el atributo name busca el "user"
        const roleDefault = await Role.findOne({name: 'user'})
        crearUsario.roles = [roleDefault._id]
        //console.log(roleDefault._id)
    }
    
    console.log(crearUsario)
    //guradmos el usuario en la DB con el metodo save() y lo guardo en una variable usuarioGuardado
    const usuarioGuardado = await crearUsario.save();
    //creamos token de autenticacion
    const token = jwt.sign({id: usuarioGuardado._id},config.SECRET,{
        expiresIn: 180 //tiempo de expirracion del token en segundos 180 = 3 horas
    })
    res.status(201).json({token})
    } catch (error) {
        console.log("failed create user "+ error)
    }
}

export const getUsers = async (req, res) => {
    const user = await User.find()
    console.log(user)
    res.status(200).json(user)
}

export const getUserById = async (req, res) =>{
    res.json("usuario por id")
}

export const updateUserById = async (req,res) =>{
   try {
        const userId = req.params.userId//obtenermos el _id de req.paramos 
        const {username, email, password, roles} = req.body//dextraer variables desestruring
        //lo preparamos en el model User
        const updateUsercampos = new User({
            username: username,
            email: email,
            password: await User.encriptarPassword(password),//se encripta la pass
            
        })
        if(roles){
            const fondoRoles = await Role.find({name: {$in: roles}})
            updateUsercampos.roles = fondoRoles.map(role => role._id)
        }else{
            const roleDefault = await Role.findOne({name: 'user'})
            updateUsercampos.roles = [roleDefault._id]
        }

        //console.log(updateUsercampos)
        const userActulizado = await User.findByIdAndUpdate(userId, {
            username: updateUsercampos.username,
            email: updateUsercampos.email,
            password: updateUsercampos.password,
            roles: updateUsercampos.roles
        },{new: true})
        
        console.log(userActulizado)

        return res.json({message: "user upadate "+userActulizado.username})
   } catch (error) {
    console.log(`ocurrio un error, verifique los datos`+error);
    return res.json("ocurrio un error")
   }
}