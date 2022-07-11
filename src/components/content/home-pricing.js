import React from "react";
import { Link } from "gatsby";

import arrow from "../../images/arrow.svg";

const HomePricing = ({acf}) => {
    return (
        <div className="w-full mb-5 mr-0 md:bg-banner-bg bg-cover px-4 pt-10 md:p-20">
            <h1 className="px-4 md:px-0 font-semibold text-2xl md:text-4xl leading-10 text-blue-150 md:text-white text-center mb-5">{acf.pricing_title}</h1>
            <div className="rounded-lg w-full bg-white m-auto pt-4 md:p-10 flex flex-col md:flex-row justify-between">
                <div className="hidden md:flex flex-col bg-blue-rectangle bg-cover bg-no-repeat rounded-xl text-white p-13 w-1/3">
                    <p className="font-semibold text-xl leading-normal mb-6">{acf.pricing_subtitle}</p>
                    <p className="text-sm leading-relaxed font-medium mb-32">{acf.pricing_description}</p>
                    <img className="w-6 ml-auto mt-auto" src={arrow} alt="" />
                </div>

                <div className="flex flex-col p-6 md:p-13 bg-gray-100 shadow md:shadow-none rounded-xl w-full md:w-1/3 md:ml-6">
                    <div className="w-auto mr-auto inline-flex items-center p-2 mb-2 h-12 border border-transparent text-4xl font-semibold rounded-lg shadow-sm text-white bg-violet-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        PPC
                    </div>

                    <div className="text-violet-300">
                        <p className="text-base leading-tight">{acf.ppc_pricing_title}</p>
                        <span className="text-xs text-gray-350">Starting at</span>
                        <p className="leading-tight text-3xl font-bold">${acf.ppc_pricing_starting_at}<span className="text-lg font-normal"> /mo</span></p>
                        
                        {acf.ppc_pricing_features && acf.ppc_pricing_features.map(({ ppc_pricing_feature }) => (
                            <div className="flex items-center mb-6">
                                <div className="bg-check-icon bg-no-repeat bg-cover w-4 h-4 mr-4"></div>
                                <span className="text-sm">{ppc_pricing_feature}</span>
                            </div>
                        ))}

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
                        <p className="text-base leading-tight">{acf.seo_pricing_title}</p>
                        <span className="text-xs text-gray-350">Starting at</span>
                        <p className="leading-tight text-3xl font-bold">${acf.seo_pricing_starting_at}<span className="text-lg font-normal"> /mo</span></p>
                        
                        {acf.seo_pricing_features && acf.seo_pricing_features.map(({ seo_pricing_feature }) => (
                            <div className="flex items-center mb-6">
                                <div className="bg-check-icon bg-no-repeat bg-cover w-4 h-4 mr-4"></div>
                                <span className="text-sm">{seo_pricing_feature}</span>
                            </div>
                        ))}

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
