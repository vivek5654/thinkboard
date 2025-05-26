import { PenSquareIcon, TrashIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import {fromatdate} from '../lib/utils.js'
import axios from 'axios'
import toast from 'react-hot-toast'
const NoteCard = ({note,setNotes}) => {
    const handleDelete = async (e , id) => {
            e.preventDefault();
            if(!window.confirm('Are you sure you want to delete')) return;
        try{
            setNotes((prev) => prev.filter(note => note._id !== id));
             await axios.delete(`http://localhost:5001/api/notes/${id}`);
             toast.success(`Deleted successfully`);
        } catch(error) {
            console.error(error);
        }
    }       
  return (
    <Link to={`/note/${note._id}` } className='bg-black hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D] rounded-3xl'>
            <div className='card-body'>
                <h3 className='card-title text-base-content'>{note.title}</h3>
                <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
                <div className='card-actions justify-between items-center mt-4'>
                    <span className='text-sm text-base-content/60'>
                     {fromatdate(note.createdAt)} 
                    </span>
                    <div className='flex items-center gap-10'>
                        <PenSquareIcon/>
                        <button onClick={(e) => handleDelete(e, note._id)} className=' btn btn-ghost text-error'>
                            <TrashIcon className='text-error'/>
                        </button>

                    </div>
                </div>
            </div>
     </Link>
   
  )
}

export default NoteCard