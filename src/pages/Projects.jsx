import TopNavbar from "../components/top-navbar";
import SideNavbar from "../components/side-navbar";

export default function Projects({ openMenu, hamburgerClick, closeMenu}) {
    return (
        <>
            <TopNavbar HamburgerOpen={openMenu} hamburgerClick={hamburgerClick}/>
            <div className="fixed top-0 right-0 left-0 h-16 w-full z-30 backdrop-blur-sm"></div>
            <SideNavbar HamburgerClose={closeMenu} hamburgerClick={hamburgerClick}/>
            <div className="pt-24 pb-6 px-6 w-full h-fit">

            </div>
        </>
    )
}