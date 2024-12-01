import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import MeetBright from "./components/MeetBright"
import Partners from "./components/Partners"
import Speakers from "./components/Speakers"
import BookCards from "./components/BookCards"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <NavBar/> 
      <HeroSection/>   
      <Partners/>
      <MeetBright/>
      <Speakers/>
      <BookCards/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default App
