import React from 'react'
import Test from '../../assets/Database/Testimonials.js';

const Testimonials = () => {
  return (
    <div className='bg-webBG w-full h-[140vh] pt-14 font-poppins'>
        <div className='px-4 lg:px-24'>
            <h1 className='text-center text-[38px] lg:text-[52px] font-medium text-testimoni lg:text-left' id='testimoni'>Testimoni</h1>
            <p className='m:0 text-[17px] text-center lg:text-[25px] font-normal text-testimoni lg:ml-1 lg:-mt-2 lg:text-left'>Dengarlah Testimoni dari  Beberapa Orang Tua !</p>
        </div>
        <div className='flex justify-center items-center flex-row'>
            <div className='space-x-0 flex lg:space-x-8 flex-wrap flex-col lg:flex-row'>
                { Test.map((item, i) => (
                    <div key={i} className='flex items-start flex-col justify-start mx-auto lg:mx-0 space-y-6'>
                        <div className='bg-testColBG w-[290px] lg:w-[370px] h-[440px] pt-8 mt-10 rounded-xl text-[14px] text-testimoni font-semibold'>
                            <p className='px-7 w-[300px] mx-auto pt-4 lg:px-0'>{item.text}</p>
                            <p className='px-7 w-[300px] mx-auto pt-4 lg:px-0'>{item.text2}</p>
                            <p className='px-7 w-[300px] mx-auto pt-4 lg:px-0'>{item.text3}</p>
                        </div>
                        <div className='flex space-x-3 items-center'>
                            <img src={item.image} alt="" className='w-[60px]'/>
                            <div className='text-testimoni'>
                                <h1 className='font-bold text-[22px]'>{item.name}</h1>
                                <p className='-mt-2'>{item.deskripsi}</p>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    </div>
  )
}

export default Testimonials