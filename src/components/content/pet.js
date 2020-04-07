import React from "react";

const Pet = ({ pet }) => {
    return (
        <div className="flex flex-col items-center justify-start w-full md:w-1/2 lg:w-1/4 p-2 mb-8">
            <div className="p-2 shadow-md rounded-full bg-white">
                <img src={pet.featured_media.localFile.publicURL} alt={pet.featured_media.alt_text} className="w-48 h-48 rounded-full shadow-inner" />
            </div>
            <h3 className="font-bold text-blue-600" dangerouslySetInnerHTML={{ __html: pet.title }}></h3>
            <h4 className="font-light text-sm" dangerouslySetInnerHTML={{ __html: pet.acf.job_title }}></h4>
        </div>
    );
};

export default Pet;