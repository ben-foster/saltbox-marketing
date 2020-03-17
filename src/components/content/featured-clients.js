import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import ClientLogo from "./client-logo";

const FeaturedClients = (props) => {
    const { title, description } = props;
    return (
        <div>
            <div className="container mx-auto flex flex-col flex-no-wrap items-center p-12">
                { title && <h2>{title}</h2>}
                { description && <p>{description}</p>}
                <div className="flex-grow flex flex-row flex-wrap justify-end p-4">  
                    <StaticQuery
                        query={graphql`
                            query FeaturedClientsQuery {
                                allWordpressWpClients(limit: 12, filter: {categories: {elemMatch: {slug: {eq: "featured"}}}}, sort: {order: DESC, fields: date}){
                                    edges {
                                        node {
                                            title
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