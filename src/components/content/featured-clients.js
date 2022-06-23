import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ClientLogo from "./client-logo";

const FeaturedClients = (props) => {
    const { title, description, className } = props;
    return (
        <div className={className}>
            <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                { title && <h2 className="font-bold">{title}</h2>}
                { description && <p>{description}</p>}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">  
                    <StaticQuery
                        query={graphql`
                            query FeaturedClientsQuery {
                                allWordpressWpClients(limit: 5, filter: {categories: {elemMatch: {slug: {eq: "featured"}}}}, sort: {order: ASC, fields: date}){
                                    edges {
                                        node {
                                            title
                                            featured_media {
                                                alt_text
                                                localFile {
                                                    extension
                                                    publicURL
                                                    # childImageSharp {
                                                    #     fluid(maxWidth: 500, quality: 100) {
                                                    #         ...GatsbyImageSharpFluid
                                                    #     }
                                                    # }
                                                }
                                            }
                                        } 
                                    }
                                }
                            }
                        `}
                        render={data => {
                            const { edges: clients } = data.allWordpressWpClients
                            return clients.map(({ node: client }) => (
                                <ClientLogo client={client} />
                            ))}
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default FeaturedClients;