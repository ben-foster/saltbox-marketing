import React from "react";
import { StaticQuery, graphql } from "gatsby";

import PostPreview from "./post-preview";

const HomeFeaturedPosts = (props) => {
    const { title, description } = props;
    return (
        <div className="bg-white px-4 pb-10 md:py-12">
            <div className="container mx-auto flex flex-col flex-no-wrap items-center">
                <div className="flex flex-col pt-20 md:pb-8">
                    { title && <h2 className="text-blue-350 text-2xl md:text-4xl mb-12" dangerouslySetInnerHTML={{ __html: title }}></h2>}
                    { description && <p className="text-gray-150 mx-auto md:mx-0 w-56 md:w-auto text-xs md:text-sm text-center -mt-8" dangerouslySetInnerHTML={{ __html: description }}></p>}
                </div>
                <div className="flex-grow flex flex-col md:flex-row md:flex-wrap justify-start">  
                    <StaticQuery
                        query={graphql`
                            query HomeFeaturedPostsQuery {
                                allWordpressPost(limit: 6, filter: {categories: {elemMatch: {slug: {eq: "featured"}}}}, sort: {order: DESC, fields: date}){
                                    edges {
                                        node {
                                            title
                                            link
                                            excerpt
                                            author {
                                                name
                                                link
                                            }
                                            date(formatString: "MM/DD/YYYY")
                                            categories {
                                                name
                                                link
                                                acf {
                                                    icon {
                                                        localFile {
                                                            publicURL
                                                        }
                                                    }
                                                }
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
                            const { edges: posts } = data.allWordpressPost
                            return posts.map(({ node: post }) => (
                                <PostPreview post={post} />
                            ))}
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeFeaturedPosts;