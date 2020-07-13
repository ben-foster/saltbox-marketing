import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import ContactUs from "../components/content/contact-us";
import FeaturedImage from "../components/lib/featured-image";
import WhySaltbox from "../components/content/why-saltbox";
import HowToGetStarted from "../components/content/how-to-get-started";

const Service = ({ data }) => {
    const { title, content, acf, yoast_meta } = data.wordpressWpServices;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero>
                <div className="container mx-auto flex items-center pt-40 py-32">
                    <div className="flex flex-col w-full text-white">
                        <h1 className="text-center font-bold" dangerouslySetInnerHTML={{ __html: title }}></h1>
                    </div>
                </div>
            </Hero>
            <div className="bg-white">
                <div className="container mx-auto flex items-center pt-20 pb-12">
                    <div className="flex flex-col w-full">
                        <p className="w-full px-6 md:p-0 md:w-128 mx-auto text-base md:text-lg" dangerouslySetInnerHTML={{ __html: acf.subheader }}></p>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center pb-12">
                    <div className="flex items-center justify-center w-full md:w-auto p-12">
                        <FeaturedImage className="w-128 rounded shadow-lg" featuredImage={acf.subservice_one_image} />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full md:w-1/3 pb-8 md:pb-0">
                        <h2 className="font-bold text-3xl text-left" dangerouslySetInnerHTML={{ __html: acf.subservice_one_title }}></h2>
                        <div className="max-w-sm" dangerouslySetInnerHTML={{ __html: acf.subservice_one_description }}></div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center pb-12">
                    <div className="flex flex-col items-start justify-center w-full md:w-1/3 pb-8 md:pb-0">
                        <h2 className="font-bold text-3xl text-left" dangerouslySetInnerHTML={{ __html: acf.subservice_two_title }}></h2>
                        <div className="max-w-sm" dangerouslySetInnerHTML={{ __html: acf.subservice_two_description }}></div>
                    </div>
                    <div className="flex items-center justify-center w-full md:w-auto p-12">
                        <FeaturedImage className="w-128 rounded shadow-lg" featuredImage={acf.subservice_two_image} />
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center pb-12">
                    <div className="flex items-center justify-center w-full md:w-auto p-12">
                        <FeaturedImage className="w-128 rounded shadow-lg" featuredImage={acf.subservice_three_image} />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full md:w-1/3 pb-8 md:pb-0">
                        <h2 className="font-bold text-3xl text-left" dangerouslySetInnerHTML={{ __html: acf.subservice_three_title }}></h2>
                        <div className="max-w-sm" dangerouslySetInnerHTML={{ __html: acf.subservice_three_description }}></div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <WhySaltbox />
                    <HowToGetStarted />
                </div>
                <ContactUs title="Get Started Today" fillColor="text-gray-100" />
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
                subservice_one_title
                subservice_one_description
                subservice_one_image {
                    alt_text
                    localFile {
                        publicURL
                        extension
                        childImageSharp {
                            fluid(maxWidth: 500, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                subservice_two_title
                subservice_two_description
                subservice_two_image {
                    alt_text
                    localFile {
                        publicURL
                        extension
                        childImageSharp {
                            fluid(maxWidth: 500, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                subservice_three_title
                subservice_three_description
                subservice_three_image {
                    alt_text
                    localFile {
                        publicURL
                        extension
                        childImageSharp {
                            fluid(maxWidth: 500, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
		}
	}
`

export default Service;