import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Testimonial = ({ testimonial }) => (
    <div className="flex flex-col items-center w-full p-4">
        <blockquote className="flex flex-col items-center w-full max-w-2xl">
            <div 
                className="flex justify-center w-full h-24 text-center" 
                dangerouslySetInnerHTML={{ __html: testimonial.content }}
            />
            <cite className="flex flex-row w-auto px-2">
                <div className="flex flex-grow-0 w-16 h-16 mr-4 rounded-full overflow-hidden">
                    { testimonial.featured_media ? (
                        testimonial.featured_media.localFile.childImageSharp ? (
                            <Link to={testimonial.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}>
                                <Img 
                                    className="object-cover"
                                    fluid={testimonial.featured_media.localFile.childImageSharp.fluid}
                                    alt={testimonial.featured_media.alt_text}
                                />
                            </Link>
                        ) : (
                            testimonial.featured_media.localFile.publicURL && (
                                <img
                                    src={testimonial.featured_media.localFile.publicURL}
                                    alt={testimonial.featured_media.alt_text}
                                    className="object-contain"
                                />
                            )
                        )
                    ) : (
                        <Link 
                            to={testimonial.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}
                            className="block w-full h-full"    
                        >
                            <div className="w-full h-full object-cover bg-blue-200" />
                        </Link>
                    )}
                </div>
                <div className="flex flex-col items-start justify-center w-auto">
                    <p><span className="font-semibold">{ testimonial.acf.testimonial_author_name }</span>,</p>
                    <p><span className="text-sm">{ testimonial.acf.testimonial_company_name }</span></p>
                </div>
            </cite>
        </blockquote>
    </div>
);

export default Testimonial;