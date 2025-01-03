import React from 'react'
import telegram from '../assets/telegram.webp';
import x from '../assets/x.png';
import footershape1 from '../assets/footershape1.svg';
import whitepaper from '../assets/whitepaper.pdf';



export default function Footer() {
  return (

    <footer className=' dark:text-white-100 text-blue-50 lg:px-20 px-5 py-3 container mx-auto relative z-10'>

      <div className="flex flex-wrap lg:justify-center lg:gap-44 md:gap-20 gap-6 items-start lg:py-12">

        <div className="">
          <h3 className='text-3xl font-libre font-bold'>Neonverse</h3>
          <p className='py-6  dark:text-white-50 text-blue-50'>
            Experience the next generation<br></br>
            of Security and Privacy.
          </p>
        </div>

        <div>
          <h5 className='font-libre uppercase font-bold text-lg pb-5'>Home</h5>
          <ul className=' dark:text-white-50 text-blue-50'>
            <a href='#about' className='mt-2'><li>About Us</li></a>
            <a href='#features' className='mt-2'><li>Features</li></a>
            <a href='#projects' className='mt-2'><li>Our Projects</li></a>
            <a href={whitepaper} target='_blank' rel='noopener noreferrer'>
              <li>Whitepaper</li>
            </a>
          </ul>
        </div>

        <div className='space-y-3'>
          <div className='flex items-center gap-x-5'>
            <a href='https://t.me/neonverse_official' className=''>
              <img src={telegram} alt='telegram' className='w-10 rounded-full hover:scale-125 duration-300'></img>
            </a>
            <a href='https://x.com/neonverseX' className=''>
              <img src={x} alt='X' className='w-10 rounded-full hover:scale-125 duration-300'></img>
            </a>
          </div>
          <p className='dark:text-white-50 text-blue-50'>Email: hello@neonverse.fun</p>
          <p className='dark:text-white-50 text-blue-50'> © Neonverse - All Rights Reserved.</p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 -z-10">
        <img src={footershape1} alt="shape" />
      </div>
    </footer>

  )
}
