import React from 'react'
import telegram from '../assets/telegram.webp';
import x from '../assets/x.png';
import footershape1 from '../assets/footershape1.svg';



export default function Footer() {
  return (

    <footer className='text-white-100 lg:px-20 px-5 container mx-auto relative z-10'>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 justify-between gap-6 items-start lg:py-12">

        <div className="col-span-2">
          <h3 className='text-3xl font-libre font-bold'>Neonverse</h3>
          <p className='py-6 text-white-50'>
            Experience the next generation<br></br>
            of Security and Privacy.
          </p>
        </div>

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

        <div className=''>
          <div className='flex items-center gap-x-5'>
            <a href='/' className='p-2 bg-white-100 rounded-full'>
              <img src={telegram} alt='telegram' className='w-10 rounded-full hover:scale-125 duration-300'></img>
            </a>
            <a href='/' className='p-2 bg-white-100 rounded-full'>
              <img src={x} alt='X' className='w-10 rounded-full hover:scale-125 duration-300'></img>
            </a>
          </div>
          <p className='pt-12 pb-6 text-white-50'> © Neonverse - All Rights Reserved.</p>
        </div>
      </div>

      <div class="absolute bottom-0 right-0 -z-10">
        <img src={footershape1} alt="shape" />
      </div>
    </footer>

  )
}
