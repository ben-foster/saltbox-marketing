import React from "react";
import { Link } from "gatsby";

import FeaturedImage from "../lib/featured-image";

const ServicePreview = ({ service }) => (
    <div className="flex flex-col w-64 p-4">
        {/* Featured Image */}
        <div className="w-full h-32">
            <Link to={service.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}>
                <FeaturedImage 
                    featuredImage={service.featured_media}
                    className="object-contain"
                />
            </Link>
        </div>
        {/* Title */}
        <div className="flex justify-center items-center w-full h-24">
            <h3 className="text-center mb-2">
                <Link to={service.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}>
                    {service.title}
                </Link>
            </h3>
        </div>
        {/* Excerpt */}
        <div 
            dangerouslySetInnerHTML={{ __html: service.excerpt }}
            className="text-xs"
        />
    </div>
);

export default ServicePreview;