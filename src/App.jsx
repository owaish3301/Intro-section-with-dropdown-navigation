import './App.css'
import MobileNavBar from './components/NavBar/MobileNavBar';
import HeroCard from './components/HeroSection/HeroCard';
import DesktopNavBar from './components/NavBar/DesktopNavBar';

function App() {
  const width = window.innerWidth;
  return (
    <main className='max-w-[100vw]'>
      {width <= 640 ? <MobileNavBar></MobileNavBar> : <DesktopNavBar></DesktopNavBar>}
      
      {/* hero section */}
      <HeroCard></HeroCard>
    </main>
  )
}

export default App;
