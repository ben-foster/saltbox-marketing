import React from "react";

import FeaturedImage from "../lib/featured-image";

const ClientLogo = ({ client }) => (
    <div className="w-1/2 sm:w-1/3 p-1">
        <div className="flex items-center justify-center w-full bg-gray-100 p-2">
            <FeaturedImage 
                featuredImage={client.featured_media}
                className="object-contain w-40 h-24 p-2"
                style={{ filter: "grayscale(100%) contrast(90%)" }}
            />
        </div>
    </div>
)

export default ClientLogo;