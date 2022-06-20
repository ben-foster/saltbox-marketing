import React from "react";
import { Link, graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import FeaturedPosts from "../components/content/featured-posts";
import BlogAuthorCard from "../components/content/blog-author-card";
import BlogServiceCard from "../components/content/blog-service-card";
import FeaturedImage from "../components/lib/featured-image";
import postBanner from "../images/post-banner.svg"

const Post = ({ data }) => {
    const { title, content, author, categories, acf, yoast_meta } = data.wordpressPost;
    const featuredServices = data.allWordpressWpServices;
    const category = categories.find(category => category.name !== "Featured");

    return (
        <Layout>
            <SEO
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero className="bg-blog-bg bg-cover bg-no-repeat bg-center h-96">
            </Hero>
            <div>
                <div className="w-11/12 md:w-auto md:max-w-3xl -mt-56 mx-auto relative z-10 flex flex-col items-center py-8 md:py-16 px-8 md:px-16 rounded-lg">
                    <div className="w-full">
                        <img className="w-54 h-54 m-auto" src={postBanner}/>
                    </div>
                </div>

                <div className="w-11/12 md:w-auto md:max-w-3xl mx-auto -mt-20 relative z-10 flex flex-col items-center py-8 px-8 md:px-16 rounded-lg">
                    <div className="w-full">
                        <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: content }}></div>    
                    </div>
                </div>
                <div className="w-11/12 max-w-3xl mx-auto mb-3">
                    <BlogAuthorCard 
                        name={author.name}
                        jobTitle={author.acf.job_title}
                        bio={author.description}
                        image={author.acf.avatar_img}
                    />
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
	query($id: String!) {
		wordpressPost(id: { eq: $id }) {
			id
			title
            content
            author {
                name
                description
                link
                acf {
                    job_title
                    avatar_img {
                        localFile {
                            publicURL
                        }
                    }
                }
            }
            date
            categories {
                name
                link
            }
            acf {
                subheader
            }
			yoast_meta {
                yoast_wpseo_title
                yoast_wpseo_metadesc
            }
		}
        allWordpressWpServices(limit: 3, filter: {categories: {elemMatch: {slug: {eq: "featured"}}}}, sort: {order: ASC, fields: date}){
            edges {
                node {
                    title
                    link
                    excerpt
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

export default Post;
