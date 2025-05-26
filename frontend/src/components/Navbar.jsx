import React from 'react'
import 'tailwindcss/tailwind.css'
import {Link} from 'react-router'
import { PlusIcon } from 'lucide-react'
const Navbar = () => {
  return (
    <header className='bg-base-300 boreder-b border-base-content/10'>
      <div className='mx-auto max-w-6xl p-4'>
        <div className='flex items-center justify-between flex-row'>
          <h1 className='text-4xl text-mono text-primary tracking-tighter'> ThinkBoard</h1>
        
        <div className='flex items-center gap-4'>
          <Link to= { "/create" } className="btn btn-primary text-7"><PlusIcon className='size-7'/><span className='text-7'>Create</span></Link>
          
          </div>
          </div>
        </div>
      
  
         
      
    </header>
  )
}

export default Navbar