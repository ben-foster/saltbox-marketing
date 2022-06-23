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
            <div className="container mx-auto mt-12 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="cols-span-1">
                    <img className="w-auto" src={ppcSearch}/>
                </div>
                <div className="cols-span-1 py-24">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 text-violet-300"> Paid Search</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We manage and optimize paid search campaigns on Google and Bing to quickly drive traffic and leads from target search queries.</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-12 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                
                <div className="cols-span-1 p-24">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 text-violet-300"> Display Retargeting</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We use site-retargeting and segmentation strategies to stay top-of-mind with prospective customers using display retargeting campaigns.</span>
                    </div>
                </div>

                <div className="cols-span-1 text-left">
                    <img className="w-auto" src={ppcDisplayRetargeting}/>
                </div>
            </div>

            <div className="container mx-auto mt-12 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="cols-span-1">
                    <img className="w-auto" src={ppcLandingPage}/>
                </div>
                <div className="cols-span-1 py-24">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 text-violet-300"> Paid Search</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We provide creative support through landing pages that maximize your conversion potential. Our landing pages will help you target the right users for your business.</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-12 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                
                <div className="cols-span-1 p-24">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 text-violet-300"> Landing Pages</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We help our clients paint a picture of the impact investments are having on sales and other key business metrics. </span>
                    </div>
                </div>

                <div className="cols-span-1 text-left">
                    <img className="w-auto" src={ppcAnalyticsReporting}/>
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