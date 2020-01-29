import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ServicePreview from "./service-preview";

const FeaturedServices = (props) => {
    const { title, description } = props;
    return (
        <div>
            <div className="container mx-auto flex flex-col flex-no-wrap items-center p-12">
                { title && <h2>{title}</h2>}
                { description && <p>{description}</p>}
                <div className="flex-grow flex flex-row flex-wrap justify-end">  
                    <StaticQuery
                        query={graphql`
                            query FeaturedServicesQuery {
                                allWordpressWpServices(limit: 3, filter: {categories: {elemMatch: {slug: {eq: "featured"}}}}, sort: {order: ASC, fields: title}){
                                    edges {
                                        node {
                                            title
                                            link
                                            excerpt
                                            featured_media {
                                                alt_text
                                                localFile {
                                                    publicURL
                                                    extension
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
                            const { edges: services } = data.allWordpressWpServices
                            return services.map(({ node: service }) => (
                                <ServicePreview service={service} />
                            ))}
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default FeaturedServices;