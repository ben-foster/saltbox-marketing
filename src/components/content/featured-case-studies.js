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
                                allWordpressWpCaseStudies(limit: 3, filter: {categories: {elemMatch: {slug: {eq: "featured"}}}}, sort: {order: DESC, fields: date}){
                                    edges {
                                        node {
                                            title
                                            link
                                            excerpt
                                            acf {
                                                testimonial
                                                testimonial_author_name
                                                testimonial_author_title
                                                company_logo {
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
                                                metric_one_title
                                                metric_one_number
                                                metric_one_up
                                                metric_one_good
                                                metric_two_title
                                                metric_two_number
                                                metric_two_up
                                                metric_two_good
                                                metric_three_title
                                                metric_three_number
                                                metric_three_up
                                                metric_three_good
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