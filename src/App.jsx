import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './assets/components/LoadingScreen';
import "./index.css"
import { Navbar } from './assets/components/Navbar';
import { MobileMenu } from './assets/components/MobileMenu';
import { Home } from './assets/components/containers/Home';
import { About } from './assets/components/containers/About';
import { Projects } from './assets/components/containers/Projects';
import { Contact } from './assets/components/containers/Contact';


function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity durantion-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>)
}

export default App
