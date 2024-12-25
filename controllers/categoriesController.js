const categories = require('../models/categoriesModel')


exports.createCategoriesController=async(req,res)=>{
    
    console.log("Inside createCategoriesController");
    
   try{
    const createCategorie = new categories({
        
        type:"Expenses",
        color:'rgb(255, 99, 132)'
    })
    
    await createCategorie.save()
    res.status(200).json(createCategorie)

   }
   catch(err){
    res.status(401).json(err)
   }


    
}

// get Categories 

exports.getCategoriesController = async(req,res)=>{
    console.log("Inside getCategoriesController");
    
    try{
        const allCategories = await categories.find()
        res.status(200).json(allCategories)

    }catch(err){
        res.status(401).json(err)
    }
    
}