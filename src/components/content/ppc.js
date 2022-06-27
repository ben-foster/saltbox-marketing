import React from "react";
import ppcSearch from "../../images/paid-search.svg"
import ppcDisplayRetargeting from "../../images/display-retargeting.svg"
import ppcLandingPage from "../../images/landing-page.svg"
import ppcAnalyticsReporting from "../../images/analytics-reporting.svg"
import HowToGetStarted from "./how-to-get-started";
import ContactUs from "./contact-us";

const PPC = () => {
    return (
        <>
            <div className="container mx-auto pt-24 pb-10 md:py-24 md:pt-12 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 px-16">
                    <img className="w-auto sb-box-shadow rounded-xl z-10" src={ppcSearch}/>
                </div>
                <div className="w-full md:w-1/2 px-16">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 mt-12 md:mt-4 text-violet-300"> Paid Search</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We manage and optimize paid search campaigns on Google and Bing to quickly drive traffic and leads from target search queries.</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-10 md:py-24 flex flex-col-reverse md:flex-row items-center">
                <div className="w-full md:w-1/2 px-16">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 mt-12 md:mt-4 text-violet-300"> Display Retargeting</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We use site-retargeting and segmentation strategies to stay top-of-mind with prospective customers using display retargeting campaigns.</span>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-16">
                    <img className="w-auto sb-box-shadow rounded-xl " src={ppcDisplayRetargeting}/>
                </div>
            </div>

            <div className="container mx-auto py-10 md:py-24 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 px-16">
                    <img className="w-auto sb-box-shadow rounded-xl " src={ppcLandingPage}/>
                </div>
                <div className="w-full md:w-1/2 px-16">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 mt-12 md:mt-4 text-violet-300"> Paid Search</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We provide creative support through landing pages that maximize your conversion potential. Our landing pages will help you target the right users for your business.</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-10 md:py-24 flex flex-col-reverse md:flex-row items-center">
                <div className="w-full md:w-1/2 px-16">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 mt-12 md:mt-4 text-violet-300"> Landing Pages</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We help our clients paint a picture of the impact investments are having on sales and other key business metrics. </span>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-16">
                    <img className="w-auto sb-box-shadow rounded-xl " src={ppcAnalyticsReporting}/>
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