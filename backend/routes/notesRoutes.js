const route = require('express').Router()
const {createNote,getAllNotes,getNoteById,updateNote,deleteNote} = require('../controller/notesController')

//This will specify the API endpoints for each CRUD operation
route.post("/createNote", createNote)
route.get("/getNotes", getAllNotes)
route.get("/getNote/:id",getNoteById)
route.put("/updateNote/:id",updateNote)
route.delete("/deleteNote/:id",deleteNote)

module.exports = route