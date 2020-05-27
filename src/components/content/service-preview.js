import React from "react";
import { Link } from "gatsby";

import FeaturedImage from "../lib/featured-image";

const ServicePreview = ({ service }) => (
    <div className="flex flex-col w-full md:w-1/3 px-2 pt-8 xl:pt-4 pb-8 m-2">
        <div className="flex flex-col w-full">
            <Link 
                className="w-full h-full flex items-center justify-start"
                to={service.link.replace("https://wordpress.saltbox.solutions", "")}
            >
                <FeaturedImage 
                    featuredImage={service.featured_media}
                    className="object-contain w-12"
                />
            </Link>
            <div className="flex justify-start items-start w-full h-full">
                <h3 className="mt-6 mb-4 w-full text-left xl:text-left">
                    <Link
                        className="font-bold text-lg" 
                        to={service.link.replace("https://wordpress.saltbox.solutions", "")}
                        dangerouslySetInnerHTML={{ __html: service.title }}
                    />
                </h3>
            </div>
        </div>
        <div 
            dangerouslySetInnerHTML={{ __html: service.excerpt }}
            className="pt-3 xl:pt-0 pb-2 text-gray-700 text-sm"
        />
        <Link className="w-full text-blue-800 hover:text-teal-500 text-left font-bold text-sm" to={service.link.replace("https://wordpress.saltbox.solutions", "")}>
            Learn More &rarr;
        </Link>
    </div>
);

export default ServicePreview;