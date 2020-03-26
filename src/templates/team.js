import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import TeamMembers from "../components/content/team-members";
import ContactUs from "../components/content/contact-us";
import Pets from "../components/content/pets";

const Team = ({ data }) => {
    const { title, content, yoast_meta, acf } = data.wordpressPage;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero fillColor="text-gray-100">
                <div className="container mx-auto flex items-center p-20 pt-32">
                    <div className="flex flex-col pt-8 pb-4 w-full md:w-1/2 justify-center">
                        <h1 className="leading-normal font-bold text-white" dangerouslySetInnerHTML={{ __html: title }}></h1>
                        <p className="w-full text-white" dangerouslySetInnerHTML={{ __html: acf.subheader }}></p>
                    </div>
                </div>
            </Hero>
            <div className="bg-gray-100">
                <div className="container mx-auto flex flex-col items-center p-20">
                    <div className="flex flex-col w-full text-gray-800 mb-16">
                        <TeamMembers />
                    </div>
                    <div className="flex flex-col w-full text-gray-800">
                        <h2 className="font-bold text-3xl text-gray-500 text-center mb-8">Our Support Staff</h2>
                        <Pets />
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
            acf {
                subheader
            }
		}
	}
`

export default Team;