import TopNavbar from "../components/top-navbar";
import SideNavbar from "../components/side-navbar";
import HeroSection from "../components/hero";
import AboutSection from "../components/about";
import KuoteSection from "../components/qoute";

export default function Home({ openMenu, hamburgerClick, closeMenu}) {
        return (
            <>
                <TopNavbar HamburgerOpen={openMenu} hamburgerClick={hamburgerClick}/>
                <SideNavbar HamburgerClose={closeMenu} hamburgerClick={hamburgerClick}/>
                <HeroSection/>
                <AboutSection/>
                <KuoteSection/>
                {/* <div className="w-full h-96"></div> */}
            </>
        )
}