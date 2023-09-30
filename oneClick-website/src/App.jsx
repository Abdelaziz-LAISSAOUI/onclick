import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import OurWork from "./pages/OurWork"
import Contact from "./pages/Contact"
import Navbar from "./compononent/Navbar"
import Splash from "./pages/Splash"
import { useEffect, useState } from "react"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 5500)
  }, []);

  return (
    <>

      {
        loading ? <Splash/> :
        (<>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our_work" element={<OurWork />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element /> */}
          </Routes>
        </>)
      }
    </>
  );

}
export default App
