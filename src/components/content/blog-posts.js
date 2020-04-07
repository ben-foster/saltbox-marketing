import React from "react";
import { StaticQuery, graphql } from "gatsby";

import PostPreview from "./post-preview";

const BlogPosts = () => {
    return (
        <div className="flex flex-row flex-wrap">
            <StaticQuery
                query={graphql`
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
    );
};

export default BlogPosts;