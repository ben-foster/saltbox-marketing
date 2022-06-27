import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ClientLogo from "./client-logo";

const FeaturedClients = (props) => {
    const { title, description, className } = props;
    return (
        <div className={className}>
            <div className="container max-w-7xl mx-auto pb-24 px-4 sm:px-6 lg:px-8 xl:pt-16">
                <h2 className="text-2xl md:text-4xl tracking-wide text-blue-150 mb-12 max-w-2xl mx-auto bg-white rounded-xl">Businesses that know how to use search engines win big.</h2>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5  bg-white rounded-xl">  
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