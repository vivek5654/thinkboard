import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router';
import { LoaderIcon } from 'react-hot-toast';
import { ArrowLeftIcon } from 'lucide-react';
import { TrashIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';

const UpdatePage = () => {
  const [note, setNotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log({id});
  
useEffect(() => {
  const fetchNotes = async () => {
    try {
      const res = await axios.get(`http://localhost:5001/api/notes/${id}`);
      setNotes(res.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  fetchNotes(); // Call the function
}, [id]);


const handleDelete = async () => {
    if(!window.confirm("Are you sure you want to delete this note?")) {
      return;
    }
    try {
      await axios.delete(`http://localhost:5001/api/notes/${id}`);
      toast.success("Note deleted successfully");
      navigate('/');
    }catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Failed to delete note");
}
}

const handleSave = async () => {
  if(!note.title || !note.content) {
    toast.error("Title and content are required");
    return;
  }
  setSaving(true);
  
  try {
    setSaving(true);
    await axios.put(`http://localhost:5001/api/notes/${id}`, note);
    toast.success("Note updated successfully");
    navigate('/');
  } catch (error) {
    console.error("Error updating note:", error);
    toast.error("Failed to update note");
  } finally {
    setSaving(false);
  }
}






console.log({note})
if(loading) {
  return (
  <div className='min-h-screen bg-base-200 flex items-center justify-center'>
    <LoaderIcon className='animate-spin size-20'/> 
  </div>
);
}
  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <div className='flex items-center justify-between mb-6'>

          <Link to='/' className='btn btn-ghost'>
          <ArrowLeftIcon className='h-5 w-5' />
          Back to Notes
          </Link>
          <button onClick={handleDelete} className='btn btn-error btn-outline'>
            <TrashIcon className='h-5 w-5' />
            Delete Note
          </button>
          </div>

          <div className='card bg-base-100'>
            <div className='card-body'>
              <div className='form-control mb-4'>
                <label className='label mb-4'>
                  <span className='label-text text-xl'>Title</span>
                  </label>
                  <input 
                    type='text' 
                    className='input input-bordered text-xl p-7 mb-8' 
                    value={note.title} 
                    onChange={(e) => setNotes({...note, title: e.target.value})}></input>

                     <label className='label mb-4'>
                  <span className='label-text text-xl'>Content</span>
                  </label>
                  <textarea 
                    type='text' 
                    className='input input-bordered text-xl p-7 h-48' 
                    value={note.content} 
                    onChange={(e) => setNotes({...note, content: e.target.value})}></textarea>
                
              </div>
              <div className='card-actions justify-end'>
                <button onClick={handleSave} className='btn btn-primary' disabled={saving} >
                  {saving ? "saving..." : "Save Changes"}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  ) 
}


export default UpdatePage