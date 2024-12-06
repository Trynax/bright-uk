import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import MeetBright from "./components/MeetBright"
import Partners from "./components/Partners"
import Speakers from "./components/Speakers"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BookCards from "./components/BookCards"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"
import Author from "./pages/Author"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Partners />
            <MeetBright />
            <Speakers />
            <BookCards />
            <Reviews />
            <Footer />
          </>
        } />
        <Route path="/author" element={<Author />} />
      </Routes>
    </Router>
  )
}

export default App
