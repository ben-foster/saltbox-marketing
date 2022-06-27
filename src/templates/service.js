import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import ppcBox from "../images/ppc-cube.svg"
import seoBox from "../images/seo-cube.svg"
import PPCComponent from "../components/content/ppc";
import SEOComponent from "../components/content/seo";

import ServiceItem from "./service-item";

const Service = ({ data }) => {
    const { title, content, acf, yoast_meta } = data.wordpressWpServices;
    const animateOnHover = false;

    const ppcText = {
        'title': "Pay-per-Click (PPC)",
        'secondary': "Google and Microsoft Advertising",
        'body': "We believe you should manage your money like it's your money. We treat our advertising campaigns with the rigor that we would treat managing our retirement accounts. Succeeding at real-time auction-based advertising requires strong analytics and diligent execution of a recurring set of optimization tactics."
    };

    const seoText = {
        'title': "Search Engine Optimization (SEO)",
        'secondary': "Search Engine Optimization Program",
        'body': "SEO is a great way to earn traffic and leads from platforms like Google and Bing. Winning page-one ranks for competitive queries is no easy task. It takes a strong strategy and rigorous execution of technical optimization strategies, content production, content optimization, and promotion."
    };

    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />

            <Hero page={title}>
                <div className="container mx-auto flex items-center pt-12 pb-20">
                    <div className="flex flex-col w-full text-white relative py-10">
                        <>
                            {/* { title === "Web Analytics Solutions" && (
                                <ServiceItem/>
                            )} */}
                            { title === "Pay-per-Click Advertising" && (
                                <ServiceItem itemImg={ppcBox} itemText={ppcText}/>
                            )}
                            { title === "Search Engine Optimization" && (
                                <ServiceItem itemImg={seoBox} itemText={seoText}/>
                            )}
                        </>
                    </div>
                </div>
            </Hero>
            <div className="bg-transparent">
                <>
                    { title === "Pay-per-Click Advertising" && (
                        <PPCComponent/>
                    )}
                    { title === "Search Engine Optimization" && (
                        <SEOComponent/>
                    )}
                </>
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
