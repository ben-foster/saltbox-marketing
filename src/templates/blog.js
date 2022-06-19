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
            
            <Hero className="bg-blog-bg bg-cover bg-no-repeat bg-center h-96">
                <div className="container mx-auto flex items-center pt-32 pb-32">
                    <div className="w-full flex flex-col text-white">
                        <h1 className="text-center font-semibold z-1"> The Blog</h1>

                        <img className="w-54 h-54 shadow-inner m-auto z-0" src={blogCube}/>
                    </div>
                </div>
            </Hero>

            <div className="bg-white">
                <div className="container mx-auto flex items-center py-20">
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