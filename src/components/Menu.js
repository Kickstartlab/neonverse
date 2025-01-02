import React, { useState } from 'react'

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
          <h1 className='text-3xl font-libre font-bold text-white-100'>
            Neonverse
          </h1>
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-x-12 pt-4 items-center text-white-100">
            <li><a href="/" className="">Home</a></li>
            <li><a href="#projects" className="text-white-50 hover:text-white-100">Our Projects</a></li>
            <li><a href="#tokenomics" className="text-white-50 hover:text-white-100">Tokenomics</a></li>
            <li><a href="#roadmap" className="text-white-50 hover:text-white-100">Roadmap</a></li>
          </ul>
        </nav>

        <div>
          <button onClick={() => setShow(!show)} className="bg-gradient rounded-lg py-3 lg:px-6 px-4 font-semibold text-white-100">
            Buy Now
          </button>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between py-6 font-montserat">
        <a href="/" className="">
          <p className='text-2xl font-libre font-bold text-white-100'>
            Neonverse
          </p>
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
              <p className='text-2xl font-libre font-bold text-white-100'>
                Neonverse
              </p>
            </a>
            <i className="fa fa-times text-2xl"></i>
          </div>

          <div className="sd-body mt-12">
            <ul className='space-y-12'>
              <a onClick={ToggleSidebar} href="/"><li className='pt-6'>Home</li></a>
              <a onClick={ToggleSidebar} href="#projects"><li className='pt-6'>Our Projects</li></a>
              <a onClick={ToggleSidebar} href="#tokenomics"><li className='pt-6'>Tokenomics</li></a>
              <a onClick={ToggleSidebar} href="#roadmap"><li className='pt-6'>Roadmap</li></a>

              <button onClick={() => setShow(!show)} className="bg-gradient rounded-lg p-3 w-full text-white-100 text-center">
                Buy Now
              </button>
            </ul>
          </div>

        </div>
      </div>


      <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>



    </header >
  )
}
