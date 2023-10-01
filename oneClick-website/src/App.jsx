import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import OurWork from "./pages/OurWork"
import Contact from "./pages/Contact"
import Navbar from "./compononent/Navbar"
import Splash from "./pages/Splash"
import { useEffect, useState } from "react"

function App() {
  const [loading, setLoading] = useState(true)
  const [toggoleNav, setToggoleNav] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, []);

  return (
    <>

      {
        loading ? <Splash /> :
          (<>
            <Navbar toggole={toggoleNav} setToggole={setToggoleNav} />
            <div className="bg-slate-200" onClick={() => { setToggoleNav(false) }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/our_work" element={<OurWork />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="*" element /> */}
              </Routes>
            </div>
          </>)
      }
    </>
  );

}
export default App
