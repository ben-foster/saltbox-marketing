import React from "react";
import arrow from "../../images/arrow.svg"
import check from "../../images/check.svg"

const HomeBannerTwo = () => {
    return (
        <div className="w-full mb-5 mr-0 bg-banner-bg p-20">

            <h1 className="font-semibold text-3xl leading-10 text-white text-center mb-5">You've got options. Select your service.</h1>

            <div className="rounded-lg flex items-center w-full bg-white m-auto p-10">
                <div className="flex-1 min-w-0 ml-10  bg-blue-rectangle bg-auto bg-no-repeat rounded-xl text-white p-13">
                    <p className="font-semibold text-xl leading-10">Take your search game to the next level with PPC, SEO, or a combo of both.</p>

                    <p className="text-xs font-medium">Check out what our PPC and SEO services can do for you and choose the service that fits your strategic goals. We also offer custom pricing and service packages, so please contact us for further details.</p>


                    <img className="w-6 ml-auto" src={arrow} alt="" />
                </div>

                <div className="flex-1 min-w-0 ml-10 p-16 bg-gray-100 rounded-xl">
                    <button type="button" className="inline-flex items-center px-8 mb-2 h-10 border border-transparent text-xs font-bold rounded-lg shadow-sm text-white bg-violet-300 hover:bg-violet-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        PPC
                    </button>

                    <div className="text-violet-300">
                        <p className="text-xs">Google & Microsoft Advertising Program</p>

                        <p className="text-xs text-gray-350">Starting at.</p>

                        <p className="text-xl">$2,200 <span className="text-lg"> /mo</span></p>

                        <p className="text-sm"><span className="bg-check-icon bg-no-repeat bg-cover w-20"></span>Paid Search</p>
                        <p className="text-sm"><span className="bg-check-icon bg-no-repeat bg-cover w-20"></span>Paid Search</p>
                        <p className="text-sm"><span className="bg-check-icon bg-no-repeat bg-cover w-20"></span>Paid Search</p>
                        <p className="text-sm"><span className="bg-check-icon bg-no-repeat bg-cover w-20"></span>Paid Search</p>

                        <button type="button" className="inline-flex items-center px-8 h-10 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-green-100 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                        </button>
                    </div>

                </div>

                <div className="flex-1 min-w-0 ml-10 p-16 bg-gray-100 rounded-xl">
                    <button type="button" className="inline-flex items-center px-8 mb-2 h-10 border border-transparent text-xs font-bold rounded-lg shadow-sm text-white bg-blue-150 hover:bg-blue-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        SEO
                    </button>

                    <div className="text-blue-150">
                        <p className="text-xs">Google & Microsoft Advertising Program</p>

                        <p className="text-xs text-gray-350">Starting at.</p>

                        <p className="text-xl">$2,200 <span className="text-lg"> /mo</span></p>

                        <p className="text-sm"><span className="bg-check-icon bg-no-repeat bg-cover w-20"></span>Paid Search</p>
                        <p className="text-sm"><span className="bg-check-icon bg-no-repeat bg-cover w-20"></span>Paid Search</p>
                        <p className="text-sm"><span className="bg-check-icon bg-no-repeat bg-cover w-20"></span>Paid Search</p>
                        <p className="text-sm"><span className="bg-check-icon bg-no-repeat bg-cover w-20"></span>Paid Search</p>

                        <button type="button" className="inline-flex items-center px-8 h-10 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-green-100 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeBannerTwo;
