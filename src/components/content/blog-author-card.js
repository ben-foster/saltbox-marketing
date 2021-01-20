import React from "react";

import placeholder from '../../images/placeholder.png';

const AuthorCard = props => {
    const { name, jobTitle, bio, imgSrc } = props;
    
    return (
        <div className="w-full flex flex-col md:flex-row bg-white rounded-lg px-12 py-8 shadow">
            <div className="w-full md:w-auto flex-col flex-grow-0 items-center justify-center md:justify-start md:pr-6">
                {
                    process.env.GATSBY_ENV !== 'prod' ? (
                        <img src={imgSrc} className="w-24 h-24 mx-auto md:mx-0 mb-2 md:mb-0 md:mr-3 rounded-full shadow-md" alt={name} />
                    ) : (
                        <img src={placeholder} data-src={imgSrc} className="lozad w-24 h-24 mx-auto md:mx-0 mb-2 md:mb-0 md:mr-3 rounded-full shadow-md" alt={name} />
                    )
                }
            </div>
            <div className="flex-grow flex flex-col">
                <h4 className="text-xl text-center md:text-left" dangerouslySetInnerHTML={{ __html: name }}></h4>
                <h5 className="italic text-base mt-1" dangerouslySetInnerHTML={{ __html: jobTitle + ", Saltbox Solutions" }}></h5>
                <div dangerouslySetInnerHTML={{ __html: bio }}></div>
            </div>
        </div>
    );
};

export default AuthorCard;