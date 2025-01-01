import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import Accordion from './Accordion'
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
import faqshape1 from '../assets/faqshape1.svg';
import faqshape2 from '../assets/faqshape2.svg';
import projectshape1 from '../assets/projectshape1.svg';
import timeline from '../assets/timeline.svg';
import { PieChart } from 'react-minimal-pie-chart';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    }, [])

    const accordionData = [
        {
            title: 'Lorem Ipsum available?',
            content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.`
        },
        {
            title: 'Lorem Ipsum available?',
            content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.`
        },
        {
            title: 'Lorem Ipsum available?',
            content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.`
        },
        {
            title: 'Lorem Ipsum available?',
            content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.`
        },
        {
            title: 'Lorem Ipsum available?',
            content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.`
        }
    ];

    return (
        <div className="bg-black-50 font-inter overflow-hidden text-white-100 dark:bg-[#14102C]">

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
                                <button className="text-white-100 font-semibold md:text-lg text-sm px-5 py-3 rounded-lg border border-blue-100">
                                    Join community
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features section */}

            <section id="features" class="py-16 relative z-10 lg:px-20 px-5">
                <div class="container mx-auto">
                    <div class="mx-auto mb-16 max-w-[590px] text-center">
                        <span class="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
                            CRYPTO FEATURE
                        </span>
                        <h2 class="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px] font-libre">
                            Best Features
                        </h2>
                        <p class="text-lg font-medium text-body-color-2 dark:text-body-color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
                            congue arcu, In et dignissim quam condimentum vel.
                        </p>
                    </div>

                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mx-auto mb-14 max-w-[370px] text-center">
                                <div class="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20 1.66675L5 8.33341V18.3334C5 27.5834 11.4 36.2334 20 38.3334C28.6 36.2334 35 27.5834 35 18.3334V8.33341L20 1.66675ZM20 19.9834H31.6667C30.7833 26.8501 26.2 32.9667 20 34.8834V20.0001H8.33333V10.5001L20 5.31675V19.9834Z"
                                            fill="white" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 class="mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">
                                        Safe & Secure
                                    </h3>

                                    <p
                                        class="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                                        Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod
                                        tempor labore labore labore et dolor .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mx-auto mb-14 max-w-[370px] text-center">
                                <div class="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M33.3333 9.99992H29.6999C29.8833 9.48325 29.9999 8.91658 29.9999 8.33325C29.9999 5.56659 27.7666 3.33325 24.9999 3.33325C23.2499 3.33325 21.7333 4.23325 20.8333 5.58325L19.9999 6.69992L19.1666 5.56659C18.2666 4.23325 16.7499 3.33325 14.9999 3.33325C12.2333 3.33325 9.99992 5.56659 9.99992 8.33325C9.99992 8.91658 10.1166 9.48325 10.2999 9.99992H6.66659C4.81659 9.99992 3.34992 11.4833 3.34992 13.3333L3.33325 31.6666C3.33325 33.5166 4.81659 34.9999 6.66659 34.9999H33.3333C35.1833 34.9999 36.6666 33.5166 36.6666 31.6666V13.3333C36.6666 11.4833 35.1833 9.99992 33.3333 9.99992ZM24.9999 6.66659C25.9166 6.66659 26.6666 7.41658 26.6666 8.33325C26.6666 9.24992 25.9166 9.99992 24.9999 9.99992C24.0833 9.99992 23.3333 9.24992 23.3333 8.33325C23.3333 7.41658 24.0833 6.66659 24.9999 6.66659ZM14.9999 6.66659C15.9166 6.66659 16.6666 7.41658 16.6666 8.33325C16.6666 9.24992 15.9166 9.99992 14.9999 9.99992C14.0833 9.99992 13.3333 9.24992 13.3333 8.33325C13.3333 7.41658 14.0833 6.66659 14.9999 6.66659ZM33.3333 31.6666H6.66659V28.3333H33.3333V31.6666ZM33.3333 23.3333H6.66659V13.3333H15.1333L11.6666 18.0499L14.3666 19.9999L18.3333 14.5999L19.9999 12.3333L21.6666 14.5999L25.6333 19.9999L28.3333 18.0499L24.8666 13.3333H33.3333V23.3333Z"
                                            fill="white" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 class="mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">
                                        Early Bonus
                                    </h3>

                                    <p
                                        class="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                                        Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod
                                        tempor labore labore labore et dolor .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mx-auto mb-14 max-w-[370px] text-center">
                                <div class="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 3.33325L10.8334 18.3333H29.1667L20 3.33325Z" fill="white" />
                                        <path
                                            d="M29.1666 36.6667C33.3088 36.6667 36.6666 33.3089 36.6666 29.1667C36.6666 25.0246 33.3088 21.6667 29.1666 21.6667C25.0245 21.6667 21.6666 25.0246 21.6666 29.1667C21.6666 33.3089 25.0245 36.6667 29.1666 36.6667Z"
                                            fill="white" />
                                        <path d="M5 22.5H18.3333V35.8333H5V22.5Z" fill="white" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 class="mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">
                                        Universal Access
                                    </h3>

                                    <p
                                        class="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                                        Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod
                                        tempor labore labore labore et dolor .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mx-auto mb-14 max-w-[370px] text-center">
                                <div class="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 24.9999H18.3333V21.6666H5V24.9999ZM5 31.6666H18.3333V28.3333H5V31.6666ZM5 18.3333H18.3333V14.9999H5V18.3333ZM5 8.33325V11.6666H18.3333V8.33325H5ZM21.6667 8.33325H35V31.6666H21.6667V8.33325Z"
                                            fill="white" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 class="mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">
                                        Secure Storage
                                    </h3>

                                    <p
                                        class="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                                        Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod
                                        tempor labore labore labore et dolor .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mx-auto mb-14 max-w-[370px] text-center">
                                <div class="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M35 30V31.6667C35 33.5 33.5 35 31.6667 35H8.33333C6.48333 35 5 33.5 5 31.6667V8.33333C5 6.5 6.48333 5 8.33333 5H31.6667C33.5 5 35 6.5 35 8.33333V10H20C18.15 10 16.6667 11.5 16.6667 13.3333V26.6667C16.6667 28.5 18.15 30 20 30H35ZM20 26.6667H36.6667V13.3333H20V26.6667ZM26.6667 22.5C25.2833 22.5 24.1667 21.3833 24.1667 20C24.1667 18.6167 25.2833 17.5 26.6667 17.5C28.05 17.5 29.1667 18.6167 29.1667 20C29.1667 21.3833 28.05 22.5 26.6667 22.5Z"
                                            fill="white" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 class="mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">
                                        Low Cost
                                    </h3>

                                    <p
                                        class="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                                        Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod
                                        tempor labore labore labore et dolor .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mx-auto mb-14 max-w-[370px] text-center">
                                <div class="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20 13.3333C16.3167 13.3333 13.3333 16.3167 13.3333 20C13.3333 23.6833 16.3167 26.6667 20 26.6667C23.6833 26.6667 26.6667 23.6833 26.6667 20C26.6667 16.3167 23.6833 13.3333 20 13.3333ZM8.33333 25H5V31.6667C5 33.5 6.5 35 8.33333 35H15V31.6667H8.33333V25ZM8.33333 8.33333H15V5H8.33333C6.5 5 5 6.5 5 8.33333V15H8.33333V8.33333ZM31.6667 5H25V8.33333H31.6667V15H35V8.33333C35 6.5 33.5 5 31.6667 5ZM31.6667 31.6667H25V35H31.6667C33.5 35 35 33.5 35 31.6667V25H31.6667V31.6667Z"
                                            fill="white" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 class="mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">
                                        Several Profit
                                    </h3>

                                    <p
                                        class="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                                        Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod
                                        tempor labore labore labore et dolor .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* our projects section */}

            <section id='projects' className="lg:px-20 px-5 lg:py-0 py-6 relative z-10">
                <div className='container mx-auto'>

                    <div className='md:pb-20 pb-8'>
                        <h3 className='md:text-5xl text-3xl font-libre text-center font-bold'>
                            Our Projects
                        </h3>
                    </div>

                    <div className="flex flex-col mx-auto lg:w-11/12 md:p-16 p-6 dark:bg-[#131b4c] rounded-lg md:gap-y-24 gap-y-8">

                        <div className='lg:flex items-center gap-20 lg:space-y-0 space-y-6'>
                            <div class="w-full px-4 lg:w-1/2">
                                <PieChart className='md:w-96 w-64 flex mx-auto'
                                    data={[
                                        { title: 'One', value: 10, color: '#4776e6' },
                                        { title: 'Two', value: 15, color: '#2347B9' },
                                        { title: 'Three', value: 20, color: '#8BA6FF' },
                                        { title: 'Three', value: 20, color: '#8696CA' },
                                        { title: 'Three', value: 20, color: '#8AC8FF' },
                                    ]}
                                />
                            </div>
                            <div className="w-full px-4 lg:w-1/2">
                                <div className="mb-9">
                                    <h3 className="mb-3 font-libre md:text-3xl text-xl font-bold ">
                                        NeonLotto (Token: $NLOT)
                                    </h3>
                                    <p className="text-lg font-medium text-body-color-2 dark:text-body-color">
                                        Discover the thrill of NeonLotto, a decentralized lottery platform that prioritizes fairness,
                                        transparency, and exciting rewards.
                                    </p>
                                    <ul className="text-body-color-2 dark:text-body-color list-disc space-y-1 mt-4 pl-4">
                                        <li>
                                            <strong>Fair Play:</strong> Blockchain-powered random number generation ensures trust.
                                        </li>
                                        <li>
                                            <strong> Prizes:</strong> Earn $NLOT tokens while competing for massive jackpots.
                                        </li>
                                        <li>
                                            <strong>Global Access:</strong> Open to everyone, everywhere, anytime.
                                        </li>
                                    </ul>
                                </div>
                                <div className=" space-y-4">
                                    <div className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-blue-100"></span>
                                        <p className="w-auto text-lg font-medium text-body-color-2 dark:text-body-color">
                                            5% Sell Tax
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#2347B9]"></span>
                                        <p className="w-auto text-lg font-medium text-body-color-2 dark:text-body-color">
                                            1% to Owners: Funds ecosystem management and platform upgrades.
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#8BA6FF]"></span>
                                        <p className="w-auto text-lg font-medium text-body-color-2 dark:text-body-color">
                                            1% to Liquidity Pool (LP): Ensures token price stability.
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#8696CA]"></span>
                                        <p className="w-auto text-lg font-medium text-body-color-2 dark:text-body-color">
                                            2% to Lottery Pool: Boosts rewards for participants, enhancing the lottery experience.
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#8AC8FF]"></span>
                                        <p className="w-auto text-lg font-medium text-body-color-2 dark:text-body-color">
                                            1% Back to Holders: Rewards loyal holders for their trust and participation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='lg:flex items-center flex-row-reverse gap-20 lg:space-y-0 space-y-6'>
                            <div class="w-full px-4 lg:w-1/2">
                                <PieChart className='md:w-96 w-64 flex mx-auto'
                                    data={[
                                        { title: 'One', value: 10, color: '#4776e6' },
                                        { title: 'Two', value: 15, color: '#2347B9' },
                                        { title: 'Three', value: 20, color: '#8BA6FF' },
                                        { title: 'Three', value: 20, color: '#8696CA' },
                                    ]}
                                />
                            </div>
                            <div className="w-full px-4 lg:w-1/2">
                                <div className=" mb-9">
                                    <h3 className="mb-3 font-libre md:text-3xl text-xl font-bold ">
                                        NeonSora (Token: $NSORA)
                                    </h3>
                                    <p className="text-lg font-medium text-body-color-2 dark:text-body-color">
                                        Unleash your ideas with NeonSora, our free-to-use token creation platform.
                                    </p>
                                    <ul className="text-body-color-2 dark:text-body-color list-disc space-y-1 mt-4 pl-4">
                                        <li>
                                            <strong>Effortless Token Creation:</strong> Launch tokens with ease.
                                        </li>
                                        <li>
                                            <strong>Empowering Businesses and Creators:</strong> Monetize visions and unlock new possibilities.
                                        </li>
                                        <li>
                                            <strong>Integrated Ecosystem:</strong> Seamlessly expand within the Neonverse.
                                        </li>
                                    </ul>
                                </div>
                                <div className=" space-y-4">
                                    <p className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-blue-100"></span>
                                        <span className="text-lg font-medium text-body-color-2 dark:text-body-color">
                                            5% Sell Tax
                                        </span>
                                    </p>
                                    <p className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#2347B9]"></span>
                                        <span className="text-lg font-medium text-body-color-2 dark:text-body-color">
                                            1% to Owners: Supports platform development and growth.
                                        </span>
                                    </p>
                                    <p className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#8BA6FF]"></span>
                                        <span className="text-lg font-medium text-body-color-2 dark:text-body-color">
                                            1% to Liquidity Pool (LP): Stabilizes token liquidity and trading.
                                        </span>
                                    </p>
                                    <p className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#8696CA]"></span>
                                        <span className="text-lg font-medium text-body-color-2 dark:text-body-color">
                                            3% Back to Holders: Encourages long-term investment and loyalty.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='lg:flex items-center gap-20 lg:space-y-0 space-y-6'>
                            <div class="w-full px-4 lg:w-1/2">
                                <PieChart className='md:w-96 w-64 flex mx-auto'
                                    data={[
                                        { title: 'One', value: 20, color: '#4776e6' },
                                        { title: 'Two', value: 15, color: '#2347B9' },
                                        { title: 'Three', value: 10, color: '#8BA6FF' },
                                        { title: 'Three', value: 10, color: '#8696CA' },
                                    ]}
                                />
                            </div>
                            <div className="w-full px-4 lg:w-1/2">
                                <div className=" mb-9">
                                    <h3 className="mb-3 font-libre md:text-3xl text-xl font-bold ">
                                        NeonStream (Token: $NSTREAM)
                                    </h3>
                                    <p className="text-lg font-medium text-body-color-2 dark:text-body-color">
                                        Experience unmatched value with NeonStream, offering lowest prices guaranteed on subscription plans
                                        for live TV, VOD, and TV series using $NSTREAM tokens.
                                    </p>

                                    <ul className="text-body-color-2 dark:text-body-color list-disc space-y-1 mt-4 pl-4">
                                        <li>
                                            <strong>Affordable Entertainment:</strong> Save more with $NSTREAM-based discounts.
                                        </li>
                                        <li>
                                            <strong>Flexible Plans:</strong> Choose from diverse subscription options to suit your needs.
                                        </li>
                                        <li>
                                            <strong>One Purchase, Multiple Devices:</strong> Stream on all your devices effortlessly.
                                        </li>
                                        <li>
                                            <strong>All-in-One Hub</strong> Access live TV, movies, and series anytime.
                                        </li>
                                    </ul>
                                </div>
                                <div className=" space-y-4">
                                    <p className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-blue-100"></span>
                                        <span className="text-lg font-medium text-body-color-2 dark:text-body-color">
                                            5% Sell Tax
                                        </span>
                                    </p>
                                    <p className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#2347B9]"></span>
                                        <span className="text-lg font-medium text-body-color-2 dark:text-body-color">
                                            1% to Owners: Enables continued platform innovation.
                                        </span>
                                    </p>
                                    <p className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#8BA6FF]"></span>
                                        <span className="text-lg font-medium text-body-color-2 dark:text-body-color">
                                            1% to Liquidity Pool (LP): Ensures token stability.
                                        </span>
                                    </p>
                                    <p className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#8696CA]"></span>
                                        <span className="text-lg font-medium text-body-color-2 dark:text-body-color">
                                            3% Back to Holders: Provides rewards for loyal supporters.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


                <div class="absolute right-0 -top-32 -z-10">
                    <img src={projectshape1} alt="shape" />
                </div>
            </section>

            {/* roadmap section */}

            <section id="roadmap" class="relative z-10 py-[120px] lg:px-20 px-5">
                <div class="container mx-auto">
                    <div class="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
                        <span class="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
                            ROADMAP
                        </span>
                        <h2 class="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px] font-libre">
                            The Timeline
                        </h2>
                        <p class="text-lg font-medium text-body-color-2 dark:text-body-color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
                            congue arcu, In et dignissim quam condimentum vel.
                        </p>
                    </div>

                    <div class="-mx-4 flex justify-center">
                        <div class="w-full px-4 lg:w-10/12 xl:w-9/12">
                            <div class="relative -mx-4 flex flex-wrap md:py-14 lg:py-20">
                                <span
                                    class="absolute top-0 left-2 hidden h-full w-[2px] bg-light-bg dark:bg-[#2D2C4A] md:left-1/2 md:block"></span>
                                <div class="w-full px-4 md:w-1/2">
                                    <div
                                        class="relative z-10 mb-10 rounded-lg bg-white-50 py-8 px-6 dark:bg-[#131b4c] md:mr-3 md:mb-0 md:text-right lg:mr-5">
                                        <span
                                            class="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"></span>
                                        <span
                                            class="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-[#131b4c] md:block"></span>
                                        <h3 class="mb-3 text-xl font-bold text-black dark:text-white">
                                            Feb 25,2020
                                        </h3>
                                        <p class="mb-5 text-base font-medium text-body-color-2 dark:text-body-color">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nunc sed congue arcu, In et dignissim quam condimentum vel
                                        </p>

                                        <a href="" class="inline-flex items-center justify-center rounded-full bg-white p-2 pr-3">
                                            <span class="pr-1">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.7287 11.1771C16.5267 15.9986 11.6433 18.9329 6.82128 17.7306C2.00125 16.5285 -0.933006 11.6449 0.269537 6.82378C1.47102 2.00177 6.3544 -0.932704 11.175 0.269311C15.9966 1.47133 18.9307 6.35553 17.7286 11.1772L17.7287 11.1771H17.7287Z"
                                                        fill="#F7931A" />
                                                    <path
                                                        d="M13.1113 8.32768C13.2804 7.19652 12.4193 6.58848 11.2416 6.18285L11.6237 4.65059L10.6909 4.41817L10.319 5.91009C10.0738 5.84893 9.82201 5.79131 9.57173 5.73418L9.94632 4.23242L9.01417 4L8.63193 5.53176C8.42902 5.48556 8.22972 5.4399 8.03636 5.39179L8.03744 5.38697L6.75117 5.06577L6.50305 6.06199C6.50305 6.06199 7.19507 6.22062 7.18048 6.23038C7.55819 6.32465 7.62649 6.57468 7.61515 6.77286L7.17998 8.51847C7.20599 8.52507 7.23973 8.53463 7.27695 8.54959C7.24584 8.54186 7.21272 8.53343 7.17836 8.5252L6.56841 10.9705C6.52225 11.0853 6.40509 11.2575 6.14101 11.1921C6.15036 11.2057 5.46309 11.0229 5.46309 11.0229L5 12.0906L6.2138 12.3932C6.43961 12.4498 6.66089 12.5091 6.87881 12.5648L6.49283 14.1146L7.42449 14.347L7.80672 12.8137C8.06124 12.8828 8.30824 12.9465 8.55005 13.0066L8.1691 14.5327L9.10188 14.7651L9.48781 13.2182C11.0783 13.5192 12.2743 13.3979 12.7776 11.9592C13.1833 10.801 12.7574 10.1329 11.9207 9.69725C12.5301 9.55669 12.9892 9.15584 13.1116 8.32781L13.1113 8.3276L13.1113 8.32768ZM10.9802 11.316C10.6919 12.4743 8.74179 11.8481 8.10952 11.6911L8.62171 9.63788C9.25394 9.79571 11.2814 10.1081 10.9802 11.316H10.9802ZM11.2686 8.3109C11.0057 9.36445 9.38257 8.8292 8.85604 8.69795L9.32041 6.83576C9.84694 6.96701 11.5426 7.21197 11.2687 8.3109H11.2686Z"
                                                        fill="white" />
                                                </svg>
                                            </span>
                                            <span class="pr-2 text-xs font-semibold text-body-color-2 dark:text-body-color">
                                                Bitcoin
                                            </span>

                                            <span class="text-[8px] font-semibold text-body-color-2 dark:text-[#959595]">
                                                4.5%
                                            </span>
                                            <span>
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.66675 5.00008L2.25425 5.58758L4.58341 3.26258V8.33341H5.41675V3.26258L7.74175 5.59175L8.33341 5.00008L5.00008 1.66675L1.66675 5.00008Z"
                                                        fill="#60D16B" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div class="w-full px-4 md:w-1/2"></div>
                                <div class="w-full px-4 md:w-1/2"></div>
                                <div class="w-full px-4 md:w-1/2">
                                    <div class="relative z-10 mb-10 rounded-lg bg-light-bg py-8 px-6 dark:bg-[#131b4c] md:ml-3 md:mb-0 lg:ml-5">
                                        <span
                                            class="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:right-auto md:-left-9 md:block lg:-left-11"></span>
                                        <span
                                            class="absolute -left-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-[#131b4c] md:block"></span>
                                        <h3 class="mb-3 text-xl font-bold text-black dark:text-white">
                                            Jan 14,2021
                                        </h3>
                                        <p class="mb-5 text-base font-medium text-body-color-2 dark:text-body-color">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nunc sed congue arcu, In et dignissim quam condimentum vel
                                        </p>

                                        <a href="" class="inline-flex items-center justify-center rounded-full bg-white p-2 pr-3">
                                            <span class="pr-1">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.7307 11.1771C16.5286 15.9986 11.6446 18.9329 6.82205 17.7306C2.00148 16.5285 -0.933111 11.6449 0.269567 6.82378C1.47119 2.00177 6.35511 -0.932704 11.1762 0.269311C15.9985 1.47133 18.9329 6.35553 17.7306 11.1772L17.7307 11.1771H17.7307Z"
                                                        fill="#1181E7" />
                                                    <g clip-path="url(#clip0_27_564)">
                                                        <path d="M8.99897 4L8.93188 4.22789V10.84L8.99897 10.907L12.0682 9.09273L8.99897 4Z"
                                                            fill="#D6D6D6" />
                                                        <path d="M8.99899 4L5.92969 9.09273L8.99899 10.907V7.69762V4Z" fill="white" />
                                                        <path
                                                            d="M8.99899 11.4881L8.96118 11.5342V13.8896L8.99899 13.9999L12.0701 9.6748L8.99899 11.4881Z"
                                                            fill="#D6D6D6" />
                                                        <path d="M8.99899 13.9999V11.4881L5.92969 9.6748L8.99899 13.9999Z" fill="white" />
                                                        <path d="M8.99902 10.907L12.0682 9.09274L8.99902 7.69763V10.907Z" fill="#F3F3F3" />
                                                        <path d="M5.92969 9.09274L8.99899 10.907V7.69763L5.92969 9.09274Z" fill="#E2E2E2" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_27_564">
                                                            <rect width="10" height="10" fill="white" transform="translate(4 4)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            <span class="pr-2 text-xs font-semibold text-body-color-2 dark:text-body-color">
                                                ethereum
                                            </span>

                                            <span class="text-[8px] font-semibold text-body-color-2 dark:text-[#959595]">
                                                2.5%
                                            </span>
                                            <span>
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.66675 5.00008L2.25425 5.58758L4.58341 3.26258V8.33341H5.41675V3.26258L7.74175 5.59175L8.33341 5.00008L5.00008 1.66675L1.66675 5.00008Z"
                                                        fill="#60D16B" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div class="w-full px-4 md:w-1/2">
                                    <div
                                        class="relative z-10 mb-10 rounded-lg bg-light-bg py-8 px-6 dark:bg-[#131b4c] md:mr-3 md:mb-0 md:text-right lg:mr-5">
                                        <span
                                            class="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"></span>
                                        <span
                                            class="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-[#131b4c] md:block"></span>
                                        <h3 class="mb-3 text-xl font-bold text-black dark:text-white">
                                            Mar 30,2021
                                        </h3>
                                        <p class="mb-5 text-base font-medium text-body-color-2 dark:text-body-color">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nunc sed congue arcu, In et dignissim quam condimentum vel
                                        </p>

                                        <a href="" class="inline-flex items-center justify-center rounded-full bg-white p-2 pr-3">
                                            <span class="pr-1">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.7287 11.1771C16.5267 15.9986 11.6433 18.9329 6.82128 17.7306C2.00125 16.5285 -0.933006 11.6449 0.269537 6.82378C1.47102 2.00177 6.3544 -0.932704 11.175 0.269311C15.9966 1.47133 18.9307 6.35553 17.7286 11.1772L17.7287 11.1771H17.7287Z"
                                                        fill="#295ADA" />
                                                    <path
                                                        d="M9 4L8.15344 4.47477L5.84656 5.77523L5 6.25V10.75L5.84656 11.2248L8.1746 12.5252L9.02116 13L9.86772 12.5252L12.1534 11.2248L13 10.75V6.25L12.1534 5.77523L9.84656 4.47477L9 4ZM6.69312 9.80046V7.19954L9 5.89908L11.3069 7.19954V9.80046L9 11.1009L6.69312 9.80046Z"
                                                        fill="white" />
                                                </svg>
                                            </span>
                                            <span class="pr-2 text-xs font-semibold text-body-color-2 dark:text-body-color">
                                                chainlink
                                            </span>

                                            <span class="text-[8px] font-semibold text-body-color-2 dark:text-[#959595]">
                                                4.5%
                                            </span>
                                            <span>
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.66675 5.00008L2.25425 5.58758L4.58341 3.26258V8.33341H5.41675V3.26258L7.74175 5.59175L8.33341 5.00008L5.00008 1.66675L1.66675 5.00008Z"
                                                        fill="#60D16B" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div class="w-full px-4 md:w-1/2"></div>
                                <div class="w-full px-4 md:w-1/2"></div>
                                <div class="w-full px-4 md:w-1/2">
                                    <div class="relative z-10 mb-10 rounded-lg bg-light-bg py-8 px-6 dark:bg-[#131b4c] md:ml-3 md:mb-0 lg:ml-5">
                                        <span
                                            class="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:right-auto md:-left-9 md:block lg:-left-11"></span>
                                        <span
                                            class="absolute -left-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-[#131b4c] md:block"></span>
                                        <h3 class="mb-3 text-xl font-bold text-black dark:text-white">
                                            Dec 19,2021
                                        </h3>
                                        <p class="mb-5 text-base font-medium text-body-color-2 dark:text-body-color">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nunc sed congue arcu, In et dignissim quam condimentum vel
                                        </p>

                                        <a href="" class="inline-flex items-center justify-center rounded-full bg-white p-2 pr-3">
                                            <span class="pr-1">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.7307 11.1771C16.5286 15.9986 11.6446 18.9329 6.82205 17.7306C2.00148 16.5285 -0.933111 11.6449 0.269567 6.82378C1.47119 2.00177 6.35511 -0.932704 11.1762 0.269311C15.9985 1.47133 18.9329 6.35553 17.7306 11.1772L17.7307 11.1771H17.7307Z"
                                                        fill="#8247E5" />
                                                    <path
                                                        d="M11.5718 7.75074C11.389 7.64392 11.154 7.64392 10.9452 7.75074L9.48303 8.63205L8.49086 9.19288L7.05483 10.0742C6.87206 10.181 6.63708 10.181 6.4282 10.0742L5.30548 9.37982C5.12272 9.273 4.99217 9.05935 4.99217 8.81899V7.48368C4.99217 7.27003 5.09661 7.05638 5.30548 6.92285L6.4282 6.25519C6.61097 6.14837 6.84595 6.14837 7.05483 6.25519L8.17755 6.94956C8.36031 7.05638 8.49086 7.27003 8.49086 7.51039V8.39169L9.48303 7.80415V6.89614C9.48303 6.68249 9.37859 6.46884 9.16971 6.33531L7.08094 5.08012C6.89817 4.97329 6.66319 4.97329 6.45431 5.08012L4.31332 6.36202C4.10444 6.46884 4 6.68249 4 6.89614V9.40653C4 9.62018 4.10444 9.83383 4.31332 9.96736L6.4282 11.2226C6.61097 11.3294 6.84595 11.3294 7.05483 11.2226L8.49086 10.368L9.48303 9.78042L10.9191 8.92582C11.1018 8.81899 11.3368 8.81899 11.5457 8.92582L12.6684 9.59347C12.8512 9.7003 12.9817 9.91395 12.9817 10.1543V11.4896C12.9817 11.7033 12.8773 11.9169 12.6684 12.0504L11.5718 12.7181C11.389 12.8249 11.154 12.8249 10.9452 12.7181L9.82245 12.0504C9.63969 11.9436 9.50914 11.73 9.50914 11.4896V10.635L8.51697 11.2226V12.1039C8.51697 12.3175 8.62141 12.5312 8.83029 12.6647L10.9452 13.9199C11.1279 14.0267 11.3629 14.0267 11.5718 13.9199L13.6867 12.6647C13.8695 12.5579 14 12.3442 14 12.1039V9.56677C14 9.35312 13.8956 9.13947 13.6867 9.00594L11.5718 7.75074Z"
                                                        fill="white" />
                                                </svg>
                                            </span>
                                            <span class="pr-2 text-xs font-semibold text-body-color-2 dark:text-body-color">
                                                polygon
                                            </span>

                                            <span class="text-[8px] font-semibold text-body-color-2 dark:text-[#959595]">
                                                2.5%
                                            </span>
                                            <span>
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.66675 5.00008L2.25425 5.58758L4.58341 3.26258V8.33341H5.41675V3.26258L7.74175 5.59175L8.33341 5.00008L5.00008 1.66675L1.66675 5.00008Z"
                                                        fill="#60D16B" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="absolute left-0 bottom-0 -z-10">
                    <img src={timeline} alt="shape" />
                </div>
            </section>

            {/* faq section */}

            <section id="faq" class="relative z-10 bg-light-bg pb-24 dark:bg-[#14102C] lg:px-20 px-5">
                <div class="container mx-auto">
                    <div class="mx-auto mb-16 max-w-[630px] text-center md:mb-20">
                        <span class="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
                            FAQ
                        </span>
                        <h2 class="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
                            Frequently Asked Questions
                        </h2>
                        <p class="mx-auto max-w-[590px] text-lg font-medium text-body-color-2 dark:text-body-color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
                            congue arcu, In et dignissim quam condimentum vel.
                        </p>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="350" className="accordion space-y-5 py-12 lg:w-9/12 flex flex-col mx-auto">
                        {accordionData.map(({ numbers, title, content }) => (
                            <Accordion title={title} content={content} numbers={numbers} />
                        ))}
                    </div>
                </div >

                <div class="absolute left-0 -bottom-36 -z-10">
                    <img src={faqshape1} alt="shape" />
                </div>
                <div class="absolute right-0 -top-36 -z-10">
                    <img src={faqshape2} alt="shape" />
                </div>
            </section >

            <Footer />


        </div >
    )
}
