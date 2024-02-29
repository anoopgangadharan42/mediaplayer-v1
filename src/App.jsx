import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPages from './Pages/LandingPages'
import Home from './Pages/Home'
import Watch from './Pages/Watch'
import Header from './Components/Header'
import Footer from './Components/Footer'



function App() {
 

  return (
    <>
      <Header/>
      
      <Routes>
         <Route path='/landing' element={<LandingPages/>}/>
         <Route path='/home' element={<Home/>}/>
          <Route path='/watch' element={<Watch/>}/>
  
  
      </Routes>
      <Footer/>

    </>
  )
}

export default App
