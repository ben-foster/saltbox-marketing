import React from "react";
import { Link } from "gatsby";

import FeaturedImage from "../lib/featured-image";

const ServicePreview = ({ service }) => (
    <div className="flex flex-col w-full md:w-1/3 px-6 pt-8 xl:pt-4 pb-8 m-2 shadow-md rounded-lg bg-white hover:shadow-lg">
        <div className="flex flex-col xl:flex-row w-full h-32">
            <Link 
                className="w-full h-full flex items-center justify-center"
                to={service.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}
            >
                <FeaturedImage 
                    featuredImage={service.featured_media}
                    className="object-contain w-16"
                />
            </Link>
            <div className="flex justify-center items-center w-full h-full">
                <h3 className="mt-4 xl:mt-0 mb-2 xl:pl-2 w-48 text-center xl:text-left">
                    <Link 
                        className="font-bold text-xl" 
                        to={service.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}
                        dangerouslySetInnerHTML={{ __html: service.title }}
                    />
                </h3>
            </div>
        </div>
        <div 
            dangerouslySetInnerHTML={{ __html: service.excerpt }}
            className="pt-3 xl:pt-0 pb-2 px-2 text-gray-700 text-sm"
        />
        <Link className="w-full text-blue-800 text-center font-bold" to={service.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}>
            Learn More
        </Link>
    </div>
);

export default ServicePreview;