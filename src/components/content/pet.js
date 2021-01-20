import React from "react";

import placeholder from '../../images/placeholder.png';

const Pet = ({ pet }) => {
    return (
        <div className="flex flex-col items-center justify-start w-full md:w-1/2 lg:w-1/4 p-2 mb-8 text-center">
            <div className="w-48 h-48 p-2 shadow-md rounded-full bg-white">
                {
                    process.env.GATSBY_ENV !== 'prod' ? (
                        <img src={pet.featured_media.localFile.publicURL} alt={pet.featured_media.alt_text} className="w-full h-full object-cover rounded-full shadow-inner" />
                    ) : (
                        <img src={placeholder} data-src={pet.featured_media.localFile.publicURL} alt={pet.featured_media.alt_text} className="lozad w-full h-full object-cover rounded-full shadow-inner" />
                    )
                }
            </div>
            <h3 className="font-bold text-blue-600" dangerouslySetInnerHTML={{ __html: pet.title }}></h3>
            <h4 className="font-light text-sm" dangerouslySetInnerHTML={{ __html: pet.acf.job_title }}></h4>
        </div>
    );
};

export default Pet;