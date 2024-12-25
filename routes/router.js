const express = require('express')
const userController = require('../controllers/userController')
const transactionController = require('../controllers/transactionController')
const categoriesController = require('../controllers/categoriesController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const router = new express.Router()

// register - post
router.post('/register',userController.registerController)

// login - post
router.post('/login',userController.loginController)

// categorie controller
router.post('/categories',categoriesController.createCategoriesController)
// get categories
router.get('/get-categories',categoriesController.getCategoriesController)


// add transaction

router.post('/add-transaction',jwtMiddleware,transactionController.createTransactinsController)

// get user transaction
router.get('/user-transactions',jwtMiddleware,transactionController.getUserTransactionsController)

// edit user transaction
router.put('/transactions/:id/edit',jwtMiddleware,transactionController.editTransactionController)

// remove user transaction
router.delete('/transactions/:id/remove',jwtMiddleware,transactionController.removeTransactionController)


module.exports = router