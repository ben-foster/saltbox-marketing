import React from "react";
import { Link } from "gatsby";

const HomeHero = (props) => {
    const { background, taglineLineOne, taglineLineTwo } = props;
    return (
        <div 
            style={{ backgroundImage: `linear-gradient(153.43deg, #62F4EA -0.08%, #4825D4 99.92%)` }}
            className="relative z-0"
        >
            <div className="container mx-auto flex flex-row flex-wrap items-center pt-48 pb-32 px-20">
                <div className="flex flex-col w-full items-center justify-center">
                    <h1 className="flex flex-col text-center font-bold mb-16">
                        <span className="text-white whitespace-no-wrap">{taglineLineOne}</span>
                        <span className="text-teal-100 whitespace-no-wrap">{taglineLineTwo}</span>
                    </h1>
                    <Link
                        to="#"
                        className="bg-teal-to-dark text-white font-bold px-6 py-4 text-lg uppercase rounded-full"
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
            <svg className="absolute bottom-0 w-full h-12 md:h-24" viewBox="0 0 1440 174" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                    <path d="M1440 1C709.665 16.3459 536.14 223.004 0 155.482L0 174L1440 174V1Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="1440" height="174" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default HomeHero;