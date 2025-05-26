
import { Route, Routes } from 'react-router'

import UpdatePage from './pages/UpdatePage';
import CreatePage from './pages/CreatePage'
import HomePage from './pages/homePage' 
import Navbar from './components/Navbar';
function App() {
  return (
  <div data-theme="forest"> 

    <Navbar/>
 <Routes> 
  <Route path='/' element={<HomePage/>}/>
  <Route path='/create' element={<CreatePage/>}/>
  <Route path='/note/:id' element={<UpdatePage/>}/>
 </Routes>
 </div>   
  )
}

export default App
