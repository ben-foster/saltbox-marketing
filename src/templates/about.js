import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import TeamMembers from "../components/content/team-members";
import Pets from "../components/content/pets";

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
                    <div className="w-full flex flex-col text-white">
                        <h1 className="text-center font-bold" dangerouslySetInnerHTML={{ __html: title }}></h1>
                        { acf.subheader && (
                            <p dangerouslySetInnerHTML={{ __html: acf.subheader }}></p>
                        )}   
                    </div>
                </div>
            </Hero>
            <div id="story" className="bg-white">
                <div className="max-w-4xl mx-auto flex items-center px-6 md:px-16 pt-16">
                    <div className="flex flex-col text-gray-800 text-sm md:text-base">
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                </div>
                <div id="team" className="container mx-auto flex items-center p-16 pt-8 md:pt-16">
                    <div className="flex flex-col text-gray-800">
                        <h2>Our Team</h2>
                        <TeamMembers />
                    </div>
                </div>
                <div id="pets" className="container mx-auto flex items-center p-16 pt-8 md:pt-16">
                    <div className="flex flex-col text-gray-800">
                        <h2>Our Support Staff</h2>
                        <Pets />
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