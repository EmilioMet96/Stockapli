const express = require('express')
const app = express()
const path=require('path')

require('dotenv').config()
app.use(express.static(path.join(__dirname,'public')))
//app.get('/', (req, res) => {
  //      console.log('Peticion recibida')
    //    res.send('Hola mundo!')
    //})
    const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`Servidor escuchando desde el puerto ${PORT}`)
} )