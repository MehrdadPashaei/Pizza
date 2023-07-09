import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import Header from "./components/Header.jsx";
import React from "react";
import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact.jsx";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
          <Header/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/menu' element={<Menu/>} />
              <Route path='/contact' element={<Contact/>}/>
              <Route path='*' element={<NotFound/>} />
          </Routes>
          <Footer/>
      </div>

  )
}

export default App
