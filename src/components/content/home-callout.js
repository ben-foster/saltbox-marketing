import React from "react";
import { Link } from "gatsby";
import googleSearch from "../../images/google-search.svg"

const HomeCallout = () => {
    return (
        <div className="w-full mb-5 md:mr-0 md:pr-0 bg-banner-bg bg-cover px-4 pt-20 pb-12 md:p-10">
            <div className="rounded-lg flex flex-col md:flex-row items-center w-full">
                <div className="w-full md:w-1/2 md:p-12">
                    <img className="w-full sb-box-shadow" width="700" height="400" src={googleSearch} alt="" />
                </div>

                <div className="w-full md:w-1/2 text-white md:ml-10 px-4 py-12 md:p-10 flex flex-col items-center md:items-start">
                    <h2 className="font-semibold text-xl md:text-4xl text-center md:text-left leading-snug max-w-md mb-6">Take control of your search engine visibility.</h2>
                    <p className="text-sm text-center md:text-left leading-relaxed font-medium mb-8 max-w-sm">See if you qualify for a free discovery assessment.</p>
                    <Link to="/contact" className="font-bold inline-flex items-center px-8 h-10 border border-transparent text-sm rounded-lg shadow-sm text-white bg-green-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCallout;
