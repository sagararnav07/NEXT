import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'

function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center relative overflow-hidden mx-auto py-10 md:py-o'>

    <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      
      <div className='p-4 relative z-10 w-full text-center' >
        <h1  className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
           Master the Art of Music</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential</p>
           <div className='mt-4'>
            <Link href = {'/courses'}>
            Explore Courses</Link>
           </div>
      </div>
    </div>
  )
}

export default HeroSection