import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ServicePreview = ({ service }) => (
    <div className="flex flex-col w-64 p-4">
        {/* Featured Image */}
        { service.featured_media ? (
            service.featured_media.localFile.childImageSharp ? (
                <div className="w-full h-32 rounded overflow-hidden">
                    <Link to={service.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}>
                        <Img 
                            className="object-cover"
                            fluid={service.featured_media.localFile.childImageSharp.fluid}
                            alt={service.featured_media.alt_text}
                        />
                    </Link>
                </div>
            ) : (
                service.featured_media.localFile.publicURL && (
                    <div className="w-full h-40 rounded overflow-hidden">    
                        <img
                            src={service.featured_media.localFile.publicURL}
                            alt={service.featured_media.alt_text}
                            className="object-contain"
                        />
                    </div>
                )
            )
        ) : (
            <div className="w-full h-32 rounded overflow-hidden">
                <Link 
                    to={service.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}
                    className="block w-full h-full"    
                >
                    <div className="w-full h-full object-cover bg-blue-200" />
                </Link>
            </div>
        )}
        {/* Title */}
        <div className="flex justify-center items-center w-full h-20">
            <h3 className="text-center mb-2">
                <Link to={service.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}>
                    {service.title}
                </Link>
            </h3>
        </div>
        {/* Excerpt */}
        <div 
            dangerouslySetInnerHTML={{ __html: service.excerpt }}
            className="text-xs"
        />
    </div>
);

export default ServicePreview;