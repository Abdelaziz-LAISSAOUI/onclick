import { Link } from "react-router-dom"
import logo from "../assets/navLogo.svg"
import Button from "./Button"

function Navbar({ toggole, setToggole, location }) {


  return (
    <nav className="flex p-3 bg-[#081A1E] justify-between items-center sticky top-0 z-50 ">
      <Link to={'/'} ><img src={logo} className="w-20" alt="One CLick logo" /></Link> 
      <span onClick={() => { setToggole(!toggole); }} className=" w-8 h-5 flex flex-col justify-between">
        <span className={`w-full h-1 bg-white rounded-sm duration-300 ${toggole && "-rotate-[135deg] translate-y-2" }`}   ></span>
        <span className={`w-full h-1 bg-white rounded-sm duration-300 ${toggole && "-rotate-45 -translate-y-2" }`}   ></span>
      </span>
      {toggole &&
        <div className="absolute top-[100%] right-3 bg-[#328773] text-center py-4 px-6 text-white font-medium">
          <ul className="mb-4">
            <li className={`mb-2 ${location === '/' && 'underline'}`}><Link to={"/"}>Home</Link></li>
            <li className={`${location === '/our_work' && 'underline'}`}><Link to={"/our_work"}>Our Work</Link></li>
          </ul>
          <Link to={"/contact"} >
            <Button white content={"Contact Us"} />
          </Link>
        </div>}
    </nav>
  )
}

export default Navbar