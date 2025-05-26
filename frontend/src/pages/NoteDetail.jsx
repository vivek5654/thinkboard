import React, { useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router';

const NoteDetail = () => {
    const [note, setNotes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        const fetchNotes = async() => {
            try{
                const res = await axios.get(`http://localhost:5001/api/notes/${id}`)
                setNotes(res.data);
            } catch(error) {
                console.log("error", error);
            } finally {
                setLoading(false);
            }
        };
        fetchNotes();
    },[id])

    console.log({note});
  return (
    <div>NoteDetail</div>
  )
}

export default NoteDetail