import React from 'react'
import { ValueData, LearningData } from '../../assets/Database/ValueLearning.js'

const Value = () => {
  return (
    <div className='h-[220vh] pt-10 bg-value w-full lg:h-[170vh] lg:pt-5 font-poppins text-white'>
        {/* Value */}
        <h1 className='text-[28px] lg:text-[40px] text-center text-white font-bold' id='program'>OUR CORE VALUE</h1>
        <div className='mt-14 space-y-14 flex justify-around items-center lg:mt-16 flex-wrap lg:space-y-0'>
            { ValueData.map((item, i) => (
                <div key={i} className='space-y-6'>
                    <img src={item.image} alt="" className='w-[90px] lg:w-[120px] mx-auto'/>
                    <p className='font-medium text-[20px]'>{item.text}</p>
                </div>
            ))}
        </div>
        {/* Learning */}
        <div className='mt-20 lg:mt-28'>
            <h1 className='text-[35px] lg:text-[40px] text-center text-white font-bold' id='belajar'>Learning</h1>
            <div className='mt-10 flex justify-center space-x-0 space-y-10 items-center lg:mt-14 flex-wrap lg:space-x-16 lg:space-y-0 cursor-pointer'>
            { LearningData.map((item, i) => (
                <div key={i} className=''>
                    <img src={item.image} alt="" className='w-[200px] lg:w-[300px] mx-auto'/>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Value