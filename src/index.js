import app from './app.js'
//importamos la basedatos
import { connect } from './database.js';
//inicalizamos la conexion
connect()

app.listen(3000);
console.log('server listen on puerto', 3000) 