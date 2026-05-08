import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import { useState } from "react"

function App() {
    const [hamburgerClick, setHamburgerClick] = useState(false);
        
    const openMenu = () => {
        setHamburgerClick(true)
        console.log(hamburgerClick)
    };
            
    const closeMenu = () => {
        setHamburgerClick(false)
        console.log(hamburgerClick)
        
    };
        
    console.log(hamburgerClick)

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home openMenu={openMenu} hamburgerClick={hamburgerClick} closeMenu={closeMenu}/>} />
                    <Route path="/about" element={<About openMenu={openMenu} hamburgerClick={hamburgerClick} closeMenu={closeMenu}/>} />
                    <Route path="/projects" element={<Projects openMenu={openMenu} hamburgerClick={hamburgerClick} closeMenu={closeMenu}/>} />
                </Routes>
            </Router>
        </>
    )
}

export default App
