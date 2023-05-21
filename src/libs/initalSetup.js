import Role from "../models/Role.js"

export const createRoles = async () =>{
    try {
        //recoremos el documento para saber si tiene roles
    const count =  await Role.estimatedDocumentCount()
    //validar si existe roles
    if (count > 0) return;

    const values = await Promise.all([
        new Role({name: 'user'}).save(),
        new Role({name: 'moderator'}).save(),
        new Role({name: 'admin'}).save()
     ])

     console.log(values)
        
    } catch (error) {
        console.error('erro de inicializacion de Roles'+error)
    }
}