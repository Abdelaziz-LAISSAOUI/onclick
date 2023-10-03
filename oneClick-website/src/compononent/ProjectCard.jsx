import { useState } from "react"


function ProjectCard({ image, name, description }) {

  const intialshow = (description.length > 190)
  const [show, setShow] = useState(intialshow)


  return (
    <div className="bg-white pt-2 px-2 mt-6 ">
      <img className="h-auto block mx-auto" src={image} alt="" />
      <div className="px-4 pt-4 pb-8">
        <h3 className="text-[#3EB397] font-bold text-lg">{name}</h3>
        <p className="mt-2 text-[#1D1D1D99] duration-700">{show ? `${description.substring(0, 190)}...` : description}</p>
        {show ?
          <button onClick={() => { setShow(false) }} className="mt-2 text-[#3EB397] font-bold ">See More</button> :
          intialshow ?
          <button onClick={() => { setShow(true) }} className="mt-2 text-[#3EB397] font-bold ">See Less</button>:
          null

        }
      </div>
    </div>
  )
}

export default ProjectCard