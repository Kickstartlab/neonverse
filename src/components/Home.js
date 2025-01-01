import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import Difference from './Difference'
import b_1 from '../assets/b_1.svg';
import b_2 from '../assets/b_2.png';
import b_3 from '../assets/b_3.png';
import about from '../assets/about.png';
import feature_1 from '../assets/feature_1.gif';
import feature_2 from '../assets/feature_2.gif';
import feature_3 from '../assets/feature_3.gif';
import feature_4 from '../assets/feature_4.gif';
import token from '../assets/token.png';
import wallet from '../assets/wallet.png';
import google from '../assets/google.png';
import apple from '../assets/apple.png';
import video from '../assets/video.png';
import bar1 from '../assets/bar1.png';
import bar2 from '../assets/bar2.png';
import bar3 from '../assets/bar3.png';
import side from '../assets/side.png';
import side1 from '../assets/side1.png';
import ricon1 from '../assets/ricon1.png';
import ricon2 from '../assets/ricon2.png';
import heroshape1 from '../assets/heroshape1.svg';
import heroshape2 from '../assets/heroshape2.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    }, [])

    return (
        <div className="bg-black-50 font-inter overflow-hidden text-white-100">

            <img src={heroshape1} alt='' className='absolute left-0 top-0'></img>
            <img src={heroshape2} alt='' className='absolute right-0 top-0'></img>

            <div className='bg-color h-screen absolute left-0 right-0 top-0'>

            </div>

            <div className="lg:px-20 px-5 relative z-20">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="flex flex-col justify-center items-center gap-y-4 lg:py-28 py-12 text-center lg:w-9/12 mx-auto">

                        <p className='lg:py-3 lg:text-xl text-white-50'>
                            Welcome to Neonverse
                        </p>

                        <div className='space-y-3'>
                            <h1 data-aos='fade-up' className='md:text-6xl text-2xl font-libre font-bold text-white-100'>
                                Innovating the Future
                            </h1>

                            <h2 data-aos='fade-up' className='md:text-6xl text-2xl font-libre font-bold text-blue-100'>
                                of Digital Engagement
                            </h2>
                        </div>

                        <p className='py-5 flex mx-auto w-10/12 lg:leading-relaxed'>
                            Neonverse is a visionary ecosystem designed to offer a wide array of platforms, rewarding experiences, and sustainable solutions. From lotteries and token creation to entertainment and beyond, Neonverse aims to lead the way in digital innovation.
                        </p>

                        <div data-aos='zoom-in' className="flex items-center justify-center md:gap-12 gap-6 mx-auto mt-5">
                            <a href="/">
                                <button className="text-white-100 bg-gradient rounded-xl py-3 flex items-center justify-center gap-x-2 md:text-lg text-xs md:px-6 px-4 font-semibold">
                                    Get Started
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                            </a>

                            <a href="https://t.me/arbitrumclassic_arb" className=''>
                                <button className="text-white-100 font-semibold md:text-lg text-sm px-5 py-3 rounded-lg border-custom">
                                    join community
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <img src={side1} alt='' className='absolute right-0 -mt-44 w-full'></img>


            {/* about us section */}

            <div id='about' className="lg:px-20 px-5 lg:py-0 py-6 relative z-10">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-center items-center gap-x-12">

                        <div data-aos="fade-left" className="lg:w-1/2 w-full">

                            <h2 className='md:text-4xl text-3xl font-semibold tracking-wide text-white-100 capitalize'>
                                What is SolveX
                            </h2>

                            <p className='py-5 text-white-50 lg:w-9/12'>
                                Web3 has never been easier for the enterprise. Our suite of products delivers out-of-the-box blockchain applications with enterprise-grade security and scalability—cutting months off development timelines to deliver real business value on one.
                            </p>

                            <a href="/">
                                <button className="text-white-100 bg-gradient rounded-xl py-4 flex items-center gap-x-3 md:px-8 px-3 font-medium mt-5 capitalize">
                                    learn about ARB Classic
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                            </a>

                        </div>

                        <div data-aos="zoom-in" data-aos-delay="350" className=" md:mt-0 mt-12">
                            <img src={about} alt="Logo" className='w-10/12 lg:float-right sm:flex mx-auto' />
                        </div>

                    </div>

                    {/* features section */}

                    <div id='features' className='lg:-translate-y-12 lg:py-0 py-6'>

                        <div className='font-urbanist space-y-3'>
                            <p className='text-lg font-semibold flex items-center gap-x-2'>
                                <span>
                                    <svg width="62" height="4" viewBox="0 0 62 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="2.06888" x2="61.9862" y2="2.06888" stroke="white" stroke-width="2.21379" />
                                    </svg>
                                </span>
                                Our Features
                            </p>

                            <h3 className='md:text-5xl text-3xl font-semibold text-white-100'>
                                Top Features
                            </h3>
                        </div>

                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  justify-between items-start gap-8 py-16 font-urbanist">

                            <div className='space-y-4'>

                                <div className='p-12 pb-0 border-gradient flex flex-col mx-auto bg-feature-50'>
                                    <div className='bg-red-100 w-40 h-40 rounded-t-xl mx-auto'>
                                        <div data-aos='fade-down' className='bg-white-100 w-36 -mt-4 h-44 rounded-t-xl'>
                                            <img data-aos='fade-in' data-delay='400' src={feature_1} alt='features' className='w-32 flex mx-auto'></img>
                                        </div>
                                    </div>
                                </div>

                                <p className='md:text-xl text-lg font-semibold'>
                                    Solve X NFT Domain
                                </p>
                                <p className='text-white-50 text-sm'>
                                    Easily find a comprehensive range of topics including design, development, and more.
                                </p>
                            </div>

                            <div className='space-y-4'>

                                <div className='p-12 pb-0 border-gradient flex flex-col mx-auto bg-feature-100'>
                                    <div className='bg-yellow-100 w-40 h-40 rounded-t-xl mx-auto'>
                                        <div data-aos='fade-down' className='bg-white-100 w-36 -mt-4 h-44 rounded-t-xl'>
                                            <img data-aos='fade-in' data-delay='400' src={feature_2} alt='features' className='w-28 flex mx-auto'></img>
                                        </div>
                                    </div>
                                </div>

                                <p className='md:text-xl text-lg font-semibold'>
                                    Solve X Ai
                                </p>
                                <p className='text-white-50 text-sm'>
                                    Can find fields in finding the type of learning or course that suits you
                                </p>
                            </div>

                            <div className='space-y-4'>

                                <div className='p-12 pb-0 border-gradient flex flex-col mx-auto bg-feature-200'>
                                    <div className='bg-blue-50 w-40 h-40 rounded-t-xl mx-auto'>
                                        <div data-aos='fade-down' className='bg-white-100 w-36 -mt-4 h-44 rounded-t-xl'>
                                            <img data-aos='fade-in' data-delay='400' src={feature_3} alt='features' className='w-28 flex mx-auto'></img>
                                        </div>
                                    </div>
                                </div>

                                <p className='md:text-xl text-lg font-semibold'>
                                    Solve X Wallet
                                </p>
                                <p className='text-white-50 text-sm'>
                                    Easy to find learning that is interested and needed by many large companies
                                </p>
                            </div>

                            <div className='space-y-4'>

                                <div className='p-12 pb-0 border-gradient flex flex-col mx-auto bg-feature-300'>
                                    <div className='bg-blue-100 w-40 h-40 rounded-t-xl mx-auto'>
                                        <div data-aos='fade-down' className='bg-white-100 w-36 -mt-4 h-44 rounded-t-xl'>
                                            <img data-aos='fade-in' data-delay='400' src={feature_4} alt='features' className='w-32 flex mx-auto'></img>
                                        </div>
                                    </div>
                                </div>

                                <p className='md:text-xl text-lg font-semibold'>
                                    Solve X Hosting
                                </p>
                                <p className='text-white-50 text-sm'>
                                    Easy to find learning that is interested and needed by many large companies
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* What is a Solve X? */}

            <div className="lg:pb-20 py-5 container mx-auto font-urbanist relative z-10">

                <div className='bg-blue-100 md:p-16 p-6 rounded-r-xl lg:w-10/12'>

                    <div className='md:ml-32'>
                        <div className='space-y-2'>
                            <p className='text-lg font-semibold flex items-center gap-x-2'>
                                <span>
                                    <svg width="62" height="4" viewBox="0 0 62 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="2.06888" x2="61.9862" y2="2.06888" stroke="white" stroke-width="2.21379" />
                                    </svg>
                                </span>
                                Still not Sure?
                            </p>

                            <h3 className='md:text-5xl text-3xl font-semibold text-white-100'>
                                What is a Solve X?
                            </h3>
                        </div>

                        <p className='mt-8'>
                            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                        </p>
                    </div>

                    <div className='lg:flex mt-8'>
                        <div className='lg:w-7/12'>
                        </div>

                        <div className='lg:w-5/12 lg:space-y-12 space-y-6'>
                            <div className='flex items-center gap-x-6'>
                                <p className='lg:text-6xl text-2xl text-blue-50 font-semibold'>10+</p>
                                <p className='font-semibold'>Lorem Ipsum Dollar here</p>
                            </div>

                            <div className='flex items-center gap-x-6'>
                                <p className='lg:text-6xl text-2xl text-blue-50 font-semibold'>1000+</p>
                                <p className='font-semibold'>Lorem Ipsum Dollar here</p>
                            </div>

                            <div className='flex items-center gap-x-6'>
                                <p className='lg:text-6xl text-2xl text-blue-50 font-semibold'>50+</p>
                                <p className='font-semibold'>Lorem Ipsum Dollar here</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={video} alt='' className='lg:absolute lg:-mt-96 animate-float lg:ml-6 mt-6 lex mx-auto'></img>

            </div>


            <img src={side} alt='' className='absolute left-0 -mt-24'></img>

            {/* our token */}

            <div id='tokenomics' className="lg:px-20 px-5 font-urbanist lg:py-20 py-6 relative z-10">
                <div className='container mx-auto'>

                    <div className='lg:flex items-center justify-between gap-x-12'>

                        <div data-aos="fade-right" className='lg:w-1/2'>
                            <div className='space-y-3'>
                                <p className='text-lg font-semibold flex items-center gap-x-2'>
                                    <span>
                                        <svg width="62" height="4" viewBox="0 0 62 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="2.06888" x2="61.9862" y2="2.06888" stroke="white" stroke-width="2.21379" />
                                        </svg>
                                    </span>
                                    Our Token
                                </p>

                                <h3 className='md:text-5xl text-3xl font-semibold text-white-100'>
                                    What is SolveX Token?
                                </h3>
                            </div>

                            <p className='lg:leading-snug mt-8'>
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            </p>
                        </div>

                        <div data-aos="fade-up" className='lg:w-1/2'>
                            <img src={token} alt='token' className=''></img>
                        </div>
                    </div>

                    <div className='flex flex-col mx-auto w-11/12 bg-blue-100 rounded-2xl lg:p-12 p-5 text-center lg:-mt-24'>
                        <div data-aos="zoom-in" className="flex justify-center items-center lg:gap-44 gap-5  mx-auto">
                            <div className='space-y-2'>
                                <p className='md:text-xl text-sm'>
                                    Total Supply
                                </p>
                                <p className='md:text-4xl text-xl font-semibold font-libre'>
                                    12M
                                </p>
                            </div>

                            <div className='space-y-2'>
                                <p className='md:text-xl text-sm'>
                                    Locked
                                </p>
                                <p className='md:text-4xl text-xl font-semibold font-libre'>
                                    6M
                                </p>
                            </div>

                            <div className='space-y-2'>
                                <p className='md:text-xl text-sm'>
                                    Circulating
                                </p>
                                <p className='md:text-4xl text-xl font-semibold font-libre'>
                                    3M+
                                </p>
                            </div>
                        </div>

                        <p data-aos="fade-up" className='md:mt-16 mt-8'>
                            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,<br></br> dictum est a, mattis tellus
                        </p>
                    </div>


                </div>
            </div>

            <img src={side1} alt='' className='absolute right-0 -mt-44'></img>

            {/* What Makes us Different? section */}

            <div id="difference" className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto relative z-10"
            >
                <h3 data-aos='fade-right' className='md:text-5xl text-2xl font-libre font-semibold text-white-100'>
                    What Makes us Different?
                </h3>

                <div className='md:pt-20 py-8'>
                    <Difference />
                </div>


                <div className='lg:flex justify-between items-center lg:pt-20 py-12 lg:space-y-0 space-y-8'>

                    <div className='lg:w-1/3'>
                        <h3 data-aos='fade-right' className='md:text-5xl text-3xl lg:text-left text-center font-libre font-extrabold text-blue-100 lg:leading-relaxed lg:pb-0 pb-6'>
                            TOKEN
                            DISTRIBUTION
                        </h3>
                    </div>

                    <div className='flex items-center justify-center md:gap-16 gap-6'>

                        <div>
                            <img src={bar1} alt='' className=''></img>
                            <h4 data-aos='fade-up' className='md:text-3xl text-xl font-urbanist pt-3 font-semibold text-white-100 text-center'>
                                Locked
                            </h4>
                        </div>

                        <div>
                            <img src={bar2} alt='' className=''></img>
                            <h4 data-aos='fade-up' className='md:text-3xl text-xl font-urbanist pt-3 font-semibold text-white-100 text-center'>
                                Circulation
                            </h4>
                        </div>

                        <div>
                            <img src={bar3} alt='' className=''></img>
                            <h4 data-aos='fade-up' className='md:text-3xl text-xl font-urbanist pt-3 font-semibold text-white-100 text-center'>
                                Team
                            </h4>
                        </div>
                    </div>
                </div>

            </div>

            {/* roadmap */}

            <div id='roadmap' className="lg:px-20 px-5 lg:pt-20 py-5 relative z-10">
                <div className='container mx-auto'>

                    <div className=''>
                        <div data-aos='fade-right' className='flex items-center gap-x-3 pb-3'>
                            <svg width="68" height="2" viewBox="0 0 68 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="1" x2="67.1717" y2="1" stroke="#F8F9FF" strokeWidth="2" />
                            </svg>
                            Roadmap
                        </div>
                        <h3 data-aos='fade-right' className='md:text-5xl text-3xl font-libre font-semibold text-white-100'>
                            Our Roadmap
                        </h3>
                    </div>

                    {/* mobile version */}
                    <div className='lg:hidden block pt-8'>
                        <div className='flex flex-col gap-y-8'>

                            <div data-aos="fade-right" className='border-b-2'>
                                <p className='font-semibold text-xl pb-6'>Concept</p>

                                <ul className='pb-5 space-y-4'>
                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon2} alt='icon'></img></span>
                                        Concept Generation
                                    </li>
                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon2} alt='icon'></img></span>
                                        Team Assemble
                                    </li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <p className='font-semibold text-xl pb-6'>Research</p>

                                <ul className='pb-5 space-y-4'>
                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon1} alt='icon'></img></span>
                                        Proving the concept can work
                                    </li>

                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon2} alt='icon'></img></span>
                                        Strategic Plan
                                    </li>

                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon2} alt='icon'></img></span>
                                        White paper conpletion
                                    </li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <p className='font-semibold text-xl pb-6'>Design</p>

                                <ul className='pb-5 space-y-4'>
                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon1} alt='icon'></img></span>
                                        Platform design and technical de monstration
                                    </li>

                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon2} alt='icon'></img></span>
                                        Building the MVP
                                    </li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <p className='font-semibold text-xl pb-6'>Pre-Sale</p>

                                <ul className='pb-5 space-y-4'>
                                    <li className='flex gap-x-3'>
                                        <span><img src={ricon1} alt='icon'></img></span>
                                        Public financing & Seed funding raised
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* desktop version */}

                    <div className='lg:my-16 my-6 lg:block hidden'>

                        <div className='translate-y-44 h-1.5 bg-blue-100'>
                        </div>

                        <div className='flex items-center justify-center gap-5'>

                            <div id='node_1' className='flex items-end gap-x-0 translate-y-40 -mt-2'>

                                <div className='-translate-y-8 flex flex-col items-center justify-center'>
                                    <h4 className='text-2xl font-semibold text-center'>2024 <span className='text-blue-100'>Q1</span>
                                    </h4>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#1877F2" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#1877F2" />
                                    </svg>

                                    <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#1877F2" strokeWidth="0.924575" />
                                    </svg>

                                </div>

                                <div className='-translate-y-12 -translate-x-6'>
                                    <p className='font-semibold text-xl mb-5'>Concept</p>
                                    <ul className='space-y-3'>
                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon2} alt='icon'></img></span>
                                            Concept Generation
                                        </li>
                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon2} alt='icon'></img></span>
                                            Team Assemble
                                        </li>
                                    </ul>

                                </div>



                            </div>

                            <div data-aos='fade-down' id='node_2' className='flex items-end gap-x-0 -mt-8'>
                                <div className='flex flex-col items-center justify-center'>
                                    <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#1877F2" strokeWidth="0.924575" />
                                    </svg>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#1877F2" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#1877F2" />
                                    </svg>

                                    <h4 className='text-2xl font-semibold'>2023 <span className='text-blue-100'>Q2</span></h4>
                                </div>

                                <div className='-translate-y-20 '>
                                    <p className='font-semibold text-xl mb-5'>Concept</p>
                                    <ul className='space-y-3'>
                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon1} alt='icon'></img></span>
                                            Proving the concept can work
                                        </li>

                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon2} alt='icon'></img></span>
                                            Strategic Plan
                                        </li>

                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon2} alt='icon'></img></span>
                                            White paper conpletion
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div id='node_2' className='flex items-end gap-x-0 translate-y-40 mt-1'>

                                <div className='-translate-y-10 flex flex-col items-center justify-center'>
                                    <h4 className='text-2xl font-semibold'>2024 <span className='text-blue-100'>Q3</span></h4>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#1877F2" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#1877F2" />
                                    </svg>

                                    <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#1877F2" strokeWidth="0.924575" />
                                    </svg>
                                </div>

                                <div className='-translate-y-14 -translate-x-6'>
                                    <p className='font-semibold text-xl mb-5'>Design</p>
                                    <ul className='space-y-3 w-52'>
                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon1} alt='icon'></img></span>
                                            Platform design and technical de monstration
                                        </li>

                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon2} alt='icon'></img></span>
                                            Building the MVP
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div data-aos='fade-down' id='node_4' className='flex items-end gap-x-0 -mt-14'>

                                <div className='flex flex-col items-center justify-center'>
                                    <svg width="4" height="200" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#1877F2" strokeWidth="0.924575" />
                                    </svg>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#1877F2" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#1877F2" />
                                    </svg>

                                    <h4 className='text-2xl font-semibold'>2023 <span className='text-blue-100'>Q4</span></h4>
                                </div>

                                <div className='-translate-y-24 w-52'>
                                    <p className='font-semibold text-xl mb-5'>Concept</p>
                                    <ul className='space-y-3'>
                                        <li className='flex gap-x-3 text-sm'>
                                            <span><img src={ricon1} alt='icon'></img></span>
                                            Public financing & Seed funding raised
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* Solve X Wallet App section */}

            <div id='wallet' className="lg:px-20 px-5 lg:pt-20 py-6 relative z-10">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-center items-center lg:py-12 lg:space-y-0 space-y-8">

                        <div data-aos="fade-left" className="lg:w-1/2 w-full">
                            <div>
                                <h3 className='md:text-7xl text-3xl font-extrabold tracking-wide text-white-100 capitalize font-libre'>
                                    Solve X
                                </h3>
                                <h3 className='md:text-7xl text-3xl font-extrabold tracking-wide text-white-100 capitalize font-libre pt-4'>
                                    Wallet App
                                </h3>
                            </div>


                            <p className='py-6 text-white-50 lg:w-1/2 text-lg lg:leading-relaxed'>
                                Our easy-to-use cryptocurrency wallet solution supporting multiple chains. You can send/receive all cryptocurrencies on supported chains and keep track of their transactions, as well as display detailed token information. Try it now!
                            </p>

                            <div className='flex items-center gap-x-6 mt-5'>

                                <button className='py-3 px-5 bg-blue-100 rounded-lg'>
                                    <img src={google} alt='google'></img>
                                </button>

                                <button className='py-3 px-5 bg-blue-100 rounded-lg'>
                                    <img src={apple} alt='google'></img>
                                </button>
                            </div>

                        </div>

                        <div data-aos="zoom-in" data-aos-delay="350" className="">
                            <img src={wallet} alt="Logo" className='w-8/12 sm:flex mx-auto animate-float' />
                        </div>

                    </div>
                </div>
            </div>

            <Footer />


        </div>
    )
}
