import React from "react";

import ppc from "../../images/ppc-bg.svg";
import seo from "../../images/seo-bg.svg";
import about from "../../images/about-bg.svg";
import careers from "../../images/careers-bg.svg";
import blog from "../../images/blog-bg.svg";
import mobilePpc from "../../images/mobile-ppc-bg.svg";
import mobileSeo from "../../images/mobile-seo-bg.svg";
import mobileAbout from "../../images/mobile-about-bg.svg";
import mobileCareers from "../../images/mobile-careers-bg.svg";
import mobileBlog from "../../images/mobile-blog-bg.svg";

const Hero = ({ children, className, page }) => {
    return (
        <div 
            className={`relative md:static z-10 p-8 ${className}`}
        >
            { children }
            { page === "Pay-per-Click Advertising" && (
                <>
                    <img className="absolute right-0 top-0 left-0 hidden md:block" style={{ zIndex: -1, width: typeof window !== "undefined" ? window.innerWidth : "auto" }} src={ppc} alt="" />
                    <img className="absolute right-0 top-0 left-0 block md:hidden" style={{ zIndex: -1, width: typeof window !== "undefined" ? window.innerWidth : "auto" }} src={mobilePpc} alt="" />
                </>
            )}
            { page === "Search Engine Optimization" && (
                <>
                    <img className="absolute right-0 top-0 left-0 hidden md:block" style={{ zIndex: -1, width: typeof window !== "undefined" ? window.innerWidth : "auto" }} src={seo} alt="" />
                    <img className="absolute right-0 top-0 left-0 block md:hidden" style={{ zIndex: -1, width: typeof window !== "undefined" ? window.innerWidth : "auto" }} src={mobileSeo} alt="" />
                </>
            )}
            { page === "About Us" && (
                <>
                    <img className="absolute right-0 top-0 left-0 hidden md:block" style={{ zIndex: -1, width: typeof window !== "undefined" ? window.innerWidth : "auto" }} src={about} alt="" />
                    {/* <img className="absolute right-0 top-0 left-0 block md:hidden" style={{ zIndex: "-1", width: typeof window !== "undefined" ? window.innerWidth : "auto" }} src={mobileAbout} alt="" /> */}
                </>
            )}
            { page === "Careers" && (
                <>
                    <img className="absolute right-0 top-0 left-0 hidden md:block" style={{ zIndex: -1, width: typeof window !== "undefined" ? window.innerWidth : "auto" }} src={careers} alt="" />
                    <img className="absolute right-0 top-0 left-0 block md:hidden" style={{ zIndex: -1, width: typeof window !== "undefined" ? window.innerWidth : "auto" }} src={mobileCareers} alt="" />
                </>
            )}
            { page === "Blog" && (
                <>
                    <img className="absolute right-0 top-0 left-0 hidden md:block" style={{ zIndex: -1, width: typeof window !== "undefined" ? window.innerWidth : "auto" }} src={blog} alt="" />
                    <img className="absolute right-0 top-0 left-0 block md:hidden" style={{ zIndex: -1, width: typeof window !== "undefined" ? window.innerWidth : "auto" }} src={mobileBlog} alt="" />
                </>
            )}
        </div>
    );
};

export default Hero;