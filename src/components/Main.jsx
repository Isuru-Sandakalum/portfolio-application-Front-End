import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation'

function Main() {
  return (
    <div id='main'>
      <img className=' w-full h-screen object-cover object-left scale-x-[-1]' src='src/assets/6.jpg'></img>
      <div className=' w-full h-screen absolute top-0 left-0 bg-black/50'>
      <div className=' max-w-[700px] m-auto h-full flex flex-col  justify-center lg:items-start items-center'>
        <h1 className=' sm:text-5xl text-4xl font-bold text-white'>Hello! Welcome</h1>
        <h2 className=' flex sm:text-3xl text-2xl pt-4 text-white'>I am a
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer...',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Mobile Developer...',
        2000,
        'UX/UI Engineer...',
        2000,
        'IT Manager..',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block',paddingLeft:'5px'}}
      repeat={Infinity}
    />

        </h2>
        <diV className=' flex justify-between pt-6 max-w-[200px] w-full'>
          <BsFacebook className=' cursor-pointer text-white hover:text-[#D67BFF] hover:scale-110' size={25} ></BsFacebook>
          <BsInstagram className=' cursor-pointer text-white hover:text-[#D67BFF] hover:scale-110' size={25}></BsInstagram>
          <BsLinkedin className=' cursor-pointer text-white hover:text-[#D67BFF] hover:scale-110' size={25}></BsLinkedin>
        </diV>

        <button className=' bg-transparent/50 text-[white] font-semibold border-[white] hover:text-[#D67BFF] hover:border-[#D67BFF] py-2 px-4 border rounded-sm mt-4 hover:bg-transparent/50'>Hire Me</button>
      </div>

      </div>
    </div>

    
  )
}

export default Main
