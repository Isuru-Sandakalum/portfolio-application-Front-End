import React from 'react'

function Contacts() {
    return (
        <div id='contact' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className=' py-4 text-4xl font-bold text-center text-[#016A70]'>Contacts</h1>
            <form action="https://getform.io/f/051371dc-08b8-4d94-bafb-5983ed0b0285"  method='POST' encType='multipart/form-data' >
                <div className=' grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className=' uppercase text-sm py-2 font-semibold' >Name</label>
                        <input className=' border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name'></input>
                    </div>

                    <div className=' flex flex-col'>
                        <label className=' uppercase text-sm py-2 font-semibold'>Phone Number</label>
                        <input className=' border-2 rounded-lg p-3 flex border-gray-300 w-full' type='text' name='phone'></input>
                    </div>

                </div>

                <div className=' flex flex-col py-2'>
                    <label className=' uppercase text-sm py-2 font-semibold'>E-Mail</label>
                    <input className=' border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email'></input>
                </div>
                <div className=' flex flex-col py-2'>
                    <label className=' uppercase text-sm py-2 font-semibold'>Subject</label>
                    <input className=' border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject'></input>
                </div>
                <div className=' flex flex-col py-2'>
                    <label className=' uppercase text-sm py-2 font-semibold'>Message</label>
                    <textarea className=' border-2 rounded-lg p-3 flex border-gray-300' rows={10} name='message'></textarea>
                </div>

                <button className=' p-4 mt-2 bg-[#D67BFF] border-2  w-full rounded-sm bg-transparent border-[#D67BFF] hover:bg-[#D67BFF] hover:text-[white] font-semibold '>Submit</button>

            </form>
        </div>
    )
}

export default Contacts
