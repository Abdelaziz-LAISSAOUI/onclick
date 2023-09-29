import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex bg-red-300 justify-between">
      <img src="" alt="One CLick logo" />
      <ul className="flex gap-5">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/our_work"}>Our Work</Link></li>
      </ul>
      <Link  to={"/contact"}>
        <button> Contact Us</button>
      </Link>
    </nav>
  )
}

export default Navbar