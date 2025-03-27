import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center relative overflow-hidden mx-auto py-10 md:py-o'>
      <div className='p-4 relative z-10 w-full text-center' >
        <h1>Master the Art of Music</h1>
        <p>Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential</p>
           <div className='mt-4'>
            <Link href = {'/courses'}>
            Explore Courses</Link>
           </div>
      </div>
    </div>
  )
}

export default HeroSection