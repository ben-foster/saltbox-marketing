import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import careersBox from "../images/careers-cube.svg"

const Careers = ({ data }) => {
    const { title, content, acf, yoast_meta } = data.wordpressPage;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero className="bg-careers-bg bg-cover bg-no-repeat bg-center">
                <div className="container mx-auto flex items-center pt-40 py-32">
                    <div className="flex flex-col w-full text-white relative">
                        <div className="container mx-auto flex flex-col md:flex-row justify-center">
                            <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                                <h2 className="font-bold text-2xl md:text-3xl text-left mb-0">Careers</h2>
                                <div className="max-w-sm text-sm mt-3">
                                    <span>View our open positions here. Though we have an office in Raleigh, NC, we have teammates on both the east and west coast. If you can work in the U.S. legally, you are good to go! Come join our dedicated team of industry experts and grow within a company culture designed to support you to success.</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-center w-full md:w-auto px-6 py-12">
                                <img className="md:w-96 lg:w-96 sm:w-40 xs:w-40" src={careersBox}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Hero>
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