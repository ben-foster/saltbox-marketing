import React from "react";
import { Link, graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";

const Post = ({ data }) => {
    const { title, content, author, acf, yoast_meta } = data.wordpressPost;
    return (
        <Layout>
            <SEO
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <div className="bg-gray-100">
                <Hero className="pb-48">
                    <div className="max-w-3xl mx-auto flex flex-col items-center pt-32 px-20">
                        <h1 className="leading-normal text-white">{title}</h1>
                        { acf.subheader && (
                            <p className="text-2xl font-light text-white italic leading-snug pt-2 mb-8">{acf.subheader}</p>
                        )}
                        <p className="text-sm mb-3 text-white self-start">
                            {"by "}
                            <Link 
                                to={author.link.replace("http://saltbox-wordpress.flywheelsites.com", "")}
                                className="no-underline"    
                            >
                                <span className="text-white">{author.name}</span>
                            </Link>
                        </p>
                    </div>
                </Hero>
                <div className="max-w-3xl mx-auto -mt-40 relative z-10 flex flex-col bg-white items-center py-16 px-20 rounded-lg shadow-lg">
                    <div className=" w-full">
                        <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: content }}></div>    
                    </div>
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
