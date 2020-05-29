import React from "react";
import { Link } from "gatsby";

const TeamMember = ({ member }) => {
    return (
        <Link 
            className="flex flex-col items-center justify-start w-full md:w-1/2 lg:w-1/4 p-2 mb-8"
            to={member.link.replace("https://wordpress.saltbox.solutions", "")}
        >
            <div className="w-48 h-48 p-2 shadow-md rounded-full bg-white">
                <img src={member.featured_media.localFile.publicURL} alt={member.featured_media.alt_text} className="w-full h-full rounded-full shadow-inner" />
            </div>
            <h3 className="font-bold text-blue-600" dangerouslySetInnerHTML={{ __html: member.title }}></h3>
            <h4 className="font-light text-sm" dangerouslySetInnerHTML={{ __html: member.acf.job_title }}></h4>
        </Link>
    );
};

export default TeamMember;