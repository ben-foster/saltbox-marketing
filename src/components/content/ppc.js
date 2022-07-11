import React from "react";
import ppcSearch from "../../images/paid-search.svg"
import ppcDisplayRetargeting from "../../images/display-retargeting.svg"
import ppcLandingPage from "../../images/landing-page.svg"
import ppcAnalyticsReporting from "../../images/analytics-reporting.svg"
import HowToGetStarted from "./how-to-get-started";
import ContactUs from "./contact-us";

const PPC = ({ acf }) => {
    return (
        <>
            <div className="container mx-auto pt-24 pb-10 md:py-24 md:pt-12 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 px-16">
                    <img className="w-auto sb-box-shadow rounded-xl z-10" width="500" height="290" src={ppcSearch}/>
                </div>
                <div className="w-full md:w-1/2 px-16">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 mt-12 md:mt-4 text-violet-300">{acf.feature_one_title}</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">{acf.feature_one_description}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-10 md:py-24 flex flex-col-reverse md:flex-row items-center">
                <div className="w-full md:w-1/2 px-16">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 mt-12 md:mt-4 text-violet-300">{acf.feature_two_title}</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">{acf.feature_two_description}</span>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-16">
                    <img className="w-auto sb-box-shadow rounded-xl " width="500" height="290" src={ppcDisplayRetargeting}/>
                </div>
            </div>

            <div className="container mx-auto py-10 md:py-24 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 px-16">
                    <img className="w-auto sb-box-shadow rounded-xl " width="500" height="290" src={ppcLandingPage}/>
                </div>
                <div className="w-full md:w-1/2 px-16">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 mt-12 md:mt-4 text-violet-300">{acf.feature_three_title}</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">{acf.feature_three_description}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-10 md:py-24 flex flex-col-reverse md:flex-row items-center">
                <div className="w-full md:w-1/2 px-16">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 mt-12 md:mt-4 text-violet-300">{acf.feature_four_title}</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">{acf.feature_four_description}</span>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-16">
                    <img className="w-auto sb-box-shadow rounded-xl " width="500" height="290" src={ppcAnalyticsReporting}/>
                </div>
            </div>

            <div className="container mx-auto">
                <HowToGetStarted type="ppc"/>
            </div>

            <ContactUs bgColor="bg-violet-300" contactColor="bg-contact-purple"/>
        </>
    );
};

export default PPC;