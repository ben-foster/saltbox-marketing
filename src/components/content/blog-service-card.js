import React from "react";
import { StaticQuery, Link } from "gatsby";

import FeaturedImage from "../lib/featured-image";

const BlogServiceCard = ({ featuredServices, categoryName }) => {
    let serviceTitle = "";
    if(categoryName == "Search Engine Optimization" || categoryName == "Pay-per-Click Advertising") {
        serviceTitle = categoryName;
    } else if(categoryName == "Analytics and Reporting") {
        serviceTitle = "Web Analytics Solutions";
    }

    const { edges: services } = featuredServices;
    const { node: service } = services.find(({ node: service }) => service.title == serviceTitle);
    if(!service) return null;

    return (
        <div className="flex flex-col md:flex-row px-12 pb-8">
            <div className="flex-grow flex flex-col">
                <h4 className="text-xl text-center md:text-left mb-2" dangerouslySetInnerHTML={{ __html: service.title }}></h4>
                <div className="text-sm text-center md:text-left text-gray-600" dangerouslySetInnerHTML={{ __html: service.excerpt }}></div>
                <Link className="text-center md:text-left text-blue-800 hover:text-teal-500 text-sm font-bold" to={service.link.replace("https://wordpress.saltbox.solutions", "")}>
                    Learn more &rarr;
                </Link>
            </div>
            <div className="flex flex-col flex-grow-0 items-center justify-start md:ml-12 order-first md:order-last">
                <FeaturedImage 
                    featuredImage={service.featured_media}
                    className="object-contain w-16 md:w-32 mb-8"
                />
            </div>
        </div>
    );
};

export default BlogServiceCard;