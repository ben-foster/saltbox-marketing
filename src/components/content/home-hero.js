import React from "react";

import Hero from "./hero";

import homeImg from "../../images/home-img.svg"

const HomeHero = (props) => {
    return (
        <Hero className="bg-home-bg bg-auto bg-no-repeat bg-right">
            <div className="flex flex-row flex-wrap items-center px-0 md:px-2 py-6 container mx-auto h-screen">
                <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                    <h2 className="font-bold text-blue-350 leading-7 text-2xl md:text-3xl text-left mb-0">Get more customers from search engines.</h2>
                    <div className="max-w-sm text-xs mt-3">
                        <span>We help businesses develop holistic search engine marketing programs that drive sustainable, profitable customer acquisition.</span>
                    </div>

                    <button type="button" className="mt-3 inline-flex items-center px-4 py-2 rounded-sm border border-transparent text-sm leading-4 font-medium shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Get started
                    </button>
                </div>

                <div className="flex items-center justify-center w-full md:w-auto px-6 py-12">
                    <img className="md:w-96 lg:w-3/6 sm:w-40 xs:w-40" src={homeImg}/>
                </div>
            </div>
        </Hero>
    );
};

export default HomeHero;
