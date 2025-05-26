import { useState } from "react"
import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate} from "react-router"
import { toast } from "react-hot-toast"
import axios  from "axios";


const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  
  const handleSubmit= async (e) => {
      e.preventDefault();
      if(!title.trim() || !content.trim()) {
        toast.error("All fields are required");
        return;
      }
      setLoading(true)
      try {
          await axios.post('http://localhost:5001/api/notes', {
            title,
            content
          });
          toast.success("Notes Created successfully")
          navigate('/')
      } catch (error) {
        console.log("An error",error)
          toast.error("Failed to Create")
          setLoading(false)
          
      }
    }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8 ">
        <div className="max-w-2xl mx-auto">
          <Link to={'/'} className="btn btn-ghost mb-6 text-xl" >
            <ArrowLeftIcon className="size-5"/>
            Back to Notes
          </Link>
          <div className="card bg-base-100"> 
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4"> Create New Notes</h2>
                  <form onSubmit={handleSubmit}>
                      <label className="label">
                        <span className="label-text text-xl">Title</span>
                      </label>
                      <input type="text"
                      placeholder="Enter Title"
                      className="input input-bordered w-full text-xl p-5 mb-6"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      ></input>

                      <label className="label">
                        <span className="label-text text-xl">Note Content</span>
                      
                      </label>
                      <textarea className="textarea textarea-bordered h-32 w-full text-xl" type="text"
                      placeholder="Enter Content of Note"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}>
                      
                      </textarea>
                     
                    <div className="flex justify-end mt-5">
                      <button type="submit" className="btn btn-primary text-xl" disabled={loading}> {loading ? "Creating..." : "Create Note"}  </button>
                    </div>
                  </form>

              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage