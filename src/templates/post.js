import React from "react";
import { Link, graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import FeaturedPosts from "../components/content/featured-posts";
import BlogAuthorCard from "../components/content/blog-author-card";
import BlogServiceCard from "../components/content/blog-service-card";

const Post = ({ data }) => {
    const { title, content, author, categories, acf, yoast_meta } = data.wordpressPost;
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
                        <img className="w-12 h-12 mr-3 rounded-full shadow-md" src={author.acf.avatar_img.localFile.publicURL} alt={author.name} />
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
            <div className="bg-gray-100">
                <div className="w-11/12 md:w-auto md:max-w-2xl mx-auto -mt-40 relative z-10 flex flex-col bg-white items-center py-12 md:py-16 px-12 md:px-24 rounded-lg shadow-lg">
                    <div className="w-full">
                        <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: content }}></div>    
                    </div>
                </div>
                <div className="max-w-3xl mx-auto mt-16">
                    <BlogAuthorCard 
                        name={author.name}
                        jobTitle={author.acf.job_title}
                        bio={author.description}
                        imgSrc={author.acf.avatar_img.localFile.publicURL}
                    />
                </div>
                <div className="max-w-3xl mx-auto mt-16">
                    <BlogServiceCard 
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
	}
`

export default Post;
