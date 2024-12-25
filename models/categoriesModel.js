const mongoose = require('mongoose')

const categorieSchema = new mongoose.Schema({
    type:{
        type:String,
        default:"Investment"
    },
    color:{
        type:String,
        default:"#FCBE44"
    },

})

const categories = mongoose.model("categories",categorieSchema)
module.exports = categories