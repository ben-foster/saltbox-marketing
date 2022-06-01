import React from "react";
import seoResearchStrategy from "../../images/research-strategy.svg"
import seoTechnicalSeo from "../../images/technical-seo.svg"
import seoContent from "../../images/seo-content.svg"
import seoRankTracking from "../../images/rank-tracking.svg"
import HowToGetStarted from "./how-to-get-started";
import ContactUs from "./contact-us";

const SEO = () => {
    return (
        <>
            <div className="container mx-auto flex flex-col md:flex-row justify-center">
                <div className="flex items-center justify-center w-full md:w-auto px-6 py-12">
                    <img className="w-auto" src={seoResearchStrategy}/>
                </div>
                <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 text-blue-150"> Research & Strategy</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We help clients understand the upside potential and risks of SEO, benchmark competitor standings, and prioritize keyword targets and tactical initiatives.</span>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-center">
                <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 text-blue-150"> Technical SEO</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We help our clients implement technical SEO best practices like meta data optimization, load time optimization, website interlinking, and other on-page elements.</span>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full md:w-auto">
                    <img className="w-auto" src={seoTechnicalSeo}/>
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-center">
                <div className="flex items-center justify-center w-full md:w-auto px-6 py-12">
                    <img className="w-auto" src={seoContent}/>
                </div>
                <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 text-blue-150"> SEO Content</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We help our clients update existing content and create new content to provide search engines with optimal web pages to rank for target keywords.</span>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-center">
                <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 text-blue-150"> Rank Tracking & Analytics</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We help our clients paint a picture of the impact investments are having on sales and other key business metrics. </span>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full md:w-auto">
                    <img className="w-auto" src={seoRankTracking}/>
                </div>
            </div>

            <div className="container mx-auto">
                <HowToGetStarted type="seo"/>
            </div>

            <ContactUs bgColor="bg-blue-150" contactColor="bg-contact-blue"/>
        </>
    );
};

export default SEO;