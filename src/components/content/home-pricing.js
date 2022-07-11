import React from "react";
import { Link } from "gatsby";

import arrow from "../../images/arrow.svg";

const HomePricing = () => {
    return (
        <div className="w-full mb-5 mr-0 md:bg-banner-bg bg-cover px-4 pt-10 md:p-20">
            <h1 className="px-4 md:px-0 font-semibold text-2xl md:text-4xl leading-10 text-blue-150 md:text-white text-center mb-5">You've got options. Select your service.</h1>
            <div className="rounded-lg w-full bg-white m-auto pt-4 md:p-10 flex flex-col md:flex-row justify-between">
                <div className="hidden md:flex flex-col bg-blue-rectangle bg-cover bg-no-repeat rounded-xl text-white p-13 w-1/3">
                    <p className="font-semibold text-xl leading-normal mb-6">Take your search game to the next level with PPC, SEO, or a combo of both.</p>
                    <p className="text-sm leading-relaxed font-medium mb-32">Check out what our PPC and SEO services can do for you and choose the service that fits your strategic goals. We also offer custom pricing and service packages, so please contact us for further details.</p>
                    <img className="w-6 ml-auto mt-auto" src={arrow} alt="" />
                </div>

                <div className="flex flex-col p-6 md:p-13 bg-gray-100 shadow md:shadow-none rounded-xl w-full md:w-1/3 md:ml-6">
                    <div className="w-auto mr-auto inline-flex items-center p-2 mb-2 h-12 border border-transparent text-4xl font-semibold rounded-lg shadow-sm text-white bg-violet-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        PPC
                    </div>

                    <div className="text-violet-300">
                        <p className="text-base leading-tight">Google & Microsoft Advertising Program</p>
                        <span className="text-xs text-gray-350">Starting at</span>
                        <p className="leading-tight text-3xl font-bold">$2,200 <span className="text-lg font-normal"> /mo</span></p>
                        
                        <div className="flex items-center mb-6">
                            <div className="bg-check-icon bg-no-repeat bg-cover w-4 h-4 mr-4"></div>
                            <span className="text-sm">Paid Search</span>
                        </div>
                        <div className="flex items-center mb-6">
                            <div className="bg-check-icon bg-no-repeat bg-cover w-4 h-4 mr-4"></div>
                            <span className="text-sm">Display Retargeting</span>
                        </div>
                        <div className="flex items-center mb-6">
                            <div className="bg-check-icon bg-no-repeat bg-cover w-4 h-4 mr-4"></div>
                            <span className="text-sm">Google Search & Display Network</span>
                        </div>
                        <div className="flex items-center mb-6">
                            <div className="bg-check-icon bg-no-repeat bg-cover w-4 h-4 mr-4"></div>
                            <span className="text-sm">Microsoft/Bing Network</span>
                        </div>

                        <Link 
                            type="button"
                            className="font-bold inline-flex items-center px-8 h-10 border border-transparent text-sm rounded-lg shadow-sm text-white bg-green-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            to="/services/pay-per-click-advertising/"
                        >
                            Learn More
                        </Link>
                    </div>

                </div>

                <div className="flex flex-col mt-8 md:mt-0 p-6 md:p-13 bg-gray-100 rounded-xl shadow md:shadow-none w-full md:w-1/3 md:ml-3">
                    <div className="w-auto mr-auto inline-flex items-center p-2 mb-2 h-12 border border-transparent text-4xl font-semibold rounded-lg shadow-sm text-white bg-blue-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        SEO
                    </div>

                    <div className="text-blue-150">
                        <p className="text-base leading-tight">Search Engine Optimization Program</p>
                        <span className="text-xs text-gray-350">Starting at</span>
                        <p className="leading-tight text-3xl font-bold">$3,000 <span className="text-lg font-normal"> /mo</span></p>
                        
                        <div className="flex items-center mb-6">
                            <div className="bg-check-icon bg-no-repeat bg-cover w-4 h-4 mr-4"></div>
                            <span className="text-sm">SEO Research & Strategy</span>
                        </div>
                        <div className="flex items-center mb-6">
                            <div className="bg-check-icon bg-no-repeat bg-cover w-4 h-4 mr-4"></div>
                            <span className="text-sm">SEO Audits</span>
                        </div>
                        <div className="flex items-center mb-6">
                            <div className="bg-check-icon bg-no-repeat bg-cover w-4 h-4 mr-4"></div>
                            <span className="text-sm">SEO Content</span>
                        </div>
                        <div className="flex items-center mb-6">
                            <div className="bg-check-icon bg-no-repeat bg-cover w-4 h-4 mr-4"></div>
                            <span className="text-sm">Technical SEO</span>
                        </div>

                        <Link 
                            type="button"
                            className="font-bold inline-flex items-center px-8 h-10 border border-transparent text-sm rounded-lg shadow-sm text-white bg-green-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            to="/services/search-engine-optimization/"
                        >
                            Learn More
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomePricing;
