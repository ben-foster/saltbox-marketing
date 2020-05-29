import React from "react";

import CurveBottom from "../svg/curve-bottom";

const Hero = ({ children, className, fillColor, noCurve }) => {
    return (
        <div 
            className={`relative z-0 bg-dark-blue-to-blue-vertical ${className}`}
        >
            { children }
            { !noCurve && (
                <CurveBottom fillColor={ fillColor ? fillColor : "text-white" } />
            )}
                
        </div>
    );
};

export default Hero;