import React from "react";
import Img from "gatsby-image";

const ClientLogo = ({ client }) => (
    <div className="w-32 h-32 m-2">
        { client.featured_media.localFile.childImageSharp ? (
            <Img
                fluid={client.featured_media.localFile.childImageSharp.fluid}
                alt={client.featured_media.alt_text}
                className="object-cover"
            />
        ) : (
            client.featured_media.localFile.publicURL && (
                <img
                    src={client.featured_media.localFile.publicURL}
                    alt={client.featured_media.alt_text}
                    className="object-cover"
                    style={{ filter: "grayscale(100%) contrast(85%)" }}
                />
            )
        )}
        
    </div>
)

export default ClientLogo;