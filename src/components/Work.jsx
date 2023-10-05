import React from 'react'
import WorkItem from './WorkItems'

const data = [
    {
        year: 2020,
        title: 'Content creater',
        duration: '2 years',
        details : 
        "Analyzing existing programs for modification purposes. Researching and designing new software systems, websites, programs, and applications. Writing and implementing, clean, scalable code. Troubleshooting and debugging code. Verifying and deploying software systems."
    },
    {
        year: 2020,
        title: 'Content creater',
        duration: '2 years',
        details : 
        "Analyzing existing programs for modification purposes. Researching and designing new software systems, websites, programs, and applications. Writing and implementing, clean, scalable code. Troubleshooting and debugging code. Verifying and deploying software systems."
    },
    {
        year: 2020,
        title: 'Content creater',
        duration: '2 years',
        details : 
        "Analyzing existing programs for modification purposes. Researching and designing new software systems, websites, programs, and applications. Writing and implementing, clean, scalable code. Troubleshooting and debugging code. Verifying and deploying software systems."
    },
    {
        year: 2020,
        title: 'Content creater',
        duration: '2 years',
        details : 
        "Analyzing existing programs for modification purposes. Researching and designing new software systems, websites, programs, and applications. Writing and implementing, clean, scalable code. Troubleshooting and debugging code. Verifying and deploying software systems."
    },
    
]

function Work() {
  return (
    <div id='work' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className=' text-4xl font-bold text-center text-[#016A70]'>Work</h1>
        {data.map((item,idx)=> (
            <WorkItem 
            key= {idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details = {item.details}/>
        ))}
    </div>
  )
}

export default Work
