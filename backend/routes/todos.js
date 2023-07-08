const express = require('express')

//creating an instance of the router
const router = express.Router()
//attaching a handler to the router object
//all the todos entered will be shown when they hit the root domain /api/todolist
router.get('/', (req, res)=>{
    res.json({mssg : 'Get all the todos'})
})

//Get a single todo
router.get('/:id', (req, res) => {
    res.json({mssg : 'Get single todo'})
})

//to create a new todo item
//for a post or patch request, we are sending data to the server
router.post('/', (req, res) => {
    res.json({mssg : 'Post a new todo item'})
})

//to delete a todo item
router.delete('/:id', (req, res) => {
    res.json({mssg : 'Delete a todo item'})
})

//to update a todo item
router.patch('/:id', (req, res) => {
    res.json({mssg : 'Update a todo item'})
})

module.exports = router

