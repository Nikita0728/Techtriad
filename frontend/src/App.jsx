
import './App.css'
import Navbars from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Components/Footer/Footer';



import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login'
import Map from './Pages/Map';
import  {About}  from './Components/About/About';
import { Contact } from 'lucide-react';
function App() {


  return (
   <>
  
   <Navbar/>
   <About/>
   <Contact/>
{/* <Login/> */}
{/* <Map/> */}
    </>
  )
}

export default App
