import React from "react";

const CurveBottom = ({ className, fillColor }) => {
    return (
        <svg className={`absolute bottom-0 w-full h-12 md:h-24 ${className}`} viewBox="0 0 1440 220" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <g filter="url(#filter0_d)">
                    <path className={`fill-current ${fillColor}`} d="M1440 47C709.665 62.3459 536.14 269.004 0 201.482L0 220L1440 220V47Z"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_d" x="-12" y="31" width="1464" height="220" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="-4"/>
                    <feGaussianBlur stdDeviation="12"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <clipPath id="clip0">
                    <rect className={`fill-current ${fillColor}`} width="1440" height="220" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default CurveBottom;