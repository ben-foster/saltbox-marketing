import React from "react";
import { StaticQuery, graphql } from "gatsby";

import PostPreview from "./post-preview";

const FeaturedPosts = () => {
    return (
        <div className="flex flex-col w-full">
            <h2>Featured Posts</h2>
            <div className="flex flex-row flex-wrap justify-center">
                <StaticQuery
                    query={graphql`
                        query FeaturedPostsQuery {
                            allWordpressPost(limit: 3, filter: {categories: {elemMatch: {slug: {eq: "featured"}}}}, sort: {order: DESC, fields: date}){
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
                        const { edges: posts } = data.allWordpressPost;
                        return posts.map(({ node: post }) => (
                            <PostPreview post={post} />
                        ))}
                    }
                />
            </div>
        </div>
    );
};

export default FeaturedPosts;