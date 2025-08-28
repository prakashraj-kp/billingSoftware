import { Route, Routes,Navigate} from 'react-router-dom'
import './App.css'
import Menubar from './compenets/Menubar'
import Dashboard from './pages/Dashboard/Dashboard'
import Explore  from './pages/Explore/Explore'
import ManageUsers from './pages/ManageUsers/ManageUsers'
import ManageCategory from './pages/ManageCategory/ManageCategory'
import MangeItem from  './pages/ManageItems/ManageItems'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div>
   <Menubar/>
   <Toaster/>
   <Routes>
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/category" element={<ManageCategory/>}/>
    <Route path="/users" element={<ManageUsers/>}/>
    <Route path="/items" element={<MangeItem/>}/>
    <Route path="/explore" element={<Explore/>}/>
   </Routes>
    </div>
  )
}

export default App;
 
