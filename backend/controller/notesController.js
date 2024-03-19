const notesModel = require('../models/notesModel')
const mongoose = require('mongoose')

//This has all the functions related to CRUD operation

//This will create and save new note
const createNote = async(req,res) => {
    const {title,body} = req.body;
    const note = new notesModel({title,body});

    try{
        const newNote = await note.save();
        if(newNote){
            res.status(201).send(newNote);
        }
    }catch(error){
        res.status(500).send(error);
    }
}

//This will retrieve all notes from database
const getAllNotes = async(req,res) => {
    try{
        const notes = await notesModel.find();
        if(notes){
            res.status(200).send(notes);
        }
    }catch(error){
        res.status(500).send(error);
    }
}

//This will retrieve note by id
const getNoteById = async (req,res) => {
    const id = req.params.id
    try{
        const note = await notesModel.findById(id);
        if(note){
            res.status(200).send(note)
        }
    }catch(error){
        res.status(500).send(error)
    }
}

//This will update a note
const updateNote = async(req,res) => {
    const id = req.params.id;
    const {title,body} = req.body;

    try{
        const updatedNote = await notesModel.findByIdAndUpdate(id, {title,body});
        if(updatedNote){
            res.status(200).send(updatedNote);
        }
    }catch(error){
        res.status(500).send(error);
    }
}

//This will delete a note
const deleteNote = async(req,res) =>{
    const id = req.params.id
    try{
        const deletedNote = await notesModel.findByIdAndDelete(id)
        if(deletedNote){
            res.status(200).send(deletedNote)
        }
    }catch(error){
        res.status(500).send(error)
    }
}

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote
}