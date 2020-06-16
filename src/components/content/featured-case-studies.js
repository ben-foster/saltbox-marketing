import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Flickity from "react-flickity-component";

import CaseStudyPreview from "./case-study-preview";

const flickityOptions = {
    initialIndex: 0,
    prevNextButtons: true,
    pageDots: false,
    wrapAround: true,
    draggable: true
}

const FeaturedCaseStudies = (props) => {
    const { title, description } = props;
    return (
        <div className="bg-white relative">
            <div className="flex flex-col flex-no-wrap items-center">
                { title && <h2 className="font-bold">{title}</h2>}
                { description && <p>{description}</p>}
                <Flickity
                    className={'container mx-auto relative carousel outline-none overflow-hidden'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                >  
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
                </Flickity>
            </div>
        </div>
    );
};

export default FeaturedCaseStudies;