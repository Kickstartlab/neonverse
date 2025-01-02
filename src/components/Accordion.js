import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div data-aos='fade-up' data-aos-delay='50' className="accordion-item p-4 cursor-pointer bg-black-25 rounded-md dark:bg-[#131b4c]">
            <div className="accordion-title flex justify-between items-start dark:text-white-100 text-blue-50"
                onClick={() => setIsActive(!isActive)}>

                <div className='font-libre font-semibold lg:text-lg'>
                    {title}
                </div>

                <div className='p-2 rounded-sm text-white-100 bg-blue-100 w-6 h-6 flex items-center justify-center'>
                    {isActive ? '-' : '+'}
                </div>

            </div>
            {isActive && <div className="accordion-content pt-6 duration-100">{content}</div>}
        </div>
    );
};

export default Accordion
