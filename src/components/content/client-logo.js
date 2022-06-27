import React from "react";

import FeaturedImage from "../lib/featured-image";

const ClientLogo = ({ client }) => (
    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
        <FeaturedImage 
            featuredImage={client.featured_media}
            className="object-contain w-28 h-24 p-4"
            style={{ filter: "grayscale(100%) contrast(90%)" }}
        />
    </div>
)

export default ClientLogo;