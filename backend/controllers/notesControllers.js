import Note from '../models/Note.js'
export async function getMthod(req, res) {
    try{
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch(error) {
        res.status(500).json({message: "error while fetching notes"})
    }
}

export async function getidMethod(req, res) {
    try {
        const notes = await Note.findById(req.params.id)
        if(!notes) return res.status(404).json({message: "Note not found"})
            res.json(notes);
        

    } catch(error) {
        res.status(500).json({message: "error while fetching notes"})
    }
}

export async function postMthod(req, res){
     try{
        const { title, content} = req.body;
        const newNotes = new Note({title: title, content: content});
        const savedNote = await newNotes.save();        
        res.status(200).json(savedNote);
     } catch(error) {
        res.status(500).json({message: "Error while creating notes",});
     }
} 
export async function putMthod (req, res){
    try {
    const { title, content } = req.body;
    const updatedNotes = await Note.findByIdAndUpdate(req.params.id,{title,content});
    res.status(200).json(updatedNotes);
    if(!updatedNotes) {
        res.status(404).json({message: "record no found",});
    }
    } catch(error) {
        res.status(500).json({message: "Error while updating notes",});
    }
}
export async function deleteMthod  (req, res) {
    try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
   
    res.status(200).json({message : "Note deleted successfully"});
    } catch (error) {
        res.status(500).json({message: "Error while deleteing notes",});
    }
}