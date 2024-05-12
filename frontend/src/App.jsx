
import './App.css'
import Navbars from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Components/Footer/Footer';




import Login from './Pages/Login'
import Map from './Pages/Map';
import  {About}  from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { ContextProvider } from './ContextAPI/Contextprovider';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Pages/Signup';


function App() {


  return (
   <>
  <ContextProvider>
    <BrowserRouter>
    <Navbars/>
    
    <Routes>
      <Route path='/' element={<About/>}/>
      {/* <About/> */}
      <Route path='/login' element={<Login/>}/>
    <Route path ='/map' element={<Map/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
   
    </BrowserRouter>
  


   {/* <Map/> */}
   
{/* <Login/> */}
{/* <Map/> */}

</ContextProvider>
    </>
  )
}

export default App
