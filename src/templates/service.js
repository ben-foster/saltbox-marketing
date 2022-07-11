import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import ppcBox from "../images/ppc-cube.svg"
import seoBox from "../images/seo-cube.svg"
import PPCComponent from "../components/content/ppc";
import SEOComponent from "../components/content/seo";

import ServiceItem from "../components/content/service-item";

const Service = ({ data }) => {
    const { title, content, acf, yoast_meta } = data.wordpressWpServices;

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
                            { title === "Pay-per-Click (PPC)" && (
                                <ServiceItem img={ppcBox} title={title} subtitle={acf.hero_subtitle} content={acf.hero_description} link={acf.hero_link} />
                            )}
                            { title === "Search Engine Optimization (SEO)" && (
                                <ServiceItem img={seoBox} title={title} subtitle={acf.hero_subtitle} content={acf.hero_description} link={acf.hero_link} />
                            )}
                        </>
                    </div>
                </div>
            </Hero>
            <div className="bg-transparent">
                <>
                    { title === "Pay-per-Click (PPC)" && (
                        <PPCComponent acf={acf} />
                    )}
                    { title === "Search Engine Optimization (SEO)" && (
                        <SEOComponent acf={acf} />
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
                hero_subtitle
                hero_description
                hero_link {
                    title
                    target
                    url
                }
                feature_one_title
                feature_one_description
                feature_two_title
                feature_two_description
                feature_three_title
                feature_three_description
                feature_four_title
                feature_four_description
            }
		}
	}
`

export default Service;
