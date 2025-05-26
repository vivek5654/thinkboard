import mongoose from "mongoose";


const noteSchema = new mongoose.Schema({
    title: {
        type: 'string',
        requried: true
    },
    content: {
        type: 'string',
        requried: true
    },

}, {timestamps: true});

const Note = mongoose.model("Note", noteSchema);

export default Note;