import React from "react";

import FeaturedImage from "../lib/featured-image";

const ClientLogo = ({ client }) => (
    <div className="w-32 h-32 m-2">
        <FeaturedImage 
            featuredImage={client.featured_media}
            className="object-cover"
            style={{ filter: "grayscale(100%) contrast(85%)" }}
        />
    </div>
)

export default ClientLogo;