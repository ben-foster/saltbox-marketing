import React, { useState }  from 'react';

const Hamburger = ({ className }) => {
    const [ hideMobileNav, setHideMobileNav ] = useState(false);

    const showOrHideMobileNav = () => {
        hideMobileNav ? setHideMobileNav(false) : setHideMobileNav(true);
        
        document.querySelectorAll(".nav").forEach(elem => {
            if (hideMobileNav) {
                elem.classList.add("hidden");
                elem.classList.remove("flex");
            } else {
                elem.classList.add("flex");
                elem.classList.remove("hidden");
            }
        })
    }

    return (
        <button 
            className={`flex items-center justify-center w-8 h-8 p-2 flex-grow-0 ml-auto md:hidden ${className ? className : ""}`}
            onClick={showOrHideMobileNav}
        >
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 16H16" className="stroke-current text-white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 9H16" className="stroke-current text-white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 2H16" className="stroke-current text-white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    );
};

export default Hamburger;