import React from "react";

import Hero from "./hero";

import homeImg from "../../images/home-img.svg"
import { Link } from "gatsby";

const HomeHero = (props) => {
    return (
        // <Hero className="bg-home-bg bg-auto bg-no-repeat bg-right mb-10 h-80">
        <Hero className="md:mb-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between pt-24 md:py-24">
                <div className="w-full md:w-2/5">
                    <h2 className="font-bold max-w-md text-white md:text-blue-350 leading-snug tracking-wide text-2xl md:text-4xl text-left mb-0">Get more customers from search engines.</h2>
                    <div className="max-w-sm text-white md:text-gray-800 text-sm leading-relaxed mt-3">
                        We help businesses develop holistic search engine marketing programs that drive sustainable, profitable customer acquisition.
                    </div>
                    <Link 
                        type="button"
                        href="/contact/"
                        className="mt-3 inline-flex items-center px-6 py-3 rounded-lg border border-transparent text-sm leading-4 font-bold shadow-sm text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Get started
                    </Link>
                </div>

                <div className="w-full md:w-1/2 py-16">
                    <img className="w-auto" width="640" height="425" src={homeImg}/>
                </div>
            </div>
        </Hero>
    );
};

export default HomeHero;
