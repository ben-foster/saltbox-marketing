import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ServicePreview from "./service-preview";

const FeaturedServices = (props) => {
    const { title, description, className } = props;
    return (
        <div className={className}>
            <div className="container mx-auto flex flex-col flex-no-wrap items-center p-12">
                { title && <h2 className="font-bold text-3xl text-gray-500 mb-12">{title}</h2>}
                { description && <p>{description}</p>}
                <div className="flex flex-col md:flex-row">  
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