import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NabBar/Index';
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';



function App() {

  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
      <Footer/>  
    </div>
  )
}

export default App
