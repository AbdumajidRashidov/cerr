const express = require('express');
const app = express()
const mongoose = require('mongoose');

const PORT = 5000;
const {MONGOURL} = require('./keys')


mongoose.connect(MONGOURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log('mongo connected successfully');
})
mongoose.connection.on('error',(err)=>{
    console.log('mongo error connecting',err);
})



require('./models/region')

app.use(express.json())
app.use(require('./routes/regions'))


app.listen(PORT,()=>{
    console.log("server is running on", PORT)
})