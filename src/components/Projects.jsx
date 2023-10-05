import React from 'react'
import ProjectItems from './ProjectItems'
import Fitness from "../assets/Fitness.png"
import Elearning from "../assets/Elearning.png"
import Movie from "../assets/Movie.png"
import Travel from "../assets/Travel.png"


function Projects() {
  return (
    <div id='projects' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className=' text-4xl font-bold text-center text-[#016A70]'> Projects </h1>
      <p className=' text-center py-8'>
      In this business class, student teams are asked to prepare a mock training workshop to 
      educate people on business customs for a particular country. In this semester long project, 
      student teams choose a country of interest, find web and other resources about business cultural practices, 
      and put together a presentation for the rest of the class in the form of a training workshop.
      </p>
      <div className=' grid sm:grid-cols-2 gap-12'>
        <ProjectItems img={Fitness} title='Fitness Web Application'/>
        <ProjectItems img={Elearning} title='E-learning Web Application'/>
        <ProjectItems img={Movie} title='Movie web Application'/>
        <ProjectItems img={Travel} title='Traval Application'/>
      </div>
    </div>
  )
}

export default Projects
