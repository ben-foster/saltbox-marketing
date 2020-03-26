import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";

const Service = ({ data }) => {
    const { title, content, acf, yoast_meta } = data.wordpressWpServices;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero>
                <div className="container mx-auto flex items-center p-20 pt-32">
                    <div className="flex flex-col w-full md:w-2/3 text-white">
                        <h1 className="leading-normal font-bold" dangerouslySetInnerHTML={{ __html: title }}></h1>
                        <p dangerouslySetInnerHTML={{ __html: acf.subheader }}></p>
                    </div>
                </div>
            </Hero>
            <div className="bg-gray-100">
                <div className="container mx-auto flex items-center p-20">
                    <div className="flex flex-col text-gray-800">
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
	query($id: String!) {
		wordpressWpServices(id: { eq: $id }) {
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

export default Service;