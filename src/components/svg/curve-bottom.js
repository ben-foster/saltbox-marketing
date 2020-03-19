import React from "react";

const CurveBottom = ({ className, fillColor }) => {
    return (
        <svg className={`absolute bottom-0 w-full h-12 md:h-24 ${className}`} viewBox="0 0 1440 174" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
                <path className={`fill-current ${fillColor}`} d="M1440 1C709.665 16.3459 536.14 223.004 0 155.482L0 174L1440 174V1Z" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect className={`fill-current ${fillColor}`} width="1440" height="174" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default CurveBottom;