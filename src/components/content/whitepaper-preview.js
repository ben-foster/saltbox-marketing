import React from "react";

import WhitepaperForm from "../forms/whitepaper-form";
import FeaturedImage from "../lib/featured-image";

const WhitepaperPreview = ({ whitepaper }) => (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full">
        <div className="flex flex-col flex-grow w-full max-w-xl">
            {/* Title */}
            <h3 className="text-left normal-case text-2xl font-bold mt-1">
                {whitepaper.title}
            </h3>
            {/* Excerpt */}
            <div 
                dangerouslySetInnerHTML={{ __html: whitepaper.excerpt }}
                className="text-sm"
            />
            {/* Form */}
            <div className="w-full max-w-xl">
                <WhitepaperForm 
                    whitepaper={whitepaper}
                />
            </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
            {/* Featured Image */}
            <FeaturedImage 
                featuredImage={whitepaper.featured_media}
                className="object-cover"
            />
        </div>
    </div>
);

export default WhitepaperPreview;