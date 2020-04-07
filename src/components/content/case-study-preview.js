import React from "react";
import { Link } from "gatsby";

import FeaturedImage from "../lib/featured-image";
import placeholder from "../../images/placeholder.png";

const CaseStudyPreview = ({ caseStudy }) => (
    <div className="flex flex-col items-center bg-white w-full max-w-4xl mx-auto p-12 rounded-lg z-10 shadow">
        {/* <h3 className="mt-0">{caseStudy.title}</h3>
        <p>{caseStudy.excerpt}</p> */}
        <div className="flex flex-col w-full">
            <div className="flex flex-row items-center justify-center mx-auto">
                <div className="flex flex-row items-center px-6 py-2">
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 21L13.6701 10.3299L21.4791 18.3579L36.5085 3M36.5085 3H26.8995M36.5085 3V12.7732" stroke="#7BC47F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className="flex flex-col items-center justify-start w-full p-2">
                        <span className="mono text-green-500 text-5xl">+50%</span>
                        <span className="mono text-gray-600 text-md">Lead Volume</span>
                    </div>
                </div>
                <div className="flex flex-row items-center px-6 py-2">
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 21L13.6701 10.3299L21.4791 18.3579L36.5085 3M36.5085 3H26.8995M36.5085 3V12.7732" stroke="#7BC47F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className="flex flex-col items-center justify-start w-full p-2">
                        <span className="mono text-green-500 text-5xl">+50%</span>
                        <span className="mono text-gray-600 text-md">Lead Volume</span>
                    </div>
                </div>
                <div className="flex flex-row items-center px-6 py-2">
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 21L13.6701 10.3299L21.4791 18.3579L36.5085 3M36.5085 3H26.8995M36.5085 3V12.7732" stroke="#7BC47F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className="flex flex-col items-center justify-start w-full p-2">
                        <span className="mono text-green-500 text-5xl">+50%</span>
                        <span className="mono text-gray-600 text-md">Lead Volume</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2">
            <div className="flex flex-col items-center justify-center">
                <div className="p-4 text-xl" dangerouslySetInnerHTML={{ __html: caseStudy.title }}></div>
                <div className="flex justify-center">
                    <div className="flex flex-row flex-no-wrap items-center p-4">
                        <img className="w-12 h-12 rounded-full" src={placeholder} alt=""/>
                        <div className="flex flex-col flex-no-wrap justify-center pl-4">
                            <p className="m-0 leading-tight">Full Name</p>
                            <p className="m-0 text-sm italic">Job Title, Company Name</p>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-12">
            <Link className="font-bold text-blue-700" to={caseStudy.link.replace("https://wordpress.saltbox.solutions", "")}>
                Learn more
            </Link>
        </div>
    </div>
);

export default CaseStudyPreview;