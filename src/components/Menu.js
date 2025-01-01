import React, { useState } from 'react'
import logo from '../assets/logo.png';
import platform1 from '../assets/platform1.png';
import platform2 from '../assets/platform2.png';
import platform3 from '../assets/platform3.png';
import platform4 from '../assets/platform4.png';

export default function Menu() {

  const [isOpen, setIsopen] = useState(false);
  const [show, setShow] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }


  return (

    <header>

      <div className="lg:flex hidden items-center justify-between font-inter h-28">
        <a href="/" className="">
          <img src={logo} alt="Logo" />
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-10 pt-4 items-center text-white-100">
            <li><a href="/" className="">Home</a></li>
            <li><a href="#about" className="text-white-50 hover:text-white-100">About</a></li>
            <li><a href="#tokenomics" className="text-white-50 hover:text-white-100">Tokenomics</a></li>
            <li><a href="#features" className="text-white-50 hover:text-white-100">Features</a></li>
            <li><a href="#community" className='text-white-50 hover:text-white-100'>Community</a></li>
          </ul>

          <div className='border-b pt-6 line-gradient'>
          </div>
        </nav>

        <div>
          <button onClick={() => setShow(!show)} className="bg-gradient rounded-lg py-3 lg:px-6 px-4 font-semibold text-white-100">
            Join the world of advantages
          </button>

          {show ?
            <div className='border-4 border-white-100 bg-blue-100 px-6 py-8 rounded-2xl text-white-100 font-urbanist transition-all duration-300 absolute -translate-x-4 top-24 z-20'>
              <p className='text-lg text-center mb-8'>
                We are listed on
                these platforms
              </p>

              <div className='space-y-5 flex flex-col'>
                <div className='flex items-center gap-6'>
                  <img src={platform1} alt='' className='w-10'></img>
                  <p className='capitalize text-xl font-semibold'>toobit</p>
                </div>

                <div className='flex items-center gap-6'>
                  <img src={platform2} alt='' className='w-10'></img>
                  <p className='capitalize text-xl font-semibold'>Pancake swap</p>
                </div>

                <div className='flex items-center gap-6'>
                  <img src={platform3} alt='' className='w-10'></img>
                  <p className='capitalize text-xl font-semibold'>coinw</p>
                </div>

                <div className='flex items-center gap-6'>
                  <img src={platform4} alt='' className='w-10'></img>
                  <p className='capitalize text-xl font-semibold'>mexc</p>
                </div>
              </div>
            </div> : null
          }
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between py-6 font-montserat">
        <a href="/" className="">
          <img src={logo} alt="Logo" />
        </a>

        <button onClick={ToggleSidebar} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
        <div className='p-5'>
          <div className="flex items-center justify-between" onClick={ToggleSidebar}>

            <a href="/" className="mt-4">
              <img src={logo} alt="Logo" className='' />
            </a>
            <i className="fa fa-times text-2xl"></i>
          </div>

          <div className="sd-body mt-10">
            <ul>
              <a onClick={ToggleSidebar} href="/"><li className='p-3'>Home</li></a>
              <a onClick={ToggleSidebar} href="#about"><li className='p-3'>About</li></a>
              <a onClick={ToggleSidebar} href="#tokenomics"><li className='p-3'>Tokenomics</li></a>
              <a onClick={ToggleSidebar} href="#features"><li className='p-3'>Features</li></a>
              <a onClick={ToggleSidebar} href="#community"><li className='p-3'>Community</li></a>

              <div>

                <button onClick={() => setShow(!show)} className="bg-gradient rounded-lg p-3 text-white-100 text-xs text-left">
                  Join the world of advantages
                </button>

                {show ?
                  <div className='border-4 border-white-100 bg-blue-100 p-3 rounded-2xl text-white-100 font-urbanist transition-all duration-300 w-48 mt-3'>
                    <p className='text-center mb-5'>
                      We are listed on
                      these platforms
                    </p>

                    <div className='space-y-3 flex flex-col'>
                      <div className='flex items-center gap-3'>
                        <img src={platform1} alt='' className='w-8'></img>
                        <p className='capitalize font-medium'>toobit</p>
                      </div>

                      <div className='flex items-center gap-3'>
                        <img src={platform2} alt='' className='w-8'></img>
                        <p className='capitalize font-medium'>Pancake swap</p>
                      </div>

                      <div className='flex items-center gap-3'>
                        <img src={platform3} alt='' className='w-8'></img>
                        <p className='capitalize font-medium'>coinw</p>
                      </div>

                      <div className='flex items-center gap-3'>
                        <img src={platform4} alt='' className='w-8'></img>
                        <p className='capitalize font-medium'>mexc</p>
                      </div>
                    </div>
                  </div>
                  : null
                }
              </div>
            </ul>
          </div>

        </div>
      </div>


      <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>



    </header >
  )
}
