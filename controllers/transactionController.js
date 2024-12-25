const transactions = require('../models/transactionModel')

// add transaction
exports.createTransactinsController=async(req,res)=>{
    console.log("Inside createTransactinsController");
      const userId = req.userId
    const {name,type,amount}=req.body
    // console.log(name,type,amount);
    try{
        if(type=='Investment'){
            const newTransaction = new transactions({
                name,type,amount,userId,color:'#FCBE44'
                // 
     
             })
             await newTransaction.save()
        return res.status(200).json(newTransaction)

        }
        else if(type=='Expense'){
            const newTransaction = new transactions({
                name,type,amount,userId,color:'rgb(255, 99, 132)'
                // 
     
             })
             await newTransaction.save()
        return res.status(200).json(newTransaction)

        }
        else{
            const newTransaction = new transactions({
                name,type,amount,userId,color:'rgb(54, 162, 235)'
                // 
     
             })
             await newTransaction.save()
        return res.status(200).json(newTransaction)
        }
        

         

    }catch(err){
        res.status(401).json(err) 
    }

    //  console.log(userId);
    
    res.status(200).json("Add transaction request recived !!!")
}

// get transaction 

exports.getUserTransactionsController = async(req,res)=>{
    console.log("Inside getUserTransactionsController");
    const userId = req.userId
    try{
        const allUserTransactions = await transactions.find({userId})
        res.status(200).json(allUserTransactions)

    }catch(err){
        res.status(401).json(err)
    }
    
}

// edit  transaction

exports.editTransactionController = async(req,res)=>{
    console.log("Inside editTransactionController");
    const {id} = req.params
    const {name,type,amount}=req.body
    const userId = req.userId
    // console.log(id,name,type,amount,userId);
    try{
        if(type=='Investment'){
            const updatedTransaction = await transactions.findByIdAndUpdate({_id:id},{name,type,amount,userId,color:'#FCBE44'},{new:true})
        await updatedTransaction.save()
        res.status(200).json(updatedTransaction)
        }

        else if(type=='Expense'){
            const updatedTransaction = await transactions.findByIdAndUpdate({_id:id},{name,type,amount,userId,color:'rgb(255, 99, 132)'},{new:true})
        await updatedTransaction.save()
        res.status(200).json(updatedTransaction)
        }
        else{
            const updatedTransaction = await transactions.findByIdAndUpdate({_id:id},{name,type,amount,userId,color:'rgb(54, 162, 235)'},{new:true})
        await updatedTransaction.save()
        res.status(200).json(updatedTransaction)
        }
        
        

    }catch(err){
        res.status(401).json(err)
    }
    
    
}

// remove transaction

exports.removeTransactionController = async(req,res)=>{
    console.log("Inside removeTransactionController");
    const {id} = req.params
    try{
       const removeTransaction = await transactions.findByIdAndDelete({_id:id})
       res.status(200).json(removeTransaction)
    }catch(err){
        res.status(401).json(err)
    }
    
}