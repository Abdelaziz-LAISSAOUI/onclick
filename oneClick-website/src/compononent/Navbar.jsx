import { Link } from "react-router-dom"
import logo from "../assets/navLogo.svg"
import Button from "./Button"

function Navbar({toggole, setToggole}) {


  // rotate-45 translate-y-4
  // -rotate-45 

  return (
    <nav className="flex relative p-3 bg-red-400 justify-between items-center">
      <img src={logo} className="w-20" alt="One CLick logo" />
      <span onClick={() => { setToggole(!toggole); console.log(toggole) }} className=" w-8 h-5 flex flex-col justify-between">
        <span className="w-full h-1 bg-black rounded-sm duration-300" ></span>
        <span className="w-full h-1 bg-black rounded-sm duration-300" ></span>
      </span>
      {toggole &&
        <div className="absolute top-[100%] right-3 bg-slate-500 text-center py-4 px-6 ">
          <ul className="mb-4">
            <li className="mb-2"><Link to={"/"}>Home</Link></li>
            <li><Link to={"/our_work"}>Our Work</Link></li>
          </ul>
          <Link to={"/contact"} >
            <Button content={"Contact Us"} />
          </Link>
        </div>}
    </nav>
  )
}

export default Navbar