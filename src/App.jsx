import { useState } from "react"
import SideNavbar from "./components/side-navbar"
import TopNavbar from "./components/top-navbar"

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
            <TopNavbar HamburgerOpen={openMenu} hamburgerClick={hamburgerClick}/>
            <SideNavbar HamburgerClose={closeMenu} hamburgerClick={hamburgerClick}/>
        </>
    )
}

export default App
