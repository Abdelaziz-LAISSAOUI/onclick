import { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import Service from "../compononent/Service"
import oneLogo from "../assets/one.svg"
import logo from "../assets/navLogo.svg"
import Button from "../compononent/Button"
import dots from "../assets/dots.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"
import whatsapp from "../assets/whatsapp.svg"
import image1 from "../assets/services/devlopment.jpeg"
import image2 from "../assets/services/design.jpeg"
import image3 from "../assets/services/photography.jpeg"
import image4 from "../assets/services/editing.jpeg"
import image5 from "../assets/services/motion.jpeg"
import image6 from "../assets/services/voiceAct.jpeg"
import image7 from "../assets/services/socialMang.jpeg"
import image8 from "../assets/services/marketing2.jpg"



function Home() {

  const carouselRef = useRef()
  const hero = useRef()
  const about = useRef()
  const services = useRef()
  const keepInTouch = useRef()
  const array = [hero, about, services, keepInTouch]
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
  }, [])
  //phone always padding 3
  //-----------------------------


  const handleClick = (section) => {
    const i = array.indexOf(section) + 1
    const nextSection = array[i].current

    if (nextSection) {
      nextSection.firstChild.style.animationName = 'appear'
      nextSection.firstChild.style.animationDuration = '2s'
      nextSection.firstChild.style.animationFillMode = 'forwards'
      nextSection.firstChild.style.animationDelay = '1s'
      nextSection.style.transform = `translateY(${-100 * i}%)`;
    }
  };


  return (
    <div className="h-screen overflow-hidden">
      <section onClick={() => { handleClick(hero) }} id="hero" ref={hero} className="p-3 h-screen hero duration-300">
        <div className="home" >
          <img src={oneLogo} alt="one click logo" className="mx-auto mt-28" />
          <h1 className="text-center mt-10 text-white font-bold">
            DIVE INTO THE DEPTHS OF <span className="text-[#50D3AE]" >DIGITAL</span> BUSINESS
          </h1>
          <p className="text-center text-sm mt-6 text-[#FFFFFFBB] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae.
          </p>
          <div className="text-center mt-6">
            <Link to={'/contact'}> <Button content={"Get Started"} /> </Link>
          </div>
        </div>
      </section>

      <section onClick={() => { handleClick(about) }} ref={about} className="z-10 greenBg p-3 h-screen relative overflow-hidden duration-1000 ease-out ">
        <div className="container opacity-0">
          <h2 className="text-center mt-10 text-white font-bold">
            ABOUT <span className="text-[#50D3AE]">ONE CLICK</span>
          </h2>
          <img src={logo} alt="one click logo" className="mx-auto mt-16" />
          <p className="text-center text-sm mt-6 text-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. Suspendisse sagittis ultrices augue. Nulla pulvinar eleifend sem. Aliquam erat volutpat. Aenean placerat. Quisque tincidunt scelerisque libero. In dapibus augue non sapien. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Nulla est. Nullam sit amet magna in magna gravida vehicula. In enim a arcu imperdiet malesuada. Phasellus faucibus molestie nisl. Curabitur
          </p>
          <img src={dots} className="w-32 absolute -top-14 left-3" alt="" />
          <img src={dots} className="w-32 absolute right-3 -bottom-8" alt="" />
        </div>
      </section>
      <section onClick={() => { handleClick(services) }} ref={services} className="z-20 greenBg p-3 h-screen relative overflow-hidden duration-1000 ease-out">
        <div className="container opacity-0">
          <h2 className="text-center m-10 text-white font-bold">OUR <span className="text-[#50D3AE]">SERVICES</span></h2>
          <motion.div ref={carouselRef} className="overflow-hidden  cursor-grab ">
            <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className="flex relative h-[450px] ">
              <motion.div className="h-[390px] min-w-[336px] -translate-y-1  -ml-8" >
                <Service image={image1} service={'Development'} />
              </motion.div>
              <motion.div className="h-[390px] min-w-[336px] translate-y-14 -ml-8 " >
                <Service image={image2} service={'Design'} />
              </motion.div>
              <motion.div className="h-[390px] min-w-[336px] -translate-y-2  -ml-8" >
                <Service image={image3} service={'Photography'} />
              </motion.div>
              <motion.div className="h-[390px] min-w-[336px] translate-y-10 -ml-8" >
                <Service image={image4} service={'Video Editing'} />
              </motion.div>
              <motion.div className="h-[390px] min-w-[336px]  -ml-8" >
                <Service image={image5} service={'Motion Graphics'} />
              </motion.div>
              <motion.div className="h-[385px] min-w-[300px] -translate-y-3 -ml-8" >
                <Service image={image6} service={'Voice Acting'} />
              </motion.div>
              <motion.div className="h-[390px] min-w-[336px] translate-y-8 -ml-8" >
                <Service image={image7} service={'Socail Media'} />
              </motion.div>
              <motion.div className="h-[384px] min-w-[324px] translate-y-4 -ml-8" >
                <Service image={image8} service={'Digital Marketing'} />
              </motion.div>
            </motion.div>
          </motion.div>
          <img src={dots} className="w-32 absolute -top-16 left-8 " alt="" />
          <img src={dots} className="w-32 absolute -bottom-12 -right-12" alt="" />
        </div>
      </section>
      <section ref={keepInTouch} className="anime z-30 greenBg p-3 h-screen relative overflow-hidden duration-1000 ease-out">
        <div className="container opacity-0">
          <h2 className="text-center m-10 text-white font-bold">ARE YOU READY TO GROW YOUR BUSINESS</h2>
          <p className="text-center text-[#3EB397] font-bold">LET&apos;S KEEP IN TOUCH</p>
          <div className="mt-12 grid grid-cols-2 gap-y-16 justify-items-center">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={whatsapp} alt="" />
          </div>
          <img src={dots} className="w-32 absolute -top-16 left-8 " alt="" />
          <img src={dots} className="w-32 absolute bottom-24 -left-14" alt="" />
          <img src={dots} className="w-32 absolute bottom-6 -right-20" alt="" />
        </div>
      </section>
    </div>
  )
}

export default Home