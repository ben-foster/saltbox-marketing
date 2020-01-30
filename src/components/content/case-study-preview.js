import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const CaseStudyPreview = ({ caseStudy }) => (
    <div>
        <h3>{caseStudy.title}</h3>
        <p>{caseStudy.excerpt}</p>
        { caseStudy.featured_media ? (
            caseStudy.featured_media.localFile.childImageSharp ? (
                <div className="w-full h-32 rounded overflow-hidden">
                    <Link to={caseStudy.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}>
                        <Img 
                            className="object-cover"
                            fluid={caseStudy.featured_media.localFile.childImageSharp.fluid}
                            alt={caseStudy.featured_media.alt_text}
                        />
                    </Link>
                </div>
            ) : (
                caseStudy.featured_media.localFile.publicURL && (
                    <div className="w-full h-40 rounded overflow-hidden">    
                        <img
                            src={caseStudy.featured_media.localFile.publicURL}
                            alt={caseStudy.featured_media.alt_text}
                            className="object-contain"
                        />
                    </div>
                )
            )
        ) : (
            <div className="w-full h-32 rounded overflow-hidden">
                <Link 
                    to={caseStudy.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}
                    className="block w-full h-full"    
                >
                    <div className="w-full h-full object-cover bg-blue-200" />
                </Link>
            </div>
        )}
    </div>
);

export default CaseStudyPreview;