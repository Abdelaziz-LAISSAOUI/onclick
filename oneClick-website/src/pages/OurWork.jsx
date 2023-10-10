import ProjectCard from "../compononent/ProjectCard"
// import { motion } from "framer-motion"
import image1 from "../assets/services/devlopment.jpeg"
import image2 from "../assets/services/editing.jpeg"
import image3 from "../assets/services/photography.jpeg"
import dots from "../assets/dots.svg"

function OurWork() {
  return (
    <>
      <div className="hero h-[50vh] text-center text-white p-3 ">
        <div className="home">
          <h2 className="font-bold text-lg mt-28">DIVE INTO THE DEPTHS OF <span className="text-[#50D3AE]">DIGITAL</span> BUISINESS</h2>
          <p className="opacity-75 text-sm mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae.</p>
        </div>
      </div>
      <div className="greenBg px-3 py-12 pb-20 relative overflow-hidden">
        <ProjectCard image={image1} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lore....Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lore....Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit LoreXXX'} name={"TikTok Logo"} />
        <ProjectCard image={image2} description={'Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorXXX'} name={"Instagram Logo"} />
        <ProjectCard image={image3} description={'Lorem ipsum dolor '} name={"TikTok Logo"} />
        <img src={dots} className="w-32 absolute -top-16 left-0 right-0 m-auto" alt="" />
        <img src={dots} className="w-32 absolute -bottom-14 -right-8 " alt="" />
      </div>
    </>
  )
}

export default OurWork