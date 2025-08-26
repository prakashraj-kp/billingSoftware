import { Route, Routes } from 'react-router-dom'
import './App.css'
import Menubar from './compenets/Menubar'
import Dashboard from './pages/Dashboard/Dashboard'
import Explore  from './pages/Explore/Explore'
import ManageUsers from './pages/ManageUsers/ManageUsers'
import ManageCategory from './pages/ManageCategory/ManageCategory'
import MangeItem from  './pages/ManageItems/ManageItems'

function App() {

  return (
    <div>
   <Menubar/>
   <Routes>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/category" element={<ManageCategory/>}/>
    <Route path="/users" element={<ManageUsers/>}/>
    <Route path="/items" element={<MangeItem/>}/>
    <Route path="/explore" element={<Explore/>}/>
   </Routes>
    </div>
  )
}

export default App
 
