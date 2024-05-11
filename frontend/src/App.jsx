
import './App.css'
import Navbars from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Components/Footer/Footer';
import { About } from './Components/About/About';


import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login'
import Map from './Pages/Map';

function App() {


  return (
    <div >
  
   <Navbar/>
{/* <Login/> */}
<Map/>
    </div>
  )
}

export default App
