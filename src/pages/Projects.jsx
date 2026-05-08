import TopNavbar from "../components/top-navbar";
import SideNavbar from "../components/side-navbar";

export default function Projects({ openMenu, hamburgerClick, closeMenu}) {
    return (
        <>
            <TopNavbar HamburgerOpen={openMenu} hamburgerClick={hamburgerClick}/>
            <SideNavbar HamburgerClose={closeMenu} hamburgerClick={hamburgerClick}/>
        </>
    )
}