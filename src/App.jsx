import React from "react"
import Navbar from "./Sections/Navbar"
import Home from "./Sections/Home"
import Skills from './Sections/Skills';
import About from "./Sections/About";
import Contact from "./Sections/Contact";
//import SubmitPage from "./Sections/SubmitPage";
import Footer from "./Sections/Footer";
import {Toaster} from 'react-hot-toast'

function App(){
    return(
        <>
        <div className="from-orange-300 to-pink-300">
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
        </div>
        <Toaster/>

   
        </>
    )
    
}
export default App;