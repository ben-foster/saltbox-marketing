import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";

const TeamMember = ({ data }) => {
    const { title, content, yoast_meta } = data.wordpressWpCaseStudies;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero>
                <div className="container mx-auto flex items-center p-20">
                    <div className="flex flex-col text-gray-800">
                        <h1>{title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                </div>
            </Hero>
        </Layout>
    )
}

export const query = graphql`
	query($id: String!) {
		wordpressWpCaseStudies(id: { eq: $id }) {
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

export default TeamMember;
