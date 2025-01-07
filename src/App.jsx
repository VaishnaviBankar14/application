import About from "./Components/About"
import Comp1 from "./Components/comp1"
import Contact from "./Components/Contact"
import Explore from "./Components/Explore"
import Footer from "./Components/footer"
import Home from "./Components/home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recipes from "./Components/Recipes"
function App(){
  return(
  <>
<BrowserRouter>
    <Comp1/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Explore" element={<Explore/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Recipes" element={<Recipes/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>


  </>
  )
}
export default App
