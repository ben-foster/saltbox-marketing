import React from "react";
import { Link } from "gatsby";
import FeaturedImage from "../lib/featured-image";

const WhitepaperPreview = ({ whitepaper }) => (
    <div className="flex flex-col w-64 p-4">
        {/* Featured Image */}
        <div className="w-full h-32 rounded overflow-hidden">
            <Link to={whitepaper.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}>
                <FeaturedImage 
                    featuredImage={whitepaper.featured_media}
                    className="object-cover"
                />
            </Link>
        </div>
        {/* Title */}
        <div className="flex justify-center items-center w-full h-20">
            <h3 className="text-center mb-2">
                <Link to={whitepaper.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}>
                    {whitepaper.title}
                </Link>
            </h3>
        </div>
        {/* Excerpt */}
        <div 
            dangerouslySetInnerHTML={{ __html: whitepaper.excerpt }}
            className="text-xs"
        />
    </div>
);

export default WhitepaperPreview;