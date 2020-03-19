import React from "react";

import CurveBottom from "../svg/curve-bottom";

const Hero = ({ children, className, fillColor }) => {
    return (
        <div 
            style={{ backgroundImage: `linear-gradient(153.43deg, #62F4EA -0.08%, #4825D4 99.92%)` }}
            className={`relative z-0 ${className}`}
        >
            { children }
            <CurveBottom fillColor="text-gray-100" />
        </div>
    );
};

export default Hero;