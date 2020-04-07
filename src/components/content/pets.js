import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Pet from "./pet";

const Pets = () => {
    return (
        <div className="flex flex-row flex-wrap items-center w-full">
            <StaticQuery
                query={graphql`
                    query PetsQuery {
                        allWordpressWpPets(sort: {order: ASC, fields: date}){
                            edges {
                                node {
                                    title
                                    link
                                    content
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
                                    acf {
                                        job_title
                                    }
                                } 
                            }
                        }
                    }
                `}
                render={data => {
                    const { edges: pets } = data.allWordpressWpPets
                    return pets.map(({ node: pet }) => (
                        <Pet pet={pet} />
                    ))}
                }
            />
        </div>
    );
};

export default Pets;