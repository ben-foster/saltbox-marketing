import React from "react";
import { StaticQuery, graphql } from "gatsby";

import PostPreview from "./post-preview";

const BlogPosts = () => {
    return (
        <div className="flex flex-row flex-wrap">
            <StaticQuery
                query={ALL_POSTS_QUERY}
                render={data => {
                    const { edges: posts } = data.allWordpressPost
                    return posts.map(({ node: post }) => (
                        <PostPreview post={post} />
                    ))}
                }
            />
        </div>
    );
};

const ALL_POSTS_QUERY = graphql`
    query AllPostsQuery {
        allWordpressPost(sort: {order: DESC, fields: date}){
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
`

export default BlogPosts;