import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";

const Post = ({ data }) => {
    console.log(data)
    const { title, content, author, acf, yoast_meta } = data.wordpressPost;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <div className="mx-auto max-w-3xl flex flex-row flex-wrap items-center py-64 px-20">
                <div className="flex flex-col text-gray-800">
                    <h1 className="leading-normal">{title}</h1>
                    { acf.subheader && (
                        <h2 className="font-light text-gray-500 italic leading-snug mb-8">{acf.subheader}</h2>
                    )}
                    <p className="text-sm mb-3">by <span>{author.name}</span></p>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
