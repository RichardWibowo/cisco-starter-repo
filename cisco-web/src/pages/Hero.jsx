import React from 'react'

const Hero = () => {
    return (
        <div className='bg-gradient-to-r from-[#99ffce] to-white-500 '>
        <div className='text-black'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] md:text-5xl sm:text-4xl text-1l font-bold m:py-6'>
                    Welcome back 
                </p>  
                <h1 className= "md:text-7xl sm:text-6xl text-3xl font-bold m:py-6">
                    #IP address goes here 
                </h1>
                <div className= 'flex justify-center items-center'>
                    <p className='md:text-1xl sm:text-1xl text-1l font-bold py-4'>
                        one stop service for all your services
                    </p>
                </div>
                <div>
                <p className='md:text-m text-m font-bold text-gray-500'>
                    we provide all different kinds of information for your business 
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Hero;