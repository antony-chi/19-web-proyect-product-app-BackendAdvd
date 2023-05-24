import {ROLES} from '../models/Role.js'
import User from '../models/User.js'

export const checkDuplicatedUsernameOrEmail = async (req, res, next) => {
    const {username, email} = req.body

    const userDB = await User.findOne({username: username})
    if (userDB) return res.status(400).json({message: "The user already Exist"})
    
    const emailDB = await User.findOne({email: email})
    if (emailDB) return res.status(400).json({message: "The email already Exist"})

    next()
}

export const checkRolesExisted = (req, res, next) => {
    const roles = req.body.roles
    //console.log(roles)
    if(roles){
        for (let i = 0; i < roles.length; i++) {
            if(!ROLES.includes(roles[i])){
                return res.status(400).json({
                    message: `Roles ${roles[i]} does not exists`
                })
            }
        }
    }
    next();
}
