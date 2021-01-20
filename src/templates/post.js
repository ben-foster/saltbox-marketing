import React from "react";
import { Link, graphql } from "gatsby";

import placeholder from '../images/placeholder.png';
import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import FeaturedPosts from "../components/content/featured-posts";
import BlogAuthorCard from "../components/content/blog-author-card";
import BlogServiceCard from "../components/content/blog-service-card";

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
            <Hero className="pb-48">
                <div className="max-w-3xl mx-auto flex flex-col items-center pt-32 md:pt-48 px-12 md:px-20">
                    <h1 className="text-white text-3xl md:text-4xl font-bold" dangerouslySetInnerHTML={{ __html: title }}></h1>
                    { acf.subheader && (
                        <p className="text-xl md:text-2xl font-light text-white italic leading-snug pt-2 mb-8" dangerouslySetInnerHTML={{ __html: acf.subheader }}></p>
                    )}
                    <p className="flex flex-row text-sm mb-3 self-start items-center">
                        {
                            process.env.GATSBY_ENV !== 'prod' ? (
                                <img src={author.acf.avatar_img.localFile.publicURL} alt={author.name} className="w-12 h-12 mr-3 rounded-full shadow-md" />
                            ) : (
                                <img src={placeholder} data-src={author.acf.avatar_img.localFile.publicURL} alt={author.name} className="lozad w-12 h-12 mr-3 rounded-full shadow-md" />
                            )
                        }
                        <span className="text-white pr-1">by</span>
                        <Link 
                            to={author.link.replace("https://wordpress.saltbox.solutions", "")}
                            className="no-underline text-white hover:text-gray-100"
                        >
                            <span className="text-white hover:text-gray-100" dangerouslySetInnerHTML={{ __html: author.name }}></span>
                        </Link>
                    </p>
                </div>
            </Hero>
            <div className="bg-white">
                <div className="w-11/12 md:w-auto md:max-w-3xl mx-auto -mt-40 relative z-10 flex flex-col bg-white items-center py-8 md:py-16 px-8 md:px-16 rounded-lg shadow-lg">
                    <div className="w-full">
                        <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: content }}></div>    
                    </div>
                </div>
                <div className="w-11/12 max-w-3xl mx-auto mt-16">
                    <BlogAuthorCard 
                        name={author.name}
                        jobTitle={author.acf.job_title}
                        bio={author.description}
                        imgSrc={author.acf.avatar_img.localFile.publicURL}
                    />
                </div>
                <div className="max-w-3xl mx-auto mt-16">
                    <BlogServiceCard 
                        featuredServices={featuredServices}
                        categoryName={category.name}
                    />
                </div>
                <div className="container mx-auto py-16 ">
                    <FeaturedPosts />
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
