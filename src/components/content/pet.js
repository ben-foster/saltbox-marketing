import React from "react";

import FeaturedImage from "../lib/featured-image";

const Pet = ({ pet }) => {
    return (
        <div className="flex flex-col items-center justify-start w-full md:w-1/2 lg:w-1/4 p-2 mb-8 text-center">
            <div className="w-48 h-48 shadow-2xl rounded-full bg-white">
                {/* <LazyLoadImage
                    src={featuredImage.localFile.publicURL}
                    alt={featuredImage.alt_text}
                    className={className}
                    style={style}
                /> */}
                {/* <FeaturedImage
                    featuredImage={pet.featured_media}
                    className="w-full h-full object-cover rounded-full shadow-inner"
                /> */}
                <img src={pet.featured_media.localFile.publicURL} alt={pet.featured_media.alt_text} className="w-full h-full object-cover rounded-full shadow-inner" />
            </div>
            <h3 className="font-semibold normal-case text-gray-150 text-xl" dangerouslySetInnerHTML={{ __html: pet.title }}></h3>
            <h4 className="font-light text-md" dangerouslySetInnerHTML={{ __html: pet.acf.job_title }}></h4>
        </div>
    );
};

export default Pet;