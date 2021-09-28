const mongoose = require('mongoose')

const RegionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    prise:{
        required:true,
        type:Number
    },
    date:{
        type:Date,
        required:true
    }

})

mongoose.model("Region",RegionSchema)