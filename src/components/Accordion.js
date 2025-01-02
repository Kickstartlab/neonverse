import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item md:p-6 p-4 cursor-pointer rounded-md bg-[#131b4c]">
            <div className="accordion-title flex justify-between items-start"
                onClick={() => setIsActive(!isActive)}>

                <div className='font-libre font-semibold lg:text-xl text-white-100'>
                    {title}
                </div>

                <div className='p-2 rounded-sm text-white-100 bg-blue-100 w-6 h-6 flex items-center justify-center'>
                    {isActive ? '-' : '+'}
                </div>

            </div>
            {isActive && <div className="accordion-content text-white-100 pt-6 duration-100">{content}</div>}
        </div>
    );
};

export default Accordion
