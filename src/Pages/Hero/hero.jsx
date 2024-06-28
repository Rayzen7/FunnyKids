import React from 'react'
import Picture from '../../assets/Img/Hero/pictures.png'

const Hero = () => {
  return (
    <div className='flex-col-reverse font-poppins text-center text-white flex lg:flex-col pt-32 relative z-10' id='beranda'>
        <div>
            <h1 className='text-[25px] px-3 
            lg:text-[36px] font-extrabold lg:px-0'>Belajar Menyenangkan Untuk Anak-Anak</h1>
            <h1 className='text-[15px] mt-3 px-2
            lg:mt-6 lg:text-[17px] font-medium lg:px-0'>Kami menawarkan Layanan Pendidikan Anak berkualitas tinggi untuk <br className='lg:block md:hidden'/> anak-anak anda, hubungi kami atau kunjungi kami untuk informasi lebih lanjut.</h1>
        </div>
        <img src={Picture} alt="" className='w-[300px] -mt-7 mb-6 lg:w-[1100px] mx-auto lg:-mt-5 lg:mb-0'/>
    </div>
  )
}

export default Hero