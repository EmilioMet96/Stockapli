const { timeStamp } = require('console')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path=require('path')

require('dotenv').config()
mongoose.connect(`mongodb+srv://EmilioMet:${process.env.MONGO_DB_PASS}@desarrollo.wbgam0f.mongodb.net/stockapp?retryWrites=true&w=majority`)
.then((result)=>{
    app.listen(PORT,()=>{
    console.log(`Servidor escuchando desde el puerto ${PORT}`)

} )
console.log('Conexion exitosa BD')
})
.catch((err)=>console.log(err))
const productSchema =mongoose.Schema({
    name:{type:String,required:true},
    price:Number
},{timestamps :true})
const Product=mongoose.model('Product',productSchema)


app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.post('/api/v1/products', (req, res, next) => {
    const newProduct=new Product(req.body
       

    )
    newProduct.
    save().
    then((result)=>{
        res.status(201).json({ok : true})
})
.catch((err)=>console.log(err))
    

    })
    const PORT = process.env.PORT || 4000
