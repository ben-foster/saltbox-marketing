import React from "react";

import FeaturedImage from "../lib/featured-image";

const ClientLogo = ({ client }) => (
    <div className="flex items-center justify-center w-1/3 h-32 m-2">
        <FeaturedImage 
            featuredImage={client.featured_media}
            className="object-contain w-40 h-24"
            style={{ filter: "grayscale(100%) contrast(85%)" }}
        />
    </div>
)

export default ClientLogo;