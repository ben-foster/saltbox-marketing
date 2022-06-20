import React from "react";
import { StaticQuery, graphql } from "gatsby";

import PostPreview from "./post-preview";

const HomeFeaturedPosts = (props) => {
    const { title, description } = props;
    return (
        <div className="bg-white pt-6 pb-10 md:py-12">
            <div className="container mx-auto flex flex-col flex-no-wrap items-center">
                <div className="flex flex-col">
                    { title && <h2 className="text-blue-350 text-3xl" dangerouslySetInnerHTML={{ __html: title }}></h2>}
                    { description && <p className="text-gray-150 text-xs text-center -mt-8" dangerouslySetInnerHTML={{ __html: description }}></p>}
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