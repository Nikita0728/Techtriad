
import './App.css'
import Navbars from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Components/Footer/Footer';
import { About } from './Components/About/About';


import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login'
import Map from './Pages/Map';
import { Contact } from './Components/Contact/Contact';

function App() {


  return (
   <>
  
   <Navbar/>
{/* <Login/> */}

{/* <Map/> */}
<About/>
<Contact/>
<Footer/>
    </>
  )
}

export default App
