import React from "react";

import FeaturedImage from "../lib/featured-image";

const AuthorCard = props => {
    const { name, jobTitle, bio, image } = props;
    
    return (
        <div className="w-full flex flex-col md:flex-row bg-white rounded-lg px-12 py-8">
            <div className="w-full md:w-auto flex-col flex-grow-0 items-center justify-center md:justify-start">
                <FeaturedImage
                    featuredImage={image}
                    className="w-16 h-16 mx-auto md:mx-0 mb-2 md:mb-0 md:mr-3 rounded-full shadow-md"
                />
                {/* <img className="w-24 h-24 mx-auto md:mx-0 mb-2 md:mb-0 md:mr-3 rounded-full shadow-md" src={imgSrc} alt={name} /> */}
            </div>
            <div className="flex-grow flex flex-col text-violet-100">
                <h4 className="text-lg text-center md:text-left font-semibold" dangerouslySetInnerHTML={{ __html: name }}></h4>
                <h5 className="text-center md:text-left italic text-base mt-1" dangerouslySetInnerHTML={{ __html: jobTitle + ", Saltbox Solutions" }}></h5>
            </div>
        </div>
    );
};

export default AuthorCard;