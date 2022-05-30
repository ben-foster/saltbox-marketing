import React from "react";
import ppcSearch from "../../images/paid-search.svg"
import ppcDisplayRetargeting from "../../images/display-retargeting.svg"
import ppcLandingPage from "../../images/landing-page.svg"
import ppcAnalyticsReporting from "../../images/analytics-reporting.svg"

const PPC = () => {
    return (
        <>
            <div className="container mx-auto flex flex-col md:flex-row justify-center">
                <div className="flex items-center justify-center w-full md:w-auto px-6 py-12">
                    <img className="w-auto" src={ppcSearch}/>
                </div>
                <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 text-violet-300"> Paid Search</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We manage and optimize paid search campaigns on Google and Bing to quickly drive traffic and leads from target search queries.</span>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-center">
                <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 text-violet-300"> Display Retargeting</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We use site-retargeting and segmentation strategies to stay top-of-mind with prospective customers using display retargeting campaigns.</span>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full md:w-auto">
                    <img className="w-auto" src={ppcDisplayRetargeting}/>
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-center">
                <div className="flex items-center justify-center w-full md:w-auto px-6 py-12">
                    <img className="w-auto" src={ppcLandingPage}/>
                </div>
                <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 text-violet-300"> Landing Pages</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We provide creative support through landing pages that maximize your conversion potential. Our landing pages will help you target the right users for your business.</span>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-center">
                <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 text-violet-300"> Analytics & Reporting</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We help our clients paint a picture of the impact investments are having on sales and other key business metrics. </span>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full md:w-auto">
                    <img className="w-auto" src={ppcAnalyticsReporting}/>
                </div>
            </div>
        </>
    );
};

export default PPC;