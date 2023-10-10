import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import OurWork from "./pages/OurWork"
import Contact from "./pages/Contact"
import Navbar from "./compononent/Navbar"
import Splash from "./pages/Splash"
import { useEffect, useState } from "react"

function App() {
  const [loading, setLoading] = useState(true)
  const [toggoleNav, setToggoleNav] = useState(false)
  let location = useLocation();


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, []);

  useEffect(() => {
    setToggoleNav(false)
  }, [location]);


  return (
    <>

      {
        loading ? <Splash /> :
          (<>
            <Navbar toggole={toggoleNav} setToggole={setToggoleNav} location={location.pathname} />
            <div className="bg-slate-200" onClick={() => { setToggoleNav(false) }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/our_work" element={<OurWork />} />
                <Route path="/contact" element={<Contact />} />
                {/* TODO: add 404 element 
                <Route path="*" element /> 
                */}
              </Routes>
            </div>
          </>)
      }
    </>
  );

}
export default App
