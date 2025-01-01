import React from 'react'
import telegram from '../assets/telegram.webp';
import x from '../assets/x.png';
import footershape1 from '../assets/footershape1.svg';



export default function Footer() {
  return (

    <footer className='text-white-100 lg:px-20 px-5 container mx-auto font-inter relative z-10'>

      <div className="lg:flex block justify-between items-center gap-x-44 lg:py-20 lg:space-y-0 space-y-8">

        <div data-aos="fade-right" className="lg:w-1/3 w-full">

         <h3 className='text-3xl font-libre font-bold'>Neonverse</h3>

          <p className='py-6 text-white-50'>
            Experience the next generation<br></br>
            of Security and Privacy.
          </p>
        </div>

        <div data-aos="fade-left" className="lg:w-1/3 w-full flex items-start justify-center gap-x-44">
          <div>
            <h5 className='font-libre uppercase font-semibold pb-5'>Home</h5>
            <ul className='text-white-50 space-y-4'>
              <li>Features</li>
              <li>Our Story</li>
              <li>Tokenomics</li>
            </ul>
          </div>

          <div>
            <h5 className='font-libre uppercase font-semibold pb-5'>Legals</h5>
            <ul className='text-white-50 space-y-4'>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Value Proposition</li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>

      </div>

      <div className='flex flex-wrap justify-between items-center'>
        <p className='pt-12 pb-6 text-white-50 capitalize'> © Neonverse - All Rights Reserved.</p>

        <div className='flex items-center gap-x-5 justify-center md:mx-0 mx-auto lg:pt-0 pt-4'>
          <a href='/' className='p-2 bg-white-100 rounded-full'>
            <img src={telegram} alt='telegram' className='w-10 rounded-full hover:scale-125 duration-300'></img>
          </a>
          <a href='/' className='p-2 bg-white-100 rounded-full'>
            <img src={x} alt='X' className='w-10 rounded-full hover:scale-125 duration-300'></img>
          </a>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 -z-10">
      <img src={footershape1} alt="shape" />
    </div>
    </footer>

  )
}
