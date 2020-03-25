import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import TeamMembers from "../components/content/team-members";
import ContactUs from "../components/content/contact-us";

const Team = ({ data }) => {
    const { title, content, yoast_meta } = data.wordpressPage;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero fillColor="text-gray-100">
                <div className="container mx-auto flex items-center p-20">
                    <div className="flex pt-8 pb-4 w-full md:w-1/3 justify-center">
                        <h1 className="leading-normal font-bold text-white" dangerouslySetInnerHTML={{ __html: title }}></h1>
                    </div>
                </div>
            </Hero>
            <div className="bg-gray-100">
                <div className="container mx-auto flex items-center p-20">
                    <div className="flex flex-col w-full text-gray-800">
                        <div className="w-full" dangerouslySetInnerHTML={{ __html: content }}></div>
                        <TeamMembers />
                    </div>
                </div>
            </div>
            <ContactUs title="Get In Touch" fillColor="text-gray-100" />
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

export default Team;