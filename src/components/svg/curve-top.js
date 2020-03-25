import React from "react";

const CurveTop = ({ className, fillColor }) => {
    return (
        <svg className={`absolute top-0 w-full h-12 md:h-24 ${className}`} viewBox="0 0 1440 173" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
                <path className={`fill-current ${fillColor}`} d="M0 0 0 0 1440 0 1440 5.10614C709.665 20.4425 536.14 226.972 0.000304222 159.492C0.000304222 0 0 0 0 0" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect className={`fill-current ${fillColor}`} width="1440" height="173" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default CurveTop;