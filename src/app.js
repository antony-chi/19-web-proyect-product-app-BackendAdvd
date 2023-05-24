import express from 'express'
const app  = express()
import morgan from 'morgan'
//importamos el package.json para mostrar datos del proyecto en pantalla
import pkg from '../package.json' assert{type:'json' } 

import { createRoles } from './libs/initalSetup.js' //importamos roles para inicializar y crear roles por defecto
//importamos Routes
import productsRoutes from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'


//Importamos Middlewares


//Global Settings
app.set('pkg', pkg);
app.use(morgan('dev'));
app.use(express.json());//---indicamos que va usar json 
createRoles();//funcion crear role por defecto si el sistema no tieroles creara USER MODERADOR ADMIN

app.get('/', (req, res) =>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})
//usamos llamamos los routes
app.use('/api/products',productsRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)

export default app;