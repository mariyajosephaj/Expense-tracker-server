require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./config/connection')

// express server creation
const etServer = express()

etServer.use(cors())
// Returns middleware (function) that only parses json
etServer.use(express.json())
etServer.use(router)

const PORT = 3000 || process.env.PORT
etServer.listen(PORT,()=>{
    console.log(`Expense Tracker server started at port: ${PORT} and waiting for client request !!`);
    
})
// controller
etServer.get('/',(req,res)=>{

    res.status(200).send(`<h1 style="color:red"> Expense Tracker server started and waiting for client request !!</h1>`)

})
