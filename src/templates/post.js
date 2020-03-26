import React from "react";
import { Link, graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import placeholder from "../images/placeholder.png";
import FeaturedPosts from "../components/content/featured-posts";

const Post = ({ data }) => {
    const { title, content, author, acf, yoast_meta } = data.wordpressPost;
    return (
        <Layout>
            <SEO
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero className="pb-48">
                <div className="max-w-3xl mx-auto flex flex-col items-center pt-48 px-20">
                    <h1 className="leading-normal text-white" dangerouslySetInnerHTML={{ __html: title }}></h1>
                    { acf.subheader && (
                        <p className="text-2xl font-light text-white italic leading-snug pt-2 mb-8" dangerouslySetInnerHTML={{ __html: acf.subheader }}></p>
                    )}
                    <p className="flex flex-row text-sm mb-3 self-start items-center">
                        <img className="w-12 h-12 mr-3 rounded-full shadow-md" src={placeholder} alt=""/>
                        <span className="text-white pr-1">by</span>
                        <Link 
                            to={author.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}
                            className="no-underline text-white hover:text-gray-100"
                        >
                            <span className="text-white hover:text-gray-100" dangerouslySetInnerHTML={{ __html: author.name }}></span>
                        </Link>
                    </p>
                </div>
            </Hero>
            <div className="bg-gray-100">
                <div className="max-w-3xl mx-auto -mt-40 relative z-10 flex flex-col bg-white items-center py-16 px-20 rounded-lg shadow-lg">
                    <div className=" w-full">
                        <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: content }}></div>    
                    </div>
                </div>
                <FeaturedPosts />
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
