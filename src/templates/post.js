import React from "react";
import { Link, graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import BlogAuthorCard from "../components/content/blog-author-card";
import FeaturedImage from "../components/lib/featured-image";
import blogCube from "../images/blog-cube.svg"
import ctaBg from "../images/blog-post-cta-bg.svg"

const Post = ({ data }) => {
    const { title, content, author, categories, acf, yoast_meta, featured_media, date } = data.wordpressPost;
    const featuredServices = data.allWordpressWpServices;
    const category = categories.find(category => category.name !== "Featured");

    return (
        <Layout>
            <SEO
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero page="Blog" className="h-96">
            </Hero>
            <div>
                <div className="w-11/12 md:w-auto md:max-w-3xl -mt-56 mx-auto relative z-10 flex flex-col items-center py-8 md:py-16 px-0 md:px-16 rounded-lg">
                    <div className="relative w-full">
                        <FeaturedImage 
                            featuredImage={featured_media}
                            className="rounded-xl w-full shadow"
                        />
                        <div className="absolute bottom-0 left-0 px-4">
                            <span className="text-left mb-2 ont-bold no-underline text-sm md:text-lg text-white drop-shadow-sm" dangerouslySetInnerHTML={{ __html: date }}>
                            </span>
                            <h3 className="text-left text-base md:text-2xl font-bold normal-case mt-0 mb-4 text-white drop-shadow" dangerouslySetInnerHTML={{ __html: title }}></h3>
                        </div>
                    </div>
                </div>

                <div className="md:w-auto md:max-w-3xl mx-auto relative z-10 flex flex-col items-center py-8 px-4 md:px-16 rounded-lg bg-white ">
                    <div className="w-full rounded-xl">
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
            <div className="w-full relative">
                <div className="w-11/12 md:w-auto md:max-w-3xl mx-auto flex flex-col md:flex-row rounded-xl bg-cta bg-cover px-8 md:px-12 py-16 md:py-0">
                    <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
                        <h2 className="font-bold max-w-md text-white leading-tight tracking-wide text-2xl md:text-3xl text-left mb-0">Get more customers from search engines.</h2>
                        <div className="max-w-sm text-white text-sm leading-relaxed mt-3">
                            We help businesses develop holistic search engine marketing programs that drive sustainable, profitable customer acquisition.
                        </div>
                        <Link 
                            type="button"
                            href="/contact/"
                            className="mt-3 inline-flex items-center px-6 py-3 rounded-lg border border-transparent text-sm leading-4 font-bold shadow-sm text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Get started
                        </Link>
                    </div>
                    <div className="hidden w-full md:w-1/2 md:flex items-center justify-center">
                        <img className="w-96 h-96" src={blogCube}/>
                    </div>
                </div>
                <div className="pt-8"></div>
				<img className="absolute left-0 right-0 bottom-0" style={{ width: typeof window !== "undefined" ? window.innerWidth : "auto", zIndex: -1 }} src={ctaBg}/>
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
            featured_media {
                alt_text
                localFile {
                    publicURL
                    extension
                    childImageSharp {
                        fluid(maxWidth: 1000, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
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
            date(formatString: "MM/DD/YYYY")
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
