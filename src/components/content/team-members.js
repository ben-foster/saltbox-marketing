import React from "react";
import { StaticQuery, graphql } from "gatsby";

import TeamMember from "./team-member";

const TeamMembers = () => {
    return (
        <div className="flex flex-row flex-wrap items-center w-full">
            <StaticQuery
                query={graphql`
                    query TeamMembersQuery {
                        allWordpressWpTeamMembers(sort: {order: ASC, fields: date}){
                            edges {
                                node {
                                    title
                                    link
                                    excerpt
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
                    const { edges: teamMembers } = data.allWordpressWpTeamMembers
                    return teamMembers.map(({ node: member }) => (
                        <TeamMember member={member} />
                    ))}
                }
            />
        </div>
    );
};

export default TeamMembers;