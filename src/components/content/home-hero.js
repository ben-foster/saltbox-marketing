import React from "react";

import Hero from "./hero";

import homeImg from "../../images/home-img.svg"

const HomeHero = (props) => {
    return (
        <Hero className="bg-home-bg bg-auto bg-no-repeat bg-right mb-10 h-80">
            <div className="container mx-auto mt-48 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="cols-span-1 mt-32">
                    <h2 className="font-bold text-blue-350 leading-7 text-2xl md:text-3xl text-left mb-0">Get more customers from search engines.</h2>
                    <div className="max-w-sm text-xs mt-3">
                        <span>We help businesses develop holistic search engine marketing programs that drive sustainable, profitable customer acquisition.</span>
                    </div>

                    <button type="button" className="mt-3 inline-flex items-center px-4 py-2 rounded-sm border border-transparent text-sm leading-4 font-medium shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Get started
                    </button>
                </div>

                <div className="cols-span-1 text-left">
                    <img className="w-auto" src={homeImg}/>
                </div>
            </div>
        </Hero>
    );
};

export default HomeHero;
