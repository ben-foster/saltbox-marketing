import React from "react";
import { Link, graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import careersBox from "../images/careers-cube.svg"

import ServiceItem from "../components/content/service-item";
import JobListings from "../components/content/job-listings";

const Careers = ({ data }) => {
    const { title, content, yoast_meta } = data.wordpressPage;

    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero page={title}>
                <div className="container mx-auto flex items-center pt-32 md:pt-40 py-32">
                    <div className="flex flex-col w-full text-white relative">
                        <ServiceItem img={careersBox} title={title} content={content} />
                    </div>
                </div>
            </Hero>

            <div className="container mx-auto bg-white px-4 md:px-32 py-12 md:py-16">
                <h2 className="text-3xl text-center md:text-left text-blue-150 font-bold">Join Our Team.</h2>
                <JobListings />
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

export default Careers;