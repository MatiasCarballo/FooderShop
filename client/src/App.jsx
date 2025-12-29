import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NabBar/Index';
import Home from './pages/Home';
import Menu from './pages/Menu';
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
