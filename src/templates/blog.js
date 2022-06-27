import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import BlogPosts from "../components/content/blog-posts";
import blogCube from "../images/blog-cube.svg"

const Blog = ({ data }) => {
    const { title, content, yoast_meta } = data.wordpressPage;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            
            <Hero page={title}>
                <div className="container mx-auto flex items-center pt-24 md:pt-32">
                    <div className="relative w-full flex flex-col text-white">
                        <h1 className="text-4xl text-center font-semibold z-10 mt-12 md:mt-40">The Blog</h1>
                        <img className="absolute top-0 left-0 right-0 text-center w-40 md:w-96 md:h-96 m-auto z-0" src={blogCube}/>
                    </div>
                </div>
            </Hero>

            <div className="bg-white px-4">
                <div className="container mx-auto flex items-center pt-24 md:pt-40 pb-20">
                    <div className="flex flex-col text-gray-800">
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                        <BlogPosts />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
	query($id: String!) {
		wordpressPage(id: { eq: $id }) {
			id
			title
            content
			yoast_meta {
                yoast_wpseo_title
                yoast_wpseo_metadesc
            }
		}
	}
`

export default Blog;