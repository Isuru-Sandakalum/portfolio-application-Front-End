import React,{useState} from 'react'
import{AiOutlineMenu,AiOutlineHome,AiOutlineMail,AiOutlineProject} from'react-icons/ai'
import{GrProjects} from 'react-icons/gr'
import{BsPerson} from'react-icons/bs'

function Sidenav() {
  const [nav,setNav] = useState(false);
  const handleNave = ()=>{
    setNav(!nav);
  }
  return (
    <div>
      <AiOutlineMenu onClick={handleNave} className='absolute top-4 right-4 z-[99] md:hidden text-white'/>
      {
        nav ?(
          <div className=' fixed w-full h-screen p-10  pt-20 bg-black/80 flex-col justify-center items-center z-[20]'>
            <a onClick={handleNave} href='#main' className=' w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 ml-10 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size ={20}/>
              <span className=' pl-4'>Home</span>
            </a>

            <a onClick={handleNave} href='#work' className=' w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 ml-10 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <GrProjects size ={20}/>
              <span className=' pl-4'>Work</span>
            </a>

            <a onClick={handleNave} href='#projects' className=' w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 ml-10 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject size ={20}/>
              <span className=' pl-4'>Project</span>
            </a>

            <a onClick={handleNave} href='#main' className=' w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-4 ml-10 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson size ={20}/>
              <span className=' pl-4'>Resume</span>
            </a>

            <a onClick={handleNave} href='#contacts' className=' w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 ml-10 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size ={20}/>
              <span className=' pl-4'>Contact</span>
            </a>

          </div>
        )
        :(
          <div></div>
        )
      }
      <div className='md:block hidden fixed top-40 z-10'> 
        <div className=' flex flex-col'>
          <a href='#main' className=' rounded-full shadow-lg bg-gray-100 shadow-purple-400 m-2 ml-10  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineHome/>
          </a>
        </div>

        <div className=' flex flex-col'>
          <a href='#work' className=' rounded-full shadow-lg bg-gray-100 shadow-purple-400 m-2 ml-10  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <GrProjects/>
          </a>
        </div>

        <div className=' flex flex-col'>
          <a href='#projects' className=' rounded-full shadow-lg bg-gray-100 shadow-purple-400 m-2 ml-10  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineProject/>
          </a>
        </div>

        <div className=' flex flex-col'>
          <a href='#main' className=' rounded-full shadow-lg bg-gray-100 shadow-purple-400 m-2 ml-10  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <BsPerson/>
          </a>
        </div>

        <div className=' flex flex-col'>
          <a href='#contact' className=' rounded-full shadow-lg bg-gray-100 shadow-purple-400 m-2 ml-10  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidenav
