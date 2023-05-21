import User from '../models/User.js'
import jwt  from 'jsonwebtoken'
import config from '../config.js'
import Role from '../models/Role.js'

export const signUp = async (req, res) =>{
    const {username, email, password, roles } = req.body

    //console.log(req.body)
    const newUser = new User({
        username,
        email,
        password: await User.encriptarPassword(password)
    })
    //validar si contiene roles o asignar role USER default
    if(roles){
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    }else{
        const role = await Role.findOne({name: 'user'})
        newUser.roles = [role._id]
    }

    console.log(newUser)
    const saveUser = await newUser.save();
    //creando token de autenticacion
    const token = jwt.sign({id: saveUser._id},config.SECRET,{
        expiresIn: 86400 //tiempo de expiracion en segundos 24 horas = 86400 segundos
    })
    console.log(token)
    res.status(200).json({token})
}

export const signIn = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email}).populate("roles");

    //validamos si existe el email
    if(!userFound) return res.json({message: "User not found"})
    console.log(userFound)
    res.json({token: ""})
}