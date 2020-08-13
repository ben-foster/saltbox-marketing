import React from "react";
import { Link, graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import FeaturedServices from "../components/content/featured-services";
import WhySaltbox from "../components/content/why-saltbox";
import HowToGetStarted from "../components/content/how-to-get-started";
import ContactUs from "../components/content/contact-us";

const Services = ({ data }) => {
    const { title, content, acf, yoast_meta } = data.wordpressPage;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero>
                <div className="container mx-auto flex items-center p-16 pt-40 pb-32">
                    <div className="flex flex-col w-full text-white">
                        <h1 className="text-center font-bold" dangerouslySetInnerHTML={{ __html: title }}></h1>
                    </div>
                </div>
            </Hero>
            <div className="bg-white">
                <div className="container mx-auto flex items-center py-20">
                    <div className="flex flex-col w-full">
                        <div className="max-w-4xl mx-auto flex items-center px-16 py-8 text-gray-800">
                            <p className="w-full" dangerouslySetInnerHTML={{ __html: acf.subheader }}></p>
                        </div>
                        <FeaturedServices title="Our Services" />
                        <WhySaltbox />
                        <HowToGetStarted />
                    </div>
                </div>
                <ContactUs title="Get Started Today" fillColor="text-gray-100" />
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

export default Services;