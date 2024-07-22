import About from "./components/About"
import Dishes from "./components/Dishes"
import Expertise from "./components/Expertise"
import HeroSection from "./components/HeroSection"
import Mission from "./components/Mission"
import Navbar from "./components/Navbar"


const App = () => {
  return (
   <main className="overflow-y-hidden text-neutral-200 antialiased">
    <HeroSection/>
    <Navbar/>
    <div className="bg-black px-0 md:px-10">
    <Dishes />
    <About />
    <Mission />
    <Expertise />
    </div>
   </main>
  )
}
export default App