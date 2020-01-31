import React from "react";
import { Link } from "gatsby";

import FeaturedImage from "../lib/featured-image";

const CaseStudyPreview = ({ caseStudy }) => (
    <div>
        <h3>{caseStudy.title}</h3>
        <p>{caseStudy.excerpt}</p>
        <div className="w-full h-32">
            <Link to={caseStudy.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}>
                <FeaturedImage 
                    featuredImage={caseStudy.featured_media}
                    className="object-cover"
                />
            </Link>
        </div>  
    </div>
);

export default CaseStudyPreview;