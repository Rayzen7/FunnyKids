import React from 'react';
import sky from '../../assets/Img/About/Sky.png'; 
import child from '../../assets/Img/About/child.png';
import grass from '../../assets/Img/About/Grass.png';

const About = () => {
  return (
    <div className="relative lg:-mt-72 font-poppins">
      <img src={sky} alt="" />
      <div className='h-[70vh] bg-aboutBG w-full lg:h-[110vh]'>
        <div className='flex items-center justify-center gap-10 flex-wrap' id='tentangkami'>
            <img src={child} alt="" className='w-[250px] lg:w-[450px]'/>
            <div className='-mt-10 text-center lg:text-left lg:-mt-28'>
                <h1 className='mb-2 text-[32px] lg:text-[40px] font-semibold lg:mb-0'>Tentang Kami</h1>
                <p className='px-3 text-[13px] font-normal lg:w-[580px] lg:text-[17px] lg:px-0'>Pengalaman belajar yang menyenangkan untuk anak-anak Anda, di mana kami fokus pada 
                langkah awal untuk mengenal dunia yang luar biasa dengan pembelajaran dasar yang tidak kalah luar biasa. Kami memiliki banyak program menarik lainnya untuk anak-anak Anda bermain dan membuat kartu memori.</p>
            </div>
        </div>
      </div>
      <img src={grass} alt="" className='lg:-mt-72 -mt-24'/>
    </div>
  );
};

export default About;
