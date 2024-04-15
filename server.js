const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.set('strictQuery',false)
mongoose.connect('mongodb://localhost:27017/ProjectDB')

const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log("Database Connected Successfully")
})

app.listen(3001,function check(error){
    if(error)
    console.log('Error in Starting the port');
    else
    console.log('port Started')
})