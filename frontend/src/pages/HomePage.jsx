import { useEffect, useState } from 'react';
import NotesNotFound from '../components/NotesNotFound';
import axios from 'axios';
import NoteCard from '../components/NoteCard';


const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:5001/api/notes');
        console.log(res.data); // Axios puts the response data in .data
        setNotes(res.data);
      } catch(error) {
        console.log("Error while fetching", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchNotes(); // You need to actually call the function
  }, []);

  return (
    <div className='min-h-screen'>
      <div className='max-w-7xl mx-auto p-4 mt-6'> 
        {loading && <div className='text-center text-primary py-10 text-2xl'>Loading.....</div>}

          {notes.length === 0 && <NotesNotFound/>}

       {notes.length > 0 &&(
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map(note => (
              <NoteCard key={note._key} note={note} setNotes={setNotes}/>
            ))}
          </div>
        )}  
      </div>
      
    </div>
  )
}

export default HomePage