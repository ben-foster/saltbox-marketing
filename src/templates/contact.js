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
                <div className="container mx-auto flex items-center p-20">
                    <div className="flex flex-col w-full text-gray-800 relative pb-64">
                        <div className="absolute right-0 bottom-0 flex flex-col p-16 bg-blue-900 rounded-lg shadow">
                            <h2 className="text-white font-bold text-center">Get In Touch</h2>
                            <ContactForm />
                        </div>
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