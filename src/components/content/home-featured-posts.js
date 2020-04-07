import React from "react";
import { StaticQuery, graphql } from "gatsby";

import PostPreview from "./post-preview";

const HomeFeaturedPosts = (props) => {
    const { title, description } = props;
    return (
        <div className="bg-blue-100 py-12 lg:py-20">
            <div className="container mx-auto flex flex-col lg:flex-row flex-no-wrap items-center lg:p-12">
                <div className="flex flex-col text-center lg:text-left lg:w-1/3 mb-6 lg:mb-0">
                    { title && <h2 className="w-96 lg:w-32 text-5xl text-white font-bold" dangerouslySetInnerHTML={{ __html: title }}></h2>}
                    { description && <p className="text-white" dangerouslySetInnerHTML={{ __html: description }}></p>}
                </div>
                <div className="flex-grow flex flex-col md:flex-row md:flex-wrap justify-center lg:justify-end">  
                    <StaticQuery
                        query={graphql`
                            query HomeFeaturedPostsQuery {
                                allWordpressPost(limit: 4, filter: {categories: {elemMatch: {slug: {eq: "featured"}}}}, sort: {order: DESC, fields: date}){
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
            </div>
        </div>
    );
};

export default HomeFeaturedPosts;