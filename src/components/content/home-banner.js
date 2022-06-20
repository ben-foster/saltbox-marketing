import React from "react";
import googleSearch from "../../images/google-search.svg"

const HomeBanner = () => {
    return (
        <div className="w-full mb-5 mr-0 pr-0 bg-banner-bg p-10">
            <div className="rounded-lg flex items-center  w-full">
                <div className="flex-shrink-0 text-center mt-12">
                    <img className="w-65" src={googleSearch} alt="" />
                </div>

                <div className="flex-1 min-w-0 text-white ml-10 p-10 -mt-16">
                    <p className="font-semibold text-3xl leading-10">Take control of your search engine visibility.</p>

                    <p className="text-md font-medium">We help businesses develop holistic search engine marketing programs that drive sustainable, profitable customer acquisition.</p>

                    <button type="button" className="inline-flex items-center px-8 h-10 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-green-100 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
