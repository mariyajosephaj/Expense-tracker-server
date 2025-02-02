const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    amount:{
        type:Number,
        required: true
     },
    userId:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    }
    // date:{
    // type:Date,
    // default:Date.now
// }

})

const transactions = mongoose.model("transactions",transactionSchema)
module.exports = transactions