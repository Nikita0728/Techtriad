
import './App.css'
import Navbars from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Signup } from './Components/Signup/Signup';
import { Footer } from './Components/Footer/Footer';
import { About } from './Components/About/About';



function App() {


  return (
    <>
   
   <Navbars/>
   <Signup/>

   <About/>
   <Footer/>
    </>
  )
}

export default App
