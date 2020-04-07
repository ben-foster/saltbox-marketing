import React from "react";
import { StaticQuery, Link } from "gatsby";

import FeaturedImage from "../lib/featured-image";
import { FEATURED_SERVICES_QUERY } from "./featured-services";

const BlogServiceCard = ({ categoryName }) => {
    let serviceTitle = "";
    if(categoryName == "Search Engine Optimization" || categoryName == "Pay-per-Click Advertising") {
        serviceTitle = categoryName;
    } else if(categoryName == "Analytics and Reporting") {
        serviceTitle = "Web Analytics Solutions";
    }

    return (
        <StaticQuery
            query={FEATURED_SERVICES_QUERY}
            render={data => {
                const { edges: services } = data.allWordpressWpServices
                const { node: service } = services.find(({ node: service }) => service.title == serviceTitle);
                if(!service) return null;

                return (
                    <div className="flex flex-col md:flex-row px-12 py-8">
                        <div className="flex flex-col flex-grow-0 items-center justify-start mr-12">
                            <FeaturedImage 
                                featuredImage={service.featured_media}
                                className="object-contain w-32"
                            />
                        </div>
                        <div className="flex-grow flex flex-col">
                            <h4 className="text-xl text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: service.title }}></h4>
                            <div className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: service.excerpt }}></div>
                            <Link className="text-gray-500 text-sm font-bold" to={service.link.replace("https://wordpress.saltbox.solutions", "")}>
                                Learn more
                            </Link>
                        </div>
                    </div>
                );
            }}
        />
    );
};

export default BlogServiceCard;