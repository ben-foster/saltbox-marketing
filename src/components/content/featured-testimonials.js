import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Testimonial from "./testimonial";

const FeaturedTestimonials = (props) => {
    const { title, description } = props;
    return (
        <div>
            <div className="container mx-auto flex flex-col flex-no-wrap items-center p-12">
                { title && <h2>{title}</h2>}
                { description && <p>{description}</p>}
                <div className="flex flex-col flex-no-wrap justify-end w-full">  
                    <StaticQuery
                        query={graphql`
                            query FeaturedTestimonialsQuery {
                                allWordpressWpTestimonials(limit: 5, filter: {categories: {elemMatch: {slug: {eq: "featured"}}}}, sort: {order: ASC, fields: title}){
                                    edges {
                                        node {
                                            content
                                            acf {
                                                testimonial_author_name
                                                testimonial_company_name
                                            }
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
                            const { edges: testimonials } = data.allWordpressWpTestimonials
                            return testimonials.map(({ node: testimonial }) => (
                                <Testimonial testimonial={testimonial} />
                            ))}
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default FeaturedTestimonials;