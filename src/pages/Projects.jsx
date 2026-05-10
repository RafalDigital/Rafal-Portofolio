/* eslint-disable no-unused-vars */
import TopNavbar from "../components/top-navbar";
import SideNavbar from "../components/side-navbar";
import mockup from "../assets/webp/mockup.webp"
import { RiInstagramFill, RiSearchLine, RiGithubFill } from '@remixicon/react';
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useEffect } from "react";

export default function Projects({ openMenu, hamburgerClick, closeMenu}) {
    const [selectedProject, setSelectedProject] = useState(null)
    const [data, setData] = useState([]);

    const ICON_MAP = {
        RiInstagramFill,
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/data.json");
                const dataResponse = await response.json();
                setData(dataResponse.ProjectsFolder)
            } catch (error) {
                console.log("Gagal Melakukan Fetching Data : ", error)
            }
        }
        
        fetchData()
    }, [])
    
    console.log(data)
    if (data.length > 0) {
    console.log(data[0].name)
    console.log(data[0].id)
    console.log(data[0].icon)
    console.log(data[0].projects)
    }

    useEffect(() => {
        console.log(selectedProject)
    }, [selectedProject])

    function openFolderProject(project) {
        setSelectedProject(project);
    }

    function closeFolderProject() {
        setSelectedProject(null);
    }

    return (
        <>
            <TopNavbar HamburgerOpen={openMenu} hamburgerClick={hamburgerClick}/>
            <div className="fixed top-0 right-0 left-0 h-16 w-full z-30 backdrop-blur-sm"></div>
            <SideNavbar HamburgerClose={closeMenu} hamburgerClick={hamburgerClick}/>
            <div className="pt-24 pb-6 px-6 w-full h-fit flex flex-col gap-4">
                {data.map((project, index) => (
                    <GroupProject key={index} Header={project.name} icon={ICON_MAP[project.icon]} onOpen={() => {openFolderProject(project)}}/>
                ))}
            </div>

    <AnimatePresence>
        {selectedProject && (
            <>
            <motion.div 
                key={selectedProject.id} 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "", damping: 25, stiffness: 200 }}
                willChange={true}
                className="fixed overflow-x-hidden inset-be-0 w-full h-[95dvh] right-0 z-50 pb-4 flex flex-col gap-8 bg-secondary border border-tertiary/40 rounded-tl-4xl rounded-tr-4xl">
                <div className="w-full h-fit pt-6 flex flex-col bg-option1">
                    <div className="flex gap-4 px-4 pb-6 items-center justify-between">
                        {/* KIRIM SETSELECTEDPROJECT KE CLOSE DAN SELECTEDPROJECT KE H1 */}
                        <Close onClose={closeFolderProject}/>
                        <h1 className="text-2xl font-nunito text-center text-tertiary">{selectedProject.name}</h1>
                        <Search/>
                    </div>
                    <span className="h-[1px] w-full bg-tertiary/40 rounded-2xl"></span>
                </div>

                <div className="flex w-full h-full flex-col gap-4 px-4">
                    {selectedProject.projects.map((project, index) => (
                        <Project key={index} title={project.name} desc={project.desc}/>
                    ))}
                </div>

            </motion.div>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                willChange={true}
                className="fixed z-40 inset-0 w-full h-dvh bg-secondary/40">
            </motion.div>
            </>
        )}
    </AnimatePresence>
        </>
    )
}

function GroupProject({Header, icon: Icon, onOpen}) {
    return (
        <div className="w-full h-fit p-4 bg-secondary border border-tertiary/20 rounded-lg text-tertiary">
            {/* <img src={mockup} alt="" /> */}
            <div className="mb-4 flex justify-between items-center">
                <h1 className="font-zain text-2xl m-0">{Header}</h1>
                <Icon/>
            </div>
            <motion.button
                whileHover={{scale: 1.02, y: -1}}
                whileTap={{ scale: 0.95, y: 1}}
                transition={{type: 'spring', stiffness: 300}} 
                onClick={onOpen}
                className="w-full h-fit py-1 rounded-md bg-primary hover:bg-transparent transition-all ease border border-tertiary/20 cursor-pointer">
                    Open
                </motion.button>
        </div>
    )
}

function Project({ image = mockup, title = 'Template', desc = 'A template', stacks = ['HTML', 'JS', 'CSS']}) {
    return(
        <div className="w-full h-fit p-4 bg-background border border-tertiary/20 rounded-xl text-tertiary">
            <div className="w-full h-fit flex justify-between gap-4">
                <img src={image} className="rounded-md w-1/2" />
                <div className="w-1/2 flex flex-col gap-1">
                    <h1 className="w-full font-zain font-medium text-md text-tertiary leading-5">Project {title}</h1>
                    <span className="w-full font-nunito text-tertiary/40 text-xs leading-4">{desc}</span>
                </div>
            </div>
            <div className="my-4 flex gap-2">
                {stacks.map((s, index) => (
                    <Stack key={index} stackName={s}/>
                ))}

            </div>
            <div className="w-full h-fit flex justify-between gap-3 font-nunito font-medium text-sm">
                <button className="w-1/2 bg-tertiary/40 py-1 rounded-lg border border-tertiary/20 cursor-pointer">View Live</button>
                <button className="w-1/2 flex justify-center items-center bg-option1 py-1.5 rounded-lg border border-tertiary/40 gap-1 cursor-pointer">
                    <RiGithubFill size={20}/>
                    Github
                </button>
            </div>
        </div>
    )
}

function Stack({stackName}) {
    return(
        <span className="w-fit h-fit bg-tertiary/20 px-2 py-0.5 rounded-4xl text-[10px] font-nunito">
            {stackName}
        </span>
    )
}

// Untuk Bagian Lihat Group Project
function Close({onClose}) {
    const genericBar = "h-1 w-8 my-1 rounded-full bg-tertiary transition ease-in-out duration-300 rounded-2xl group-hover:bg-tertiary/40 transition-all ease group";
    return(
        <button onClick={onClose} className="flex flex-col h-8 w-8 justify-center items-center group cursor-pointer  ">
            <span className={`${genericBar} rotate-45 translate-y-2`}></span>
            <span className={`${genericBar} -rotate-45 -translate-y-1`}></span>
        </button>
    )
}

function Search() {
    return(
        <button className="h-8 w-8 justify-center items-center group cursor-pointer text-tertiary hover:text-tertiary/40 transition-all ease">
            <RiSearchLine size={30}/>
        </button>
    )
}

// Tinggal Fungsi Search, Close, Pemanggilan Data, Pengambilan data dari JSON, Open