import React from "react";
import { StaticQuery, graphql } from "gatsby";

import PostPreview from "./post-preview";

const FeaturedPosts = () => {
    return (
        <div className="flex flex-col w-full">
            <h4 className="font-bold text-3xl text-gray-500 text-center">Featured Posts</h4>
            <div className="flex flex-row flex-wrap">
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
                                        # featured_media {
                                        #     alt_text
                                        #     localFile {
                                        #         childImageSharp {
                                        #             fluid(maxWidth: 500, quality: 100) {
                                        #                 ...GatsbyImageSharpFluid
                                        #             }
                                        #         }
                                        #     }
                                        # }
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
    );
};

export default FeaturedPosts;