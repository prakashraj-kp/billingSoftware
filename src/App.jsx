import { Route, Routes,Navigate, useLocation} from 'react-router-dom'
import './App.css'
import Menubar from './compenets/Menubar';
import Dashboard from './pages/Dashboard/Dashboard';
import Explore  from './pages/Explore/Explore';
import ManageUsers from './pages/ManageUsers/ManageUsers';
import ManageCategory from './pages/ManageCategory/ManageCategory';
import MangeItem from  './pages/ManageItems/ManageItems';
import Login from './pages/Login/Login'; 
import { Toaster } from 'react-hot-toast';

function App() {
    const location=useLocation();
  return (
    <div>
   {location.pathname !=="/login" && <Menubar/>}
   <Toaster/>
   <Routes>
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/category" element={<ManageCategory/>}/>
    <Route path="/users" element={<ManageUsers/>}/>
    <Route path="/items" element={<MangeItem/>}/>
    <Route path="/explore" element={<Explore/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
    </div>
  )
}

export default App;
 
