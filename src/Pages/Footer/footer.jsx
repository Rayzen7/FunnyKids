import React from 'react'

const Footer = () => {
  return (
    <div className='h-[120vh] translate-y-[100%] bg-black w-full lg:h-[60vh] text-white flex flex-col justify-between relative lg:translate-y-[0]'>
        <div className='space-y-10 flex-col px-4 justify-center text-center items-center flex lg:items-start lg:justify-between pt-24 lg:px-16 flex-wrap lg:flex-row lg:text-start lg:space-y-0'>
            <div className='space-y-2'>
                <h1 className='font-righteous text-[20px]'>Tentang Kami</h1>
                <p className='w-[250px] text-liNavbar text-[14px]'>Kami adalah siswa dan siswi dari SMK Negeri Mandiri 26 Jakarta. </p>
                <div className='pt-4 flex flex-row space-x-3 text-[20px] lg:pt-8 cursor-pointer justify-center lg:justify-normal'>
                    <i className='bx bxl-twitter bg-iconBG p-2 rounded-3xl'></i>
                    <i className='bx bxl-facebook-circle bg-iconBG p-2 rounded-3xl'></i>
                    <i className='bx bxl-instagram bg-iconBG p-2 rounded-3xl' style={{color: "#ffffff"}}></i>
                    <i className='bx bxl-linkedin bg-iconBG p-2 rounded-3xl' style={{color: "#ffffff"}}></i>
                </div>
            </div>
            <div className='space-y-2'>
                <h1 className='font-righteous text-[20px]'>Layanan Kami</h1>
                <p className='text-liNavbar text-[14px]'>Materi interaktif</p>
            </div>
            <div className='space-y-2'>
                <h1 className='font-righteous text-[20px]'>Halaman Website</h1>
                <p className='text-liNavbar text-[14px]'>beranda</p>
                <p className='text-liNavbar text-[14px]'>Tentang Kami</p>
                <p className='text-liNavbar text-[14px]'>Program</p>
                <p className='text-liNavbar text-[14px]'>Belajar</p>
                <p className='text-liNavbar text-[14px]'>Testimoni</p>
            </div>
            <div className='space-y-2'>
                <h1 className='font-righteous text-[20px]'>Kirim Kami</h1>
                <p className='w-[300px] text-liNavbar text-[14px]'>Aplications prodize before front end ortals visualize front end</p>
                <div className='flex flex-col space-y-3  pt-8 lg:pt-0'>
                    <input type="email" className='text-liNavbar outline-none px-2 py-2 bg-black border-iconBG border-[1px] text-[14px]' placeholder='Your Email'/>
                    <button type='submit' className='bg-btnSubmit py-1 text-black font-bold'>Kirim</button>
                </div>
            </div>
        </div>
        <p className='text-center text-liNavbar text-[12px] lg:text-[14px] lg:-translate-y-2 -translate-y-8'>@copyright 2024 all right reserved by <br className='lg:hidden block'/> SMK NEGERI MANDIRI 26 JAKARTA</p>
    </div>
  )
}

export default Footer