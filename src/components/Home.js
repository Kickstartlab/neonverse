import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import Accordion from './Accordion'
import Particle from './Particle'
import heroshape1 from '../assets/heroshape1.svg';
import heroshape2 from '../assets/heroshape2.svg';
import faqshape1 from '../assets/faqshape1.svg';
import faqshape2 from '../assets/faqshape2.svg';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import projectshape1 from '../assets/projectshape1.svg';
import timeline from '../assets/timeline.svg';
import testimonial_shape from '../assets/testimonial-shape.svg';

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
            title: 'What is Neonverse?',
            content: `Neonverse is a decentralized ecosystem designed to empower individuals by integrating blockchain technology into entertainment, tokenization, and financial innovation. It comprises platforms like Neon Stream, NeonLotto, and NeonSora, each offering unique utilities and tokenized solutions.`
        },
        {
            title: 'What platforms are included in Neonverse?',
            content: <div>
                <strong>Neonverse includes:</strong>
                <ul className='pl-4 list-disc space-y-2 pt-4'>
                    <li>
                        Neon Stream: A streaming platform offering live content, video-on-demand, and subscription plans powered by the $NSTREAM token.
                    </li>
                    <li>
                        NeonLotto: A lottery dApp with a 6/58 format, where tickets are purchased using $NLOT tokens.
                    </li>
                    <li>
                        NeonSora: A token creation platform currently on Binance Smart Chain (BSC), with plans to expand to Solana.
                    </li>
                </ul>
            </div>
        },
        {
            title: 'What is the vision of Neonverse?',
            content: `Neonverse envisions a decentralized world where creativity, innovation, and financial freedom converge. Its goal is to empower individuals to take control of their digital future through accessible and innovative blockchain solutions.`
        },
        {
            title: 'What are the native tokens of Neonverse?',
            content: <div>
                <strong>
                    The native tokens for Neonverse platforms are:
                </strong>

                <ul className='pl-4 list-disc space-y-2 pt-4'>
                    <li>
                        $NSTREAM: Used for Neon Stream subscriptions.
                    </li>
                    <li>
                        $NLOT: Used for purchasing lottery tickets on NeonLotto.
                    </li>
                    <li>
                        $NSORA: Supports transactions and community rewards on NeonSora.
                    </li>
                    <li>
                        A future token, $NVERS, will serve as the ecosystem’s backbone, connecting all platforms.
                    </li>
                </ul>
            </div>
        },
        {
            title: 'How does Neonverse generate revenue?',
            content: `Neonverse operates as a profit-driven ecosystem. Revenue is generated through subscription fees, platform transactions, and tokenomics (via sell taxes). These funds support the ecosystem’s sustainability and future developments, such as poker and raffle games.`
        },
        {
            title: 'What is NeonSora?',
            content: `NeonSora is a token creation platform on the Binance Smart Chain (BSC) that plans to integrate Solana in the future. It allows users to create customized tokens without governance features, focusing on simplicity, security, and rewarding creators.`
        },
        {
            title: 'How does NeonLotto work?',
            content: `NeonLotto is a decentralized lottery platform where players select 6 numbers from 1 to 58. Tickets are purchased using $NLOT tokens, and the platform operates with a 5% sell tax, which is distributed to the owner, liquidity pool, and token holders.`
        },
        {
            title: 'What makes Neon Stream unique?',
            content: `Neon Stream offers a combination of live streaming and video-on-demand services. Subscriptions are purchased with $NSTREAM tokens at the lowest guaranteed price. The platform also combines subscription and ad-based revenue models to maximize affordability and rewards for token holders.`
        },
        {
            title: 'What is the tax structure for Neonverse tokens?',
            content:
                <div>
                    <strong>
                        All Neonverse platform tokens follow a 5% sell tax structure:
                    </strong>

                    <ul className='pl-4 list-disc space-y-2 pt-4'>
                        <li>
                            1% goes to the owner.
                        </li>
                        <li>
                            1% goes to the liquidity pool.
                        </li>
                        <li>
                            3% is distributed to token holders.
                        </li>
                    </ul>
                </div>
        },
        {
            title: 'How does Neonverse ensure sustainability?',
            content:
                <div>
                    <strong>
                        Sustainability is ensured through:
                    </strong>

                    <ul className='pl-4 list-disc space-y-2 pt-4'>
                        <li>
                            Profit-driven utilities.
                        </li>
                        <li>
                            Transparent and secure tokenomics.
                        </li>
                        <li>
                            Reinforcement of the ecosystem using platform revenues.
                        </li>
                        <li>
                            Continuous innovation and expansion into new features and platforms.
                        </li>
                    </ul>
                </div>
        },
        {
            title: 'HWhat is the roadmap for Neonverse?',
            content:
                <div>
                    <strong>
                        Neonverse’s roadmap includes:
                    </strong>

                    <ul className='pl-4 list-disc space-y-2 pt-4'>
                        <li>
                            Launching foundational platforms (Neon Stream, NeonLotto, NeonSora).
                        </li>
                        <li>
                            Expanding features and fostering community engagement.
                        </li>
                        <li>
                            Introducing $NVERS token and additional utilities.
                        </li>
                        <li>
                            Establishing Neonverse as a global leader in blockchain innovation.`
                        </li>
                    </ul>
                </div>
        },
        {
            title: 'How can I participate in Neonverse?',
            content:
                <div>
                    <strong>
                        You can participate by:
                    </strong>

                    <ul className='pl-4 list-disc space-y-2 pt-4'>
                        <li>
                            Using Neonverse platforms like Neon Stream, NeonLotto, and NeonSora.
                        </li>
                        <li>
                            Holding and trading Neonverse tokens ($NSTREAM, $NLOT, $NSORA).
                        </li>
                        <li>
                            Staying updated through the Neonverse community on Telegram and other channels.
                        </li>
                    </ul>
                </div>
        },
        {
            title: 'Is Neonverse secure?',
            content:
                <div>
                    <strong>
                        Yes, Neonverse prioritizes security through:
                    </strong>

                    <ul className='pl-4 list-disc space-y-2 pt-4'>
                        <li>
                            Regular smart contract audits.
                        </li>
                        <li>
                            Open-source code for transparency.
                        </li>
                        <li>
                            Robust measures to protect user data and transactions.`
                        </li>
                    </ul>
                </div>
        },
        {
            title: 'How is Neonverse different from other ecosystems?',
            content:
                <div>
                    <strong>
                        Neonverse stands out due to:
                    </strong>

                    <ul className='pl-4 list-disc space-y-2 pt-4'>
                        <li>
                            Its integration of entertainment and tokenization.
                        </li>
                        <li>
                            A profit-driven model that ensures ecosystem sustainability.
                        </li>
                        <li>
                            Unique utilities like Neon Stream, NeonLotto, and NeonSora.
                        </li>
                        <li>
                            A commitment to innovation and user empowerment.
                        </li>
                    </ul>
                </div>
        },
        {
            title: 'What’s next for Neonverse?',
            content:
                <div>
                    <strong>
                        Neonverse plans to:
                    </strong>

                    <ul className='pl-4 list-disc space-y-2 pt-4'>
                        <li>
                            Launch the $NVERS token.
                        </li>
                        <li>
                            Expand into new platforms like poker and raffle games.
                        </li>
                        <li>
                            Introduce cross-chain integrations for broader accessibility.
                        </li>
                        <li>
                            Continue building a robust, decentralized ecosystem.
                        </li>
                    </ul>
                </div>
        }

    ];

    return (
        <div className="font-urbanist overflow-hidden  dark:text-white-100 text-blue-50 dark:bg-[#14102C] bg-white-100">


            <div className='bg-color absolute left-0 top-0 right-0 h-screen'>
            </div>

            <div className='absolute left-0 top-0 right-0 h-screen'>
                <Particle />
            </div>

            <img src={heroshape1} alt='' className='absolute left-0 top-0'></img>
            <img src={heroshape2} alt='' className='absolute right-0 top-0'></img>

            <div className="lg:px-20 px-5 relative z-20">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="flex flex-col justify-center items-center gap-y-4 lg:py-28 py-12 text-center lg:w-9/12 mx-auto">

                        <p data-aos='fade-in' dta-aos-delay='150' className='lg:py-3 lg:text-xl dark:text-white-50 text-blue-50'>
                            Welcome to Neonverse
                        </p>

                        <div className='space-y-2'>
                            <h1 data-aos='fade-up' className='md:text-6xl text-3xl font-libre font-bold  dark:text-white-100 text-blue-50'>
                                Innovating the Future
                            </h1>

                            <h2 data-aos='fade-up' className='md:text-6xl text-3xl font-libre font-bold text-blue-100'>
                                of Digital Engagement
                            </h2>
                        </div>

                        <p data-aos='fade-in' dta-aos-delay='150' className='py-5 flex mx-auto w-10/12 lg:leading-relaxed'>
                            Neonverse is a visionary ecosystem designed to offer a wide array of platforms, rewarding experiences, and sustainable solutions. From lotteries and token creation to entertainment and beyond, Neonverse aims to lead the way in digital innovation.
                        </p>

                        <div data-aos='zoom-in' className="flex items-center justify-center md:gap-12 gap-6 mx-auto">
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

                            <a href="https://t.me/neonverse_official" className=''>
                                <button className=" dark:text-white-100 text-blue-50 font-semibold md:text-lg text-sm px-5 py-3 rounded-lg border border-blue-100">
                                    Join community
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* about section */}

            <section id="about" className="bg-light-bg lg:px-20 px-5 lg:py-12 py-6 dark:bg-[#14102C]">
                <div className="container mx-auto">
                    <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
                        <h3 className="mb-3 text-2xl font-bold font-libre md:text-[45px]">
                            About Us – Neonverse
                        </h3>
                        <p className="text-lg font-medium">
                            At Neonverse, we envision a decentralized world where innovation, creativity, and financial freedom converge. Our mission is to empower individuals and businesses to take charge of their digital futures through cutting-edge blockchain solutions.
                        </p>
                    </div>

                    <div className="-mx-4 flex flex-wrap justify-center items-baseline">

                        <div data-aos='fade-up' data-aos-delay='0' className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-8 max-w-[370px] text-center space-y-6 bg-black-25 dark:bg-[#131B4D] p-5 rounded-3xl shadow-lg">
                                <img src={project3} alt='about' className='flex mx-auto rounded-2xl'></img>
                                <div>
                                    <h3 className="mb-3 font-bold text-xl font-libre">
                                        Our Mission
                                    </h3>
                                    <p className="text-base font-medium">
                                        To bridge the gap between decentralized technology and everyday life, empowering communities worldwide with tools and opportunities that drive growth and freedom.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-up' data-aos-delay='100' className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-8 max-w-[370px] text-center space-y-6 bg-black-25 dark:bg-[#131B4D] p-5 rounded-3xl shadow-lg">
                                <img src={project2} alt='about' className='flex mx-auto rounded-2xl'></img>
                                <div>
                                    <h3 className="mb-3 font-bold text-xl font-libre">
                                        Why Neonverse?
                                    </h3>
                                    <p className="text-base font-medium">
                                        We’re committed to creating a future where technology serves as a tool for empowerment, not just convenience. By integrating decentralized finance (DeFi) with real-world applications, we ensure transparency, inclusivity, and security in every project.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-up' data-aos-delay='200' className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-8 max-w-[370px] text-center space-y-6 bg-black-25 dark:bg-[#131B4D] p-5 rounded-3xl shadow-lg">
                                <img src={project1} alt='about' className='flex mx-auto rounded-2xl'></img>
                                <div>
                                    <h3 className="mb-3 font-bold text-xl font-libre">
                                        Our Vision
                                    </h3>
                                    <p className="text-base font-medium">
                                        To build a thriving ecosystem where blockchain technology meets innovation, transforming industries and lives globally.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:pt-12 mt-6'>
                        <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
                            <h3 className="mb-3 text-2xl font-bold font-libre md:text-[45px]">
                                Our Ecosystem
                            </h3>
                            <p className="text-lg font-medium">
                                Neonverse is not just a platform; it’s an interconnected ecosystem designed to revolutionize decentralized technology. Our projects span multiple utilities, each with its own unique purpose:
                            </p>
                        </div>

                        <div className="-mx-4 flex flex-wrap">

                            <div className="w-full px-4 md:w-1/2">
                                <div
                                    className="relative z-10 mb-10 overflow-hidden rounded-[10px] px-6 py-8 bg-black-25 dark:bg-[#131B4D] shadow-md sm:p-10 md:p-8 xl:p-10"
                                >
                                    <div className="absolute right-0 top-0 z-[-1]">
                                        <img src={testimonial_shape} alt="shape" />
                                    </div>
                                    <div className="mb-6">
                                        <h3 className="mb-1 md:text-2xl text-xl font-libre font-semibold text-dark dark:text-white">
                                            NeonSora:
                                        </h3>
                                    </div>
                                    <div>
                                        <p className="text-base font-medium">
                                            A secure and rewarding token launch platform that redefines token creation for creators and investors alike.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-4 md:w-1/2">
                                <div
                                    className="relative z-10 mb-10 overflow-hidden rounded-[10px] px-6 py-8 bg-black-25 dark:bg-[#131B4D] shadow-md sm:p-10 md:p-8 xl:p-10"
                                >
                                    <div className="absolute right-0 top-0 z-[-1]">
                                        <img src={testimonial_shape} alt="shape" />
                                    </div>
                                    <div className="mb-6">
                                        <h3 className="mb-1 md:text-2xl text-xl font-libre font-semibold text-dark dark:text-white">
                                            NeonLotto:
                                        </h3>
                                    </div>
                                    <div>
                                        <p className="text-base font-medium">
                                            A decentralized lottery dApp offering transparency, fairness, and lucrative rewards for participants.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-4 md:w-1/2">
                                <div
                                    className="relative z-10 mb-10 overflow-hidden rounded-[10px] px-6 py-8 bg-black-25 dark:bg-[#131B4D] shadow-md sm:p-10 md:p-8 xl:p-10"
                                >
                                    <div className="absolute right-0 top-0 z-[-1]">
                                        <img src={testimonial_shape} alt="shape" />
                                    </div>
                                    <div className="mb-6">
                                        <h3 className="mb-1 md:text-2xl text-xl font-libre font-semibold text-dark dark:text-white">
                                            NeonStream:
                                        </h3>
                                    </div>
                                    <div>
                                        <p className="text-base font-medium">
                                            A next-generation streaming platform powered by blockchain, delivering live content, video on demand, and more with exclusive benefits for $NSTREAM holders.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-4 md:w-1/2">
                                <div
                                    className="relative z-10 mb-10 overflow-hidden rounded-[10px] px-6 py-8 bg-black-25 dark:bg-[#131B4D] shadow-md sm:p-10 md:p-8 xl:p-10"
                                >
                                    <div className="absolute right-0 top-0 z-[-1]">
                                        <img src={testimonial_shape} alt="shape" />
                                    </div>
                                    <div className="mb-6">
                                        <h3 className="mb-1 md:text-2xl text-xl font-libre font-semibold text-dark dark:text-white">
                                            $NVERS Token:
                                        </h3>
                                    </div>
                                    <div>
                                        <p className="text-base font-medium">
                                            The ultimate utility token that will unify the Neonverse ecosystem upon launch.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Features section */}

            <section id="features" className="md:py-16 py-6 relative z-10 lg:px-20 px-5">
                <div className="container mx-auto">
                    <div className="mx-auto md:mb-20 mb-12 max-w-[590px] text-center">
                        <h3 className="mb-3 text-2xl font-bold leading-tight  md:text-[45px] font-libre">
                            Best Features
                        </h3>
                    </div>

                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div data-aos='fade-up' data-aos-delay='0' className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-14 max-w-[370px] text-center">
                                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20 1.66675L5 8.33341V18.3334C5 27.5834 11.4 36.2334 20 38.3334C28.6 36.2334 35 27.5834 35 18.3334V8.33341L20 1.66675ZM20 19.9834H31.6667C30.7833 26.8501 26.2 32.9667 20 34.8834V20.0001H8.33333V10.5001L20 5.31675V19.9834Z"
                                            fill="white" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="mb-3 text-xl font-bold  sm:text-3xl lg:text-xl xl:text-3xl">
                                        Built on Binance Smart Chain
                                    </h3>

                                    <p
                                        className="text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                        Enjoy low transaction fees and high-speed processing, ensuring seamless user experiences across our ecosystem.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-up' data-aos-delay='100' className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-14 max-w-[370px] text-center">
                                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M33.3333 9.99992H29.6999C29.8833 9.48325 29.9999 8.91658 29.9999 8.33325C29.9999 5.56659 27.7666 3.33325 24.9999 3.33325C23.2499 3.33325 21.7333 4.23325 20.8333 5.58325L19.9999 6.69992L19.1666 5.56659C18.2666 4.23325 16.7499 3.33325 14.9999 3.33325C12.2333 3.33325 9.99992 5.56659 9.99992 8.33325C9.99992 8.91658 10.1166 9.48325 10.2999 9.99992H6.66659C4.81659 9.99992 3.34992 11.4833 3.34992 13.3333L3.33325 31.6666C3.33325 33.5166 4.81659 34.9999 6.66659 34.9999H33.3333C35.1833 34.9999 36.6666 33.5166 36.6666 31.6666V13.3333C36.6666 11.4833 35.1833 9.99992 33.3333 9.99992ZM24.9999 6.66659C25.9166 6.66659 26.6666 7.41658 26.6666 8.33325C26.6666 9.24992 25.9166 9.99992 24.9999 9.99992C24.0833 9.99992 23.3333 9.24992 23.3333 8.33325C23.3333 7.41658 24.0833 6.66659 24.9999 6.66659ZM14.9999 6.66659C15.9166 6.66659 16.6666 7.41658 16.6666 8.33325C16.6666 9.24992 15.9166 9.99992 14.9999 9.99992C14.0833 9.99992 13.3333 9.24992 13.3333 8.33325C13.3333 7.41658 14.0833 6.66659 14.9999 6.66659ZM33.3333 31.6666H6.66659V28.3333H33.3333V31.6666ZM33.3333 23.3333H6.66659V13.3333H15.1333L11.6666 18.0499L14.3666 19.9999L18.3333 14.5999L19.9999 12.3333L21.6666 14.5999L25.6333 19.9999L28.3333 18.0499L24.8666 13.3333H33.3333V23.3333Z"
                                            fill="white" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="mb-3 text-xl font-bold font-libre  sm:text-3xl lg:text-xl xl:text-3xl">
                                        Rewarding Tokenomics
                                    </h3>

                                    <p
                                        className="text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                        Holders of each utility token are rewarded directly with a share of profits, promoting sustainable growth and community participation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-up' data-aos-delay='200' className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-14 max-w-[370px] text-center">
                                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 3.33325L10.8334 18.3333H29.1667L20 3.33325Z" fill="white" />
                                        <path
                                            d="M29.1666 36.6667C33.3088 36.6667 36.6666 33.3089 36.6666 29.1667C36.6666 25.0246 33.3088 21.6667 29.1666 21.6667C25.0245 21.6667 21.6666 25.0246 21.6666 29.1667C21.6666 33.3089 25.0245 36.6667 29.1666 36.6667Z"
                                            fill="white" />
                                        <path d="M5 22.5H18.3333V35.8333H5V22.5Z" fill="white" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="mb-3 text-xl font-bold font-libre  sm:text-3xl lg:text-xl xl:text-3xl">
                                        SAFU-Certified Development
                                    </h3>

                                    <p
                                        className="text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                        Our utilities are created by a trusted SAFU (Secure Asset Fund for Users) developer, ensuring transparency, security, and reliability.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-up' data-aos-delay='300' className="w-full px-4 md:w-1/2">
                            <div className="mx-auto mb-14 max-w-[470px] text-center">
                                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 24.9999H18.3333V21.6666H5V24.9999ZM5 31.6666H18.3333V28.3333H5V31.6666ZM5 18.3333H18.3333V14.9999H5V18.3333ZM5 8.33325V11.6666H18.3333V8.33325H5ZM21.6667 8.33325H35V31.6666H21.6667V8.33325Z"
                                            fill="white" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="mb-3 text-xl font-bold font-libre  sm:text-3xl lg:text-xl xl:text-3xl">
                                        Profit-Generating Utilities
                                    </h3>

                                    <p
                                        className="text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                        Our business-focused utilities are designed to generate revenue, enabling consistent buybacks and value appreciation for token holders.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-up' data-aos-delay='400' className="w-full px-4 md:w-1/2">
                            <div className="mx-auto mb-14  max-w-[470px] text-center">
                                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-white">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M35 30V31.6667C35 33.5 33.5 35 31.6667 35H8.33333C6.48333 35 5 33.5 5 31.6667V8.33333C5 6.5 6.48333 5 8.33333 5H31.6667C33.5 5 35 6.5 35 8.33333V10H20C18.15 10 16.6667 11.5 16.6667 13.3333V26.6667C16.6667 28.5 18.15 30 20 30H35ZM20 26.6667H36.6667V13.3333H20V26.6667ZM26.6667 22.5C25.2833 22.5 24.1667 21.3833 24.1667 20C24.1667 18.6167 25.2833 17.5 26.6667 17.5C28.05 17.5 29.1667 18.6167 29.1667 20C29.1667 21.3833 28.05 22.5 26.6667 22.5Z"
                                            fill="white" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="mb-3 text-xl font-bold font-libre  sm:text-3xl lg:text-xl xl:text-3xl">
                                        Utility-First Approach
                                    </h3>

                                    <p
                                        className="text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                                        We deliver value before promises. All utilities are ready and operational before presale, ensuring you invest in proven solutions, not just ideas
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
                        <h3 className='md:text-5xl text-2xl font-libre text-center font-bold'>
                            Our Projects
                        </h3>
                    </div>

                    <div className="flex flex-col mx-auto border-gradient lg:w-11/12 md:p-16 p-5 dark:bg-[#131b4c] bg-black-25 rounded-lg md:gap-y-24 gap-y-8">

                        <div className='lg:flex items-center gap-20 lg:space-y-0 space-y-8'>
                            <div data-aos='zoom-in' className="w-full px-4 lg:w-1/2">
                                <PieChart className='md:w-96 flex mx-auto'
                                    data={[
                                        { title: ' 5% Sell Tax', value: 30, color: '#4776e6' },
                                        { title: '1% to Owners: Funds ecosystem management and platform upgrades.', value: 15, color: '#2347B9' },
                                        { title: '1% to Liquidity Pool (LP): Ensures token price stability.', value: 15, color: '#8BA6FF' },
                                        {
                                            title: `2% to Lottery Pool: Boosts rewards for participants, enhancing the lottery experience.`, value: 20, color: '#8696CA'
                                        },
                                        { title: '1% Back to Holders: Rewards loyal holders for their trust and participation.', value: 15, color: '#8AC8FF' },
                                    ]}
                                />
                            </div>
                            <div data-aos='fade-right' className="w-full px-4 lg:w-1/2">
                                <div className="mb-9">
                                    <h3 className="mb-3 font-libre md:text-3xl text-xl font-bold ">
                                        NeonLotto (Token: $NLOT)
                                    </h3>
                                    <p className="text-lg font-medium">
                                        Discover the thrill of NeonLotto, a decentralized lottery platform that prioritizes fairness,
                                        transparency, and exciting rewards.
                                    </p>
                                    <ul className="text-body-color-2 dark:text-body-color list-disc space-y-1 mt-4 md:pl-4">
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
                                        <p className="w-auto text-lg font-medium">
                                            5% Sell Tax
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#2347B9]"></span>
                                        <p className="w-auto text-lg font-medium">
                                            1% to Owners: Funds ecosystem management and platform upgrades.
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#8BA6FF]"></span>
                                        <p className="w-auto text-lg font-medium">
                                            1% to Liquidity Pool (LP): Ensures token price stability.
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#8696CA]"></span>
                                        <p className="w-auto text-lg font-medium">
                                            2% to Lottery Pool: Boosts rewards for participants, enhancing the lottery experience.
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#8AC8FF]"></span>
                                        <p className="w-auto text-lg font-medium">
                                            1% Back to Holders: Rewards loyal holders for their trust and participation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='lg:flex items-center flex-row-reverse gap-20 lg:space-y-0 space-y-8'>
                            <div data-aos='zoom-in' className="w-full px-4 lg:w-1/2">
                                <PieChart className='md:w-96 flex mx-auto'
                                    data={[
                                        { title: `5% Sell Tax`, value: 40, color: '#4776e6' },
                                        { title: `1% to Owners: Supports platform development and growth.`, value: 20, color: '#2347B9' },
                                        { title: `1% to Liquidity Pool (LP): Stabilizes token liquidity and trading.`, value: 20, color: '#8BA6FF' },
                                        { title: `3% Back to Holders: Encourages long-term investment and loyalty.`, value: 30, color: '#8696CA' },
                                    ]}
                                />
                            </div>
                            <div data-aos='fade-right' className="w-full px-4 lg:w-1/2">
                                <div className=" mb-9">
                                    <h3 className="mb-3 font-libre md:text-3xl text-xl font-bold ">
                                        NeonSora (Token: $NSORA)
                                    </h3>
                                    <p className="text-lg font-medium">
                                        Unleash your ideas with NeonSora, our free-to-use token creation platform.
                                    </p>
                                    <ul className="text-body-color-2 dark:text-body-color list-disc space-y-1 mt-4 md:pl-4">
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
                                        <span className="text-lg font-medium">
                                            5% Sell Tax
                                        </span>
                                    </p>
                                    <p className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#2347B9]"></span>
                                        <span className="text-lg font-medium">
                                            1% to Owners: Supports platform development and growth.
                                        </span>
                                    </p>
                                    <p className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#8BA6FF]"></span>
                                        <span className="text-lg font-medium">
                                            1% to Liquidity Pool (LP): Stabilizes token liquidity and trading.
                                        </span>
                                    </p>
                                    <p className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#8696CA]"></span>
                                        <span className="text-lg font-medium">
                                            3% Back to Holders: Encourages long-term investment and loyalty.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='lg:flex items-center gap-20 lg:space-y-0 space-y-8'>
                            <div data-aos='zoom-in' className="w-full px-4 lg:w-1/2">
                                <PieChart className='md:w-96 flex mx-auto'
                                    data={[
                                        { title: '5% Sell Tax', value: 40, color: '#4776e6' },
                                        { title: `1% to Owners: Enables continued platform innovation.`, value: 20, color: '#2347B9' },
                                        { title: `1% to Liquidity Pool (LP): Ensures token stability.`, value: 20, color: '#8BA6FF' },
                                        { title: `3% Back to Holders: Provides rewards for loyal supporters.`, value: 30, color: '#8696CA' },
                                    ]}
                                />
                            </div>
                            <div data-aos='fade-right' className="w-full px-4 lg:w-1/2">
                                <div className=" mb-9">
                                    <h3 className="mb-3 font-libre md:text-3xl text-xl font-bold ">
                                        NeonStream (Token: $NSTREAM)
                                    </h3>
                                    <p className="text-lg font-medium">
                                        Experience unmatched value with NeonStream, offering lowest prices guaranteed on subscription plans
                                        for live TV, VOD, and TV series using $NSTREAM tokens.
                                    </p>

                                    <ul className="text-body-color-2 dark:text-body-color list-disc space-y-1 mt-4 md:pl-4">
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
                                        <span className="text-lg font-medium">
                                            5% Sell Tax
                                        </span>
                                    </p>
                                    <p className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#2347B9]"></span>
                                        <span className="text-lg font-medium">
                                            1% to Owners: Enables continued platform innovation.
                                        </span>
                                    </p>
                                    <p className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#8BA6FF]"></span>
                                        <span className="text-lg font-medium">
                                            1% to Liquidity Pool (LP): Ensures token stability.
                                        </span>
                                    </p>
                                    <p className="flex">
                                        <span className="mr-4 h-6 w-6 rounded-full bg-[#8696CA]"></span>
                                        <span className="text-lg font-medium">
                                            3% Back to Holders: Provides rewards for loyal supporters.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


                <div className="absolute right-0 -top-32 -z-10">
                    <img src={projectshape1} alt="shape" />
                </div>
            </section>

            {/* roadmap section */}

            <section id="roadmap" className="relative z-10 md:py-20 py-8 lg:px-20 px-5">
                <div className="container mx-auto">
                    <div className="mx-auto mb-16 max-w-[590px] text-center md:mb-20">
                        <span className="mb-3 text-lg font-bold uppercase sm:text-xl">
                            ROADMAP
                        </span>
                        <h3 className="mb-3 text-3xl font-bold leading-tight  md:text-[45px] font-libre">
                            The Timeline
                        </h3>
                    </div>

                    <div className="-mx-4 flex justify-center">
                        <div className="w-full px-4 lg:w-10/12 xl:w-9/12">
                            <div className="relative -mx-4 flex flex-wrap md:py-14 lg:py-20">
                                <span
                                    className="absolute top-0 left-2 hidden h-full w-[3px] bg-black-25 dark:bg-[#131B4D] md:left-1/2 md:block"></span>
                                <div className="w-full px-4 md:w-1/2">
                                    <div data-aos='fade-right' className="relative z-10 mb-10 rounded-lg bg-black-25 py-8 px-6 dark:bg-[#131b4c] md:mr-3 md:mb-0 md:text-right lg:mr-5">
                                        <span
                                            className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"></span>
                                        <span
                                            className="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-[#131b4c] md:block"></span>
                                        <h3 className="mb-3 text-xl font-bold ">
                                            December 2024
                                        </h3>
                                        <p className="mb-5 text-base font-medium">
                                            Creation of Telegram and X (Twitter) channels to build community engagement.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2"></div>
                                <div className="w-full px-4 md:w-1/2"></div>
                                <div data-aos='fade-left' className="w-full px-4 md:w-1/2">
                                    <div className="relative z-10 mb-10 rounded-lg bg-black-25 py-8 px-6 dark:bg-[#131b4c] md:ml-3 md:mb-0 lg:ml-5">
                                        <span
                                            className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:right-auto md:-left-9 md:block lg:-left-11"></span>
                                        <span
                                            className="absolute -left-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-black-25 dark:bg-[#131b4c] md:block"></span>
                                        <h3 className="mb-3 text-xl font-bold ">
                                            January 2025
                                        </h3>
                                        <ul className='space-y-1'>
                                            <li>
                                                Development of the official Neonverse Website.
                                            </li>
                                            <li>
                                                Verification of the X account for credibility and trust.
                                            </li>
                                            <li>
                                                Release of the Neonverse Whitepaper, detailing our vision, utilities, and roadmap.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div data-aos='fade-right' className="w-full px-4 md:w-1/2">
                                    <div
                                        className="relative z-10 mb-10 rounded-lg bg-black-25 py-8 px-6 dark:bg-[#131b4c] md:mr-3 md:mb-0 md:text-right lg:mr-5">
                                        <span
                                            className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"></span>
                                        <span
                                            className="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-black-25 dark:bg-[#131b4c] md:block"></span>
                                        <h3 className="mb-3 text-xl font-bold ">
                                            February 2025
                                        </h3>
                                        <p className="mb-5 text-base font-medium">
                                            Start the development of NeonSora, our innovative token launch dApp.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full px-4 md:w-1/2"></div>
                                <div className="w-full px-4 md:w-1/2"></div>
                                <div data-aos='fade-left' className="w-full px-4 md:w-1/2">
                                    <div className="relative z-10 mb-10 rounded-lg bg-black-25 py-8 px-6 dark:bg-[#131b4c] md:ml-3 md:mb-0 lg:ml-5">
                                        <span
                                            className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:right-auto md:-left-9 md:block lg:-left-11"></span>
                                        <span
                                            className="absolute -left-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-[#131b4c] md:block"></span>
                                        <h3 className="mb-3 text-xl font-bold ">
                                            March 2025
                                        </h3>
                                        <p className="mb-5 text-base font-medium">
                                            Presale for NeonSora, providing early access to our groundbreaking platform.
                                        </p>

                                    </div>
                                </div>
                                <div data-aos='fade-right' className="w-full px-4 md:w-1/2">
                                    <div
                                        className="relative z-10 mb-10 rounded-lg bg-black-25 py-8 px-6 dark:bg-[#131b4c] md:mr-3 md:mb-0 md:text-right lg:mr-5">
                                        <span
                                            className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"></span>
                                        <span
                                            className="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-black-25 dark:bg-[#131b4c] md:block"></span>
                                        <h3 className="mb-3 text-xl font-bold ">
                                            April 2025
                                        </h3>
                                        <p className="mb-5 text-base font-medium">
                                            Begin development of NeonLotto, a decentralized lottery dApp.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full px-4 md:w-1/2"></div>
                                <div className="w-full px-4 md:w-1/2"></div>
                                <div data-aos='fade-left' className="w-full px-4 md:w-1/2">
                                    <div className="relative z-10 mb-10 rounded-lg bg-black-25 py-8 px-6 dark:bg-[#131b4c] md:ml-3 md:mb-0 lg:ml-5">
                                        <span
                                            className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:right-auto md:-left-9 md:block lg:-left-11"></span>
                                        <span
                                            className="absolute -left-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-[#131b4c] md:block"></span>
                                        <h3 className="mb-3 text-xl font-bold ">
                                            May 2025
                                        </h3>
                                        <p className="mb-5 text-base font-medium">
                                            Development of the NeonStream Smart Contract for seamless streaming functionality.
                                        </p>

                                    </div>
                                </div>
                                <div data-aos='fade-right' className="w-full px-4 md:w-1/2">
                                    <div
                                        className="relative z-10 mb-10 rounded-lg bg-black-25 py-8 px-6 dark:bg-[#131b4c] md:mr-3 md:mb-0 md:text-right lg:mr-5">
                                        <span
                                            className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"></span>
                                        <span
                                            className="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-black-25 dark:bg-[#131b4c] md:block"></span>
                                        <h3 className="mb-3 text-xl font-bold ">
                                            June 2025
                                        </h3>
                                        <p className="mb-5 text-base font-medium">
                                            Presale for NeonStream, inviting participation in the streaming revolution.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full px-4 md:w-1/2"></div>
                                <div className="w-full px-4 md:w-1/2"></div>
                                <div data-aos='fade-left' className="w-full px-4 md:w-1/2">
                                    <div className="relative z-10 mb-10 rounded-lg bg-black-25 py-8 px-6 dark:bg-[#131b4c] md:ml-3 md:mb-0 lg:ml-5">
                                        <span
                                            className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:right-auto md:-left-9 md:block lg:-left-11"></span>
                                        <span
                                            className="absolute -left-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-[#131b4c] md:block"></span>
                                        <h3 className="mb-3 text-xl font-bold ">
                                            July 2025
                                        </h3>
                                        <p className="mb-5 text-base font-medium">
                                            Presale for NeonLotto, giving users a chance to engage in decentralized lotteries.
                                        </p>

                                    </div>
                                </div>
                                <div data-aos='fade-right' className="w-full px-4 md:w-1/2">
                                    <div
                                        className="relative z-10 mb-10 rounded-lg bg-black-25 py-8 px-6 dark:bg-[#131b4c] md:mr-3 md:mb-0 md:text-right lg:mr-5">
                                        <span
                                            className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"></span>
                                        <span
                                            className="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-black-25 dark:bg-[#131b4c] md:block"></span>
                                        <h3 className="mb-3 text-xl font-bold ">
                                            August 2025
                                        </h3>
                                        <p className="mb-5 text-base font-medium">
                                            Listing of NeonSora on CoinMarketCap for global visibility.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full px-4 md:w-1/2"></div>
                                <div className="w-full px-4 md:w-1/2"></div>
                                <div data-aos='fade-left' className="w-full px-4 md:w-1/2">
                                    <div className="relative z-10 mb-10 rounded-lg bg-black-25 py-8 px-6 dark:bg-[#131b4c] md:ml-3 md:mb-0 lg:ml-5">
                                        <span
                                            className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:right-auto md:-left-9 md:block lg:-left-11"></span>
                                        <span
                                            className="absolute -left-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-[#131b4c] md:block"></span>
                                        <h3 className="mb-3 text-xl font-bold ">
                                            September 2025
                                        </h3>
                                        <p className="mb-5 text-base font-medium">
                                            Listing of NeonLotto on CoinMarketCap, expanding market reach.
                                        </p>

                                    </div>
                                </div>
                                <div data-aos='fade-right' className="w-full px-4 md:w-1/2">
                                    <div
                                        className="relative z-10 mb-10 rounded-lg bg-black-25 py-8 px-6 dark:bg-[#131b4c] md:mr-3 md:mb-0 md:text-right lg:mr-5">
                                        <span
                                            className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"></span>
                                        <span
                                            className="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-black-25 dark:bg-[#131b4c] md:block"></span>
                                        <h3 className="mb-3 text-xl font-bold ">
                                            October 2025
                                        </h3>
                                        <p className="mb-5 text-base font-medium">
                                            Listing of NeonStream on CoinMarketCap, driving adoption and recognition.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full px-4 md:w-1/2"></div>
                                <div className="w-full px-4 md:w-1/2"></div>
                                <div data-aos='fade-left' className="w-full px-4 md:w-1/2">
                                    <div className="relative z-10 mb-10 rounded-lg bg-black-25 py-8 px-6 dark:bg-[#131b4c] md:ml-3 md:mb-0 lg:ml-5">
                                        <span
                                            className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:right-auto md:-left-9 md:block lg:-left-11"></span>
                                        <span
                                            className="absolute -left-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-[#131b4c] md:block"></span>
                                        <h3 className="mb-3 text-xl font-bold ">
                                            November 2025
                                        </h3>
                                        <p className="mb-5 text-base font-medium">
                                            Development of the Neonverse Smart Contract to tie the ecosystem together.
                                        </p>

                                    </div>
                                </div>
                                <div data-aos='fade-right' className="w-full px-4 md:w-1/2">
                                    <div
                                        className="relative z-10 mb-10 rounded-lg bg-black-25 py-8 px-6 dark:bg-[#131b4c] md:mr-3 md:mb-0 md:text-right lg:mr-5">
                                        <span
                                            className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"></span>
                                        <span
                                            className="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-black-25 dark:bg-[#131b4c] md:block"></span>
                                        <h3 className="mb-3 text-xl font-bold ">
                                            December 2025
                                        </h3>
                                        <p className="mb-5 text-base font-medium">
                                            Presale for Neonverse, unveiling the core ecosystem token.<br></br>
                                            Begin utility development for Neonverse, integrating all platforms seamlessly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute left-0 bottom-0 -z-10">
                    <img src={timeline} alt="shape" />
                </div>
            </section>

            {/* faq section */}

            <section id="faq" className="relative z-10 bg-light-bg dark:bg-[#14102C] lg:px-20 px-5 pb-8">
                <div className="container mx-auto">
                    <div className="mx-auto mb-16 max-w-[630px] text-center md:my-20 my-8">
                        <h3 className="mb-3 text-2xl font-bold leading-tight  md:text-[45px]">
                            Frequently Asked Questions
                        </h3>
                    </div>

                    <div data-aos-delay="150" className="accordion space-y-5 md:pb-12 pb-8 lg:w-9/12 flex flex-col mx-auto">
                        {accordionData.map(({ numbers, title, content }) => (
                            <Accordion title={title} content={content} numbers={numbers} />
                        ))}
                    </div>
                </div >

                <div className="absolute left-0 -bottom-36 -z-10">
                    <img src={faqshape1} alt="shape" />
                </div>
                <div className="absolute right-0 -top-36 -z-10">
                    <img src={faqshape2} alt="shape" />
                </div>
            </section >

            <Footer />


        </div >
    )
}
