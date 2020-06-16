import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import WhitepaperPreview from "./whitepaper-preview";

const FeaturedWhitepapers = (props) => {
    const { title, description } = props;
    return (
        <div className="bg-white">
            <div className="container mx-auto flex flex-col flex-no-wrap items-center p-12">
                { title && <h2>{title}</h2>}
                { description && <p>{description}</p>}
                <StaticQuery
                    query={graphql`
                        query FeaturedWhitepaperQuery {
                            allWordpressWpWhitepapers(limit: 1, filter: {categories: {elemMatch: {slug: {eq: "featured"}}}}, sort: {order: DESC, fields: date}){
                                edges {
                                    node {
                                        title
                                        link
                                        excerpt
                                        featured_media {
                                            alt_text
                                            localFile {
                                                extension
                                                publicURL
                                                childImageSharp {
                                                    fluid(maxWidth: 500, quality: 100) {
                                                        ...GatsbyImageSharpFluid
                                                    }
                                                }
                                            }
                                        }
                                    } 
                                }
                            }
                        }
                    `}
                    render={data => {
                        const { edges: whitepapers } = data.allWordpressWpWhitepapers
                        return whitepapers.map(({ node: whitepaper }) => (
                            <WhitepaperPreview whitepaper={whitepaper} />
                        ))}
                    }
                />
            </div>
        </div>
    );
};

export default FeaturedWhitepapers;