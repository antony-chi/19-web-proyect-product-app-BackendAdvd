import express from 'express'
const app  = express()
import morgan from 'morgan'
//importamos el package.json para mostrar datos del proyecto en pantalla
import pkg from '../package.json' assert{type:'json' } 
//importamos Routes
import productsRoutes from './routes/products.routes.js'


//Importamos Middlewares


//Global Settings
app.set('pkg', pkg);
app.use(morgan('dev'));
//---indicamos que va usar json 
app.use(express.json());

app.get('/', (req, res) =>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/products',productsRoutes)

export default app;