import React, { useState, useEffect } from 'react'
import logo from "../assets/logo.jpg"
import logo_light from "../assets/logo_light.png"
import whitepaper from '../assets/whitepaper.pdf';

export default function Menu() {

  const [isOpen, setIsopen] = useState(false);
  const [show, setShow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
    setIsSidebarOpen((prev) => !prev);
  }

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );


  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [isSticky, setIsSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <header>

      <div
        className={`lg:flex hidden items-center justify-between font-urbanist h-24 transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 w-full dark:bg-blue-200 bg-white-200 shadow-md z-50 px-20 h-[75px] backdrop-blur-md' : ''}`}>
        <a href="/" className="lg:w-2/12">
          <img src={logo} alt='logo' className={`w-20 rounded-full dark:block hidden ${isSticky ? 'w-12' : ''}`}></img>
          <img src={logo} alt='logo' className={`w-20 rounded-full dark:hidden block ${isSticky ? 'w-12' : ''}`}></img>
        </a>

        <nav className='w-6/12'>
          <ul className="text-md flex justify-center gap-x-10 pt-4 -mt-3 text-blue-50 dark:text-white-100">
            <li><a href="/" className="">Home</a></li>
            <li><a href="#about" className="dark:text-white-50 text-blue-50 dark:hover:text-white-100">About us</a></li>
            <li><a href="#features" className="dark:text-white-50 text-blue-50 dark:hover:text-white-100">Features</a></li>
            <li><a href="#projects" className="dark:text-white-50 text-blue-50 dark:hover:text-white-100">Our Projects</a></li>
            <li><a href="#roadmap" className="dark:text-white-50 text-blue-50 dark:hover:text-white-100">Roadmap</a></li>
          </ul>
        </nav>

        <div className='flex items-center gap-x-6'>

          <div className="flex justify-end items-center p-4">
            <div
              className="relative flex items-center w-20 h-10 bg-blue-100 rounded-full cursor-pointer"
              onClick={toggleTheme}
            >
              <span
                className={`absolute left-1 flex items-center justify-center w-8 h-8 rounded-full bg-white-100 dark:bg-blue-50 text-blue-50 dark:text-white-100 transition-transform ${theme === 'light' ? 'translate-x-0' : 'translate-x-10'
                  }`}
              >
                {theme === 'light' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m8-9h-1m-16 0H3m15.364-6.364l-.707.707m-12.02 12.02-.707.707M6.343 6.343l-.707-.707m12.02 12.02.707.707M17 12a5 5 0 11-10 0 5 5 0 0110 0z"
                    />
                  </svg>
                ) : (

                  <svg width="15" height="17" viewBox="0 0 13 15" stroke="currentColor" fill="#fff">
                    <path
                      d="M10.6111 12.855C11.591 12.1394 12.3151 11.1979 12.7723 10.1623C10.4824 10.4065 8.1342 9.46314 6.67948 7.47109C5.22476 5.47905 5.04093 2.95516 5.97054 0.848179C4.84491 0.968503 3.72768 1.37162 2.74781 2.08719C-0.224105 4.25747 -0.874706 8.43084 1.29558 11.4028C3.46586 14.3747 7.63923 15.0253 10.6111 12.855Z" />
                  </svg>
                )}
              </span>
            </div>
          </div>

          <a href={whitepaper} target='_blank' rel='noopener noreferrer'>
            <button className={`bg-gradient rounded-lg py-3 px-6 font-semibold text-white-100 ${isSticky ? 'py-2 px-5' : ''}`}>
              Whitepaper
            </button>
          </a>
        </div>
      </div>

      <div className={`lg:hidden flex items-center justify-between py-4 font-urbanist h-24 transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 w-full dark:bg-blue-200 bg-white-200 z-50 px-5 h-[75px] backdrop-blur-md' : ''}`}>
        <a href="/" className="">
          <img src={logo} alt='logo' className='w-14 rounded-full dark:block hidden'></img>
          <img src={logo} alt='logo' className='w-14 rounded-full dark:hidden block'></img>
        </a>

        <div className='flex items-center'>
          <div className="flex justify-end items-center p-4">
            <div
              className="relative flex items-center w-16 h-8 bg-blue-100 rounded-full cursor-pointer"
              onClick={toggleTheme}
            >
              <span
                className={`absolute left-1 flex items-center justify-center w-6 h-6 rounded-full bg-white-100 dark:bg-blue-50 text-blue-50 dark:text-white-100 transition-transform ${theme === 'light' ? 'translate-x-0' : 'translate-x-8'
                  }`}
              >
                {theme === 'light' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m8-9h-1m-16 0H3m15.364-6.364l-.707.707m-12.02 12.02-.707.707M6.343 6.343l-.707-.707m12.02 12.02.707.707M17 12a5 5 0 11-10 0 5 5 0 0110 0z"
                    />
                  </svg>
                ) : (

                  <svg width="11" height="13" viewBox="0 0 13 15" stroke="currentColor" fill="#fff">
                    <path
                      d="M10.6111 12.855C11.591 12.1394 12.3151 11.1979 12.7723 10.1623C10.4824 10.4065 8.1342 9.46314 6.67948 7.47109C5.22476 5.47905 5.04093 2.95516 5.97054 0.848179C4.84491 0.968503 3.72768 1.37162 2.74781 2.08719C-0.224105 4.25747 -0.874706 8.43084 1.29558 11.4028C3.46586 14.3747 7.63923 15.0253 10.6111 12.855Z" />
                  </svg>
                )}
              </span>
            </div>
          </div>

          <button onClick={ToggleSidebar} className="nav cursor-pointer">
            {isSidebarOpen ? (
              // Close (X) icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 dark:text-white-100 text-blue-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger menu icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 dark:text-white-100 text-blue-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

      </div>

      <div className={`sidebar ${isOpen === true ? 'active' : ''} dark:bg-blue-200 bg-white-200`}>
        <div className='p-6'>
          <ul onClick={ToggleSidebar} className='space-y-12'>
            <a href="/"><li className=''>Home</li></a>
            <a href="#about"><li className='pt-6'>About us</li></a>
            <a href="#features"><li className='pt-6'>Features</li></a>
            <a href="#projects"><li className='pt-6'>Our Projects</li></a>
            <a href="#roadmap"><li className='pt-6'>Roadmap</li></a>
            <a href={whitepaper} target='_blank' rel='noopener noreferrer'>
              <li className='pt-6'>Whitepaper</li>
            </a>
          </ul>
        </div>
      </div>


    </header >
  )
}
