const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Regions = mongoose.model("Region")


router.get('/',(req,res)=>{
    Regions.find()
    .then((regions)=>{
        res.json({regions})
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router