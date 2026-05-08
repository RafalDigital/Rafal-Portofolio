import TopNavbar from "../components/top-navbar";
import SideNavbar from "../components/side-navbar";

export default function About({ openMenu, hamburgerClick, closeMenu}) {
    return (
        <>
            <TopNavbar HamburgerOpen={openMenu} hamburgerClick={hamburgerClick}/>
            <SideNavbar HamburgerClose={closeMenu} hamburgerClick={hamburgerClick}/>
            <div className="pt-24 px-6 w-full h-20">
                <TopAbout/>
            </div>
        </>
    )
}

function TopAbout() {
    return(
        <>
            <div className="w-full h-fit p-4 bg-secondary border border-tertiary/20 rounded-lg text-tertiary">
                asdafddssfasd
            </div>
        </>
    )
}