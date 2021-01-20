import React from "react";
import Img from "gatsby-image";

const FeaturedImage = ({ featuredImage, className, style }) => { 
    return ( featuredImage ? (
        featuredImage.localFile.childImageSharp ? (
            <Img 
                fluid={featuredImage.localFile.childImageSharp.fluid}
                alt={featuredImage.alt_text}
                className={className}
                style={style}
            />
        ) : (
            featuredImage.localFile.publicURL && (
                process.env.GATSBY_ENV == 'dev' ? (
                    <img
                        src={featuredImage.localFile.publicURL}
                        alt={featuredImage.alt_text}
                        className={className}
                        style={style}
                    />
                ) : (
                    <img
                        data-src={featuredImage.localFile.publicURL}
                        alt={featuredImage.alt_text}
                        className={`lozad ${className}`}
                        style={style}
                    />
                )
            )
        )
    ) : (
        <div className={`w-full h-full object-cover bg-blue-200 ${className}`} />
    ))
}

export default FeaturedImage
