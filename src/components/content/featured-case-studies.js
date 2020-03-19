import React from "react";
import { StaticQuery, graphql } from "gatsby";

import CaseStudyPreview from "./case-study-preview";
import CurveBottom from "../svg/curve-bottom";

const FeaturedCaseStudies = (props) => {
    const { title, description } = props;
    return (
        <div className="bg-gray-100 relative">
            <div className="container mx-auto flex flex-col flex-no-wrap items-center">
                { title && <h2 className="font-bold text-3xl text-gray-500">{title}</h2>}
                { description && <p>{description}</p>}
                <div className="flex w-full p-4">  
                    <StaticQuery
                        query={graphql`
                            query FeaturedCaseStudiesQuery {
                                allWordpressWpCaseStudies(limit: 12, filter: {categories: {elemMatch: {slug: {eq: "featured"}}}}, sort: {order: DESC, fields: date}){
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
                            const { edges: caseStudies } = data.allWordpressWpCaseStudies
                            return caseStudies.map(({ node: caseStudy }) => (
                                <CaseStudyPreview caseStudy={caseStudy} />
                            ))}
                        }
                    />
                </div>
            </div>
            <CurveBottom className="h-24 md:h-48 z-0" fillColor="text-blue-100" />
        </div>
    );
};

export default FeaturedCaseStudies;