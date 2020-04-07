import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import ContactForm from "../components/forms/contact-form";

const Contact = ({ data }) => {
    const { title, content, yoast_meta, acf } = data.wordpressPage;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero>
                <div className="container mx-auto flex items-center p-20 pt-32">
                    <div className="flex flex-col w-full md:w-1/2 text-white">
                        <h1 className="leading-normal font-bold" dangerouslySetInnerHTML={{ __html: title }}></h1>
                        <p dangerouslySetInnerHTML={{ __html: acf.subheader }}></p>
                    </div>
                </div>
            </Hero>
            <div className="bg-gray-100">
                <div className="container mx-auto flex items-center pt-10 pb-20">
                    <div className="flex flex-col w-96 mx-auto text-gray-800">
                        <p>Please fill out the form below, and we will reach out via email to schedule a discovery call.</p>
                        <ContactForm />
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

export default Contact;