import React from "react";
import { Link } from "gatsby";

import FeaturedImage from "../lib/featured-image";

const JobListingPreview = ({ jobListing }) => {
    return (
        <div className="p-0 sm:p-4 mb-4 w-full">
            <div 
                className="flex flex-col md:flex-row w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow"
            >
                {/* Category */}
                <div className="flex flex-grow-0 justify-center items-center w-full sm:w-1/3 lg:w-48 p-8 sm:p-4 lg:p-8">
                    <Link 
                        className="w-full h-full flex items-center justify-start"
                        to="/contact"
                        // TODO: create link to actual job listing page
                        // to={jobListing.link.replace("https://wordpress.saltbox.solutions", "")}
                    >
                        <FeaturedImage 
                            featuredImage={jobListing.featured_media}
                            className="object-contain w-24 mx-auto md:w-full"
                        />
                    </Link>
                </div>
                <div className="flex flex-col w-full sm:w-2/3">
                    {/* Title */}
                    <h3 className="text-left text-xl font-bold normal-case mt-4 mb-2">
                        <Link 
                            className="font-bold"
                            to="/contact"
                            // TODO: create link to actual job listing page
                            // to={jobListing.link.replace("https://wordpress.saltbox.solutions", "")}
                            dangerouslySetInnerHTML={{ __html: jobListing.title }}
                        />
                    </h3>
                    {/* Date */}
                    <p 
                        className="text-xs text-left mb-2 no-underline text-xs" 
                        dangerouslySetInnerHTML={{ __html: jobListing.date }}
                    />
                    {/* Excerpt */}
                    <div 
                        dangerouslySetInnerHTML={{ __html: jobListing.excerpt }}
                        className="text-sm"
                    />
                    <Link 
                        className="flex flex-grow-0 font-bold text-blue-800 hover:text-teal-500 w-full text-left mt-auto text-sm" 
                        to="/contact"
                        // TODO: create link to actual job listing page
                        // to={jobListing.link.replace("https://wordpress.saltbox.solutions", "")}
                    >
                        Apply now &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobListingPreview;