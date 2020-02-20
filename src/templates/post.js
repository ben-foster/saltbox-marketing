import React from "react";
import { Link, graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";

const Post = ({ data }) => {
    const { title, content, author, acf, yoast_meta } = data.wordpressPost;
    return (
        <Layout>
            <SEO
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <div className="max-w-3xl mx-auto flex items-center pt-32 px-20">
                <div className="flex flex-col">
                    <h1 className="leading-normal">{title}</h1>
                    { acf.subheader && (
                        <p className="text-2xl font-light text-gray-500 italic leading-snug pt-2 mb-8">{acf.subheader}</p>
                    )}
                    <p className="text-sm mb-3">
                        {"by "}
                        <Link 
                            to={author.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}
                            className="no-underline"    
                        >
                            <span>{author.name}</span>
                        </Link>
                    </p>
                    <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: content }}></div>    
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
