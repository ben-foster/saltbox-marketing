import React from "react";

import FeaturedImage from "../lib/featured-image";

const ClientLogo = ({ client }) => (
    <div className="flex items-center justify-center w-32 h-32 m-2">
        <FeaturedImage 
            featuredImage={client.featured_media}
            className="object-contain"
            style={{ filter: "grayscale(100%) contrast(85%)" }}
        />
    </div>
)

export default ClientLogo;