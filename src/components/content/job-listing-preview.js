import React from "react";
import { Link } from "gatsby";

import FeaturedImage from "../lib/featured-image";

const JobListingPreview = ({ jobListing }) => {
    return (
        <div className="mb-10">
            <div className="shadow-2xl rounded-xl py-10 md:px-8 bg-white flex flex-col md:flex-row items-center md:space-x-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                <div className="md:w-1/6 text-center">
                    <FeaturedImage 
                        featuredImage={jobListing.featured_media}
                        className="w-100"
                    />
                </div>
                <div className="md:w-1/3 min-w-0 md:pl-4">
                    <h3 
                        className="text-center md:text-left text-lg font-medium text-gray-900 normal-case mt-0" 
                        dangerouslySetInnerHTML={{ __html: jobListing.title }}
                    ></h3>
                    <p className="text-center md:text-left text-sm text-gray-500 truncate leading-tight mb-2">Full-time, Remote</p>
                    <Link 
                        type="button"
                        href="/contact/"
                        className="mt-3 inline-flex items-center px-6 py-3 rounded-lg border border-transparent text-sm leading-4 font-bold shadow-sm text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Apply now &rarr;
                    </Link>
                </div>

                <div className="flex pt-6 md:pt-0 px-6 md:px-0 md:w-1/2 ml-auto min-w-0">
                    <p className="text-center md:text-left text-sm font-light text-gray-150 leading-tight mb-0" dangerouslySetInnerHTML={{ __html: jobListing.excerpt }}></p>
                </div>
            </div>
        </div>
    );
};

export default JobListingPreview;