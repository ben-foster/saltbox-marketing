import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import BlogPosts from "../components/content/blog-posts";

const Blog = ({ data }) => {
    const { title, content, yoast_meta } = data.wordpressPage;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero>
                <div className="container mx-auto flex items-center p-16 pt-40 pb-32">
                    <div className="w-full flex flex-col text-white">
                        <h1 className="text-center font-bold" dangerouslySetInnerHTML={{ __html: title }}></h1>
                    </div>
                </div>
            </Hero>
            <div className="bg-white">
                <div className="container mx-auto flex items-center py-20 px-8">
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