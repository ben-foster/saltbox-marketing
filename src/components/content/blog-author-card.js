import React from "react";

const AuthorCard = props => {
    const { name, jobTitle, bio, imgSrc } = props;
    
    return (
        <div className="w-full flex flex-col md:flex-row bg-white rounded-lg px-12 py-8 shadow">
            <div className="w-full flex-col flex-grow-0 items-center justify-center md:justify-start md:pr-6">
                <img className="w-24 h-24 mx-auto mb-2 md:mb-0 md:mr-3 rounded-full shadow-md" src={imgSrc} alt={name} />
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