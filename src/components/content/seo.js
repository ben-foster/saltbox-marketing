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
            <div className="container mx-auto pt-24 pb-10 md:py-24 md:pt-12 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 px-16">
                    <img className="w-auto sb-box-shadow rounded-xl " src={seoResearchStrategy}/>
                </div>
                <div className="w-full md:w-1/2 px-16">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 mt-12 md:mt-4 text-violet-300"> Research & Strategy</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We help clients understand the upside potential and risks of SEO, benchmark competitor standings, and prioritize keyword targets and tactical initiatives.</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-10 md:py-24 flex flex-col-reverse md:flex-row items-center">
                <div className="w-full md:w-1/2 px-16">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 mt-12 md:mt-4 text-violet-300"> Technical SEO</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We help our clients implement technical SEO best practices like meta data optimization, load time optimization, website interlinking, and other on-page elements.</span>
                    </div>
                </div>

                <div className="w-full md:w-1/2 px-16">
                    <img className="w-auto sb-box-shadow rounded-xl " src={seoTechnicalSeo}/>
                </div>
            </div>

            <div className="container mx-auto py-10 md:py-24 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 px-16">
                    <img className="w-auto sb-box-shadow rounded-xl " src={seoContent}/>
                </div>
                <div className="w-full md:w-1/2 px-16">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 mt-12 md:mt-4 text-violet-300"> SEO Content</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We help our clients update existing content and create new content to provide search engines with optimal web pages to rank for target keywords.</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-10 md:py-24 flex flex-col-reverse md:flex-row items-center">
                <div className="w-full md:w-1/2 px-16">
                    <h2 className="font-bold text-2xl md:text-3xl text-left mb-2 mt-12 md:mt-4 text-violet-300"> Rank Tracking & Analytics</h2>
                    <div className="max-w-sm">
                        <span className="text-xs text-gray-150">We help our clients paint a picture of the impact investments are having on sales and other key business metrics.</span>
                    </div>
                </div>

                <div className="w-full md:w-1/2 px-16">
                    <img className="w-auto sb-box-shadow rounded-xl " src={seoRankTracking}/>
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