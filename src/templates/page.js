import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";

const Page = ({ data }) => {
    const { title, content, acf, yoast_meta } = data.wordpressPage;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero>
                <div className="container mx-auto flex items-center p-16 pt-40 pb-32">
                    <div className="flex flex-col text-white text-center w-full">
                        <h1 className="font-bold text-center" dangerouslySetInnerHTML={{ __html: title }}></h1>
                        { acf.subheader && (
                            <p dangerouslySetInnerHTML={{ __html: acf.subheader }}></p>
                        )}
                    </div>
                </div>
            </Hero>
            <div className="bg-white">
                <div className="container mx-auto flex items-center p-20">
                    <div className="flex flex-col text-gray-800 w-full text-center">
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
            acf {
                subheader
            }
		}
	}
`

export default Page;