import User from '../models/User.js'
import jwt  from 'jsonwebtoken'
import config from '../config.js'

export const signUp = async (req, res) =>{
    const {username, email, password, roles } = req.body

    //console.log(req.body)
    const newUser = new User({
        username,
        email,
        password: await User.encriptarPassword(password)
    })
    //console.log(newUser)
    const saveUser = await newUser.save();
    //creando token de autenticacion
    const token = jwt.sign({id: saveUser._id},config.SECRET,{
        expiresIn: 86400 //tiempo de expiracion en segundos 24 horas = 86400 segundos
    })
    console.log(token)
    res.status(200).json({token})
}

export const signIn = async (req, res) =>{
    res.json('signIn')
}