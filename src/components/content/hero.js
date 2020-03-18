import React from 'react';

const Hero = ({children}) => {
    return (
        <div 
            style={{ backgroundImage: `linear-gradient(153.43deg, #62F4EA -0.08%, #4825D4 99.92%)` }}
            className="relative z-0"
        >
            { children }
            <svg className="absolute bottom-0 w-full h-12 md:h-24" viewBox="0 0 1440 174" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                    <path d="M1440 1C709.665 16.3459 536.14 223.004 0 155.482L0 174L1440 174V1Z" fill="#EDF2F7" />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="1440" height="174" fill="#EDF2F7"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default Hero;