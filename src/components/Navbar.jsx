import { useState } from "react"
import logo from '../assets/logo.png'
import {LINKS} from '../constants'
import { Fa0, FaBars } from "react-icons/fa6"
import { FaTimes } from "react-icons/fa"
const Navbar = () => {

    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMobileMenu(!openMobileMenu)
    }

    const handleScroll = (event, targetId) =>{
        event.preventDefault()
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
            const offSetTop = targetElement.offsetTop - 80
            window.scrollTo({
                top: offSetTop,
                behavior: "smooth",
            })
        }

        setOpenMobileMenu(false)
    }
  return (
    <>
    <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
    {/* desktop nav */}
        <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
            <img src={logo} width={80} height={22} alt="" />
            <div className="hidden space-x-6 lg:flex">
                {
                    LINKS.map((link, index) => (
                        <a key={index} 
                        href={`#${link.targetId}`} 
                        className={`text-sm ${index !== 0 ? 'border-l-2 border-neutral-300/20 pl-2' : ''} hover:opacity-50 `} 
                        onClick = {(e) => {handleScroll(e, link.targetId)}}>
                            {link.text}
                        </a>
                    ))
                }
            </div>
            {/* hamburger button */}
            <div className="lg:hidden">
                <button onClick={toggleMenu}>
                    {openMobileMenu ? <FaTimes/> : <FaBars/>}
                </button>
            </div>
        </div>
        {/* show links when toggle menu is shown */}
        {
            openMobileMenu && (
                <div className="w-full backdrop-blur-lg lg:hidden">
                    {
                        LINKS.map((link, index) => (
                            <a 
                            key={index}
                             href={`#${link.targetId}`}
                             className="block uppercase p-4 tracking-tighter"
                             onClick={(e) => handleScroll(e, link.targetId)}>
                                {link.text}
                             </a>
                        ))
                    }
                </div>
            )
        }
    </nav>
    </>
  )
}
export default Navbar