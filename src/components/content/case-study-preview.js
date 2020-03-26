import React from "react";
import { Link } from "gatsby";

import FeaturedImage from "../lib/featured-image";
import placeholder from "../../images/placeholder.png";

const CaseStudyPreview = ({ caseStudy }) => (
    <div className="flex flex-col items-center bg-white w-full p-12 rounded-lg z-10 shadow">
        <h3 className="mt-0">{caseStudy.title}</h3>
        <p>{caseStudy.excerpt}</p>
        <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2">
                <div className="flex flex-col items-center mx-auto border rounded">
                    <div className="flex flex-col items-center justify-start w-full p-2">
                        <span className="text-green-500 font-bold text-6xl">+50%</span>
                        <span className="text-gray-600 text-2xl">Lead Volume</span>
                    </div>
                    <div className="flex flex-row flex-no-wrap w-full border-t">
                        <div className="flex flex-col items-center justify-start w-1/2 p-4">
                            <span className="text-green-500 font-bold text-5xl">-20%</span>
                            <span className="text-gray-600 text-lg">Cost per Lead</span>
                        </div>
                        <div className="flex flex-col items-center justify-start w-1/2 p-4 border-l">
                            <span className="text-green-500 font-bold text-5xl">-$24</span>
                            <span className="text-gray-600 text-lg">Cost per Lead</span>
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
        </div>
        <div className="pt-12">
            <Link className="font-bold text-blue-700" to={caseStudy.link.replace("https://wordpress.saltbox.solutions", "")}>
                Learn more
            </Link>
        </div>
    </div>
);

export default CaseStudyPreview;