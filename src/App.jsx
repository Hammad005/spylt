import gsap from 'gsap'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import { ScrollTrigger } from 'gsap/all'
import MessageSection from './sections/MessageSection';
import FlavorSection from './sections/FlavorSection';

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <MessageSection/>
      <FlavorSection/>
      <div className="h-screen"></div>
    </main>
  )
}

export default App