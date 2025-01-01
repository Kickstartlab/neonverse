import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import diff_1 from "../assets/diff_1.png"
import diff_2 from "../assets/diff_2.png"
import diff_3 from "../assets/diff_3.png"


export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };

    const slider = React.useRef(null);

    return (
        <div>
            <Slider ref={slider} {...settings}>

                <div>
                    <div className="lg:flex items-center justify-center font-urbanist lg:space-y-0 space-y-6">

                        <div className="space-y-5 lg:w-1/2">
                            <h3 className="md:text-5xl text-2xl font-bold text-blue-100">01.</h3>
                            <h3 className="md:text-5xl text-2xl font-semibold">Domain & Hosting</h3>
                            <p className="lg:leading-relaxed md:text-2xl lg:text-lg text-white-50 lg:w-1/2">
                                You need to provide personal information to access offered services with traditional providers.
                            </p>
                        </div>

                        <div className="">
                            <img src={diff_1} alt="differnce" className="animate-float lg:w-full w-48 flex mx-auto"></img>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="lg:flex items-center justify-center font-urbanist lg:space-y-0 space-y-6">

                        <div className="space-y-5 lg:w-1/2">
                            <h3 className="md:text-5xl text-2xl font-bold text-blue-100">02.</h3>
                            <h3 className="md:text-5xl text-2xl font-semibold">Browsers</h3>
                            <p className="lg:leading-relaxed md:text-2xl lg:text-lg text-white-50 lg:w-1/2">
                                You give access to your personal online identity while using most browsers today.
                            </p>
                        </div>

                        <div className="">
                            <img src={diff_2} alt="differnce" className="animate-float lg:w-9/12 w-44 flex mx-auto"></img>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="lg:flex items-center justify-center font-urbanist lg:space-y-0 space-y-6">

                        <div className="space-y-5 lg:w-1/2">
                            <h3 className="md:text-5xl text-2xl font-bold text-blue-100">03.</h3>
                            <h3 className="md:text-5xl text-2xl font-semibold">Wallet</h3>
                            <p className="lg:leading-relaxed md:text-2xl lg:text-lg text-white-50 lg:w-1/2">
                                For online purchases you provide your credit card information along with personal details
                            </p>
                        </div>

                        <div className="">
                            <img src={diff_3} alt="differnce" className="animate-float lg:w-full w-44 flex mx-auto"></img>
                        </div>
                    </div>
                </div>

            </Slider>

            <div className="flex gap-6 justify-center relative z-20 mt-6">
                <button onClick={() => slider?.current?.slickPrev()} className="left-arrow bg-blue-50 hover:bg-blue-100 rounded-full p-2">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM17 9H1V7H17V9Z" fill="#fff" />
                    </svg>
                </button>

                <button onClick={() => slider?.current?.slickNext()} className="right-arrow bg-blue-50 hover:bg-blue-100 rounded-full p-2">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z" fill="#fff" />
                    </svg>
                </button>
            </div>
        </div>
    );
}