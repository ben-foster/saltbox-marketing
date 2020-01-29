import React from "react";
import { StaticQuery, graphql } from "gatsby";

import PostPreview from "./post-preview";

const FeaturedPosts = (props) => {
    const { title, description } = props;
    return (
        <div>
            <div className="container mx-auto flex flex-col flex-no-wrap items-center p-12">
                { title && <h2>{title}</h2>}
                { description && <p>{description}</p>}
                <div className="flex-grow flex flex-row flex-wrap justify-end">  
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
                                            featured_media {
                                                alt_text
                                                localFile {
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

export default FeaturedPosts;