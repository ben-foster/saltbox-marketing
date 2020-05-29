import React from "react";
import { Link } from "gatsby";

const HowToGetStarted = () => {
    return (
        <div className="flex flex-col mb-8">
            <h2 className="font-bold text-center">How to Get Started</h2>
            <div className="flex flex-col md:flex-row mb-6 justify-center p-2 md:p-0">
                <div className="flex flex-col bg-white rounded-lg px-5 py-8 mb-4 md:mb-0 md:mr-4 w-full md:w-64 shadow relative z-4">
                    <span className="flex items-center justify-center text-5xl font-bold text-purple-200">1.</span>
                    <div className="flex items-center justify-center pt-6">
                        <p className="text-sm"><Link to="/contact">Contact us</Link> to let us know how we can help you</p>
                    </div>
                    <svg className="hidden md:block absolute w-8" style={{ top: "46%", right: "-1rem" }} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 5.5L1 5.5M11 5.5L6.71429 10M11 5.5L6.71429 1" stroke="#9E9EFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg className="block md:hidden absolute w-8" style={{ right: "46%", bottom: "-1rem" }} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11.5L6 1.5M6 11.5L1.5 7.21429M6 11.5L10.5 7.21429" stroke="#9E9EFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="flex flex-col bg-white rounded-lg px-5 py-8 mb-4 md:mb-0 md:mr-4 w-full md:w-64 shadow relative z-3">
                    <span className="flex items-center justify-center text-5xl font-bold text-purple-200">2.</span>
                    <div className="flex items-center justify-center pt-6">
                        <p className="text-sm">We'll schedule a discovery call to talk about your business and goals</p>
                    </div>
                    <svg className="hidden md:block absolute w-8" style={{ top: "46%", right: "-1rem" }} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 5.5L1 5.5M11 5.5L6.71429 10M11 5.5L6.71429 1" stroke="#9E9EFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg className="block md:hidden absolute w-8" style={{ right: "46%", bottom: "-1rem" }} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11.5L6 1.5M6 11.5L1.5 7.21429M6 11.5L10.5 7.21429" stroke="#9E9EFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="flex flex-col bg-white rounded-lg px-5 py-8 mb-4 md:mb-0 md:mr-4 w-full md:w-64 shadow relative z-2">
                    <span className="flex items-center justify-center text-5xl font-bold text-purple-200">3.</span>
                    <div className="flex items-center justify-center pt-6">
                        <p className="text-sm">We'll then perform a free strategy analysis using your current SEO and PPC data</p>
                    </div>
                    <svg className="hidden md:block absolute w-8" style={{ top: "46%", right: "-1rem" }} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 5.5L1 5.5M11 5.5L6.71429 10M11 5.5L6.71429 1" stroke="#9E9EFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg className="block md:hidden absolute w-8" style={{ right: "46%", bottom: "-1rem" }} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11.5L6 1.5M6 11.5L1.5 7.21429M6 11.5L10.5 7.21429" stroke="#9E9EFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="flex flex-col bg-white rounded-lg px-5 py-8 w-full md:w-64 shadow relative z-1">
                    <span className="flex items-center justify-center text-5xl font-bold text-purple-200">4.</span>
                    <div className="flex items-center justify-center pt-6">
                        <p className="text-sm">Finally, we'll review those insights with you and suggest the right scope for our services</p>
                    </div>
                </div>
            </div>
            <p className="text-xs text-gray-700 px-12">PS - Don't be surprised if we end up suggesting you do not work with us. We sometimes analyze client data and recommend the pursuit of other marketing investments for growth outside of SEO or PPC. This process is designed to figure out if we can help and provide our honest recommendations - not sell.</p>
        </div>
    );
};

export default HowToGetStarted;