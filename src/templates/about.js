import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import TeamMembers from "../components/content/team-members";
import Pets from "../components/content/pets";
import blogCube from "../images/blog-cube.svg"

const Page = ({ data }) => {
    const { title, content, acf, yoast_meta } = data.wordpressPage;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero className="bg-about-bg bg-cover bg-no-repeat bg-center h-60">
                <div className="container mx-auto flex items-center p-16 pt-40 pb-32">
                    <div className="w-full bg-white flex flex-col text-white shadow-lg rounded-lg">
                        <div className={`relative rounded-2xl shadow-xl max-w-5xl mx-auto lg:grid lg:grid-cols-5 p-10`}>
                            <div className="py-16 px-4 bg-about-bg-s bg-auto bg-center bg-no-repeat  sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 justify-content-center">
                                <div className="max-w-lg mx-auto text-white">
                                    <img className="md:w-96 lg:w-96 sm:w-40 xs:w-40" src={blogCube}/>
                                </div>
                            </div>
                            <div className="sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12 text-violet-100">
                                <h1 className="text-2xl text-left text-blue-350 mb-2">About Us</h1>

                                <p className="text-xs">We believe that many businesses struggle to consistently and profitably acquire customers from search engines. The landscape is always evolving and successful tactical execution requires both domain knowledge and niche technical skillsets. Working with agency partners can also be frustrating – businesses can often end up feeling like they don’t have the right level transparency into their data, they don’t understand the decision-making process of their partners, or they are being underserved by cookie-cutter service solutions.</p>
                                <p className="text-xs">In 2018, Saltbox Solutions was founded in an attempt to provide a better solution for marketers looking to augment the strategy and execution of their current digital marketing initiatives. Saltbox focuses on client education and transparency around data, tools, and tactics. We feel like an educated client is a great client – and we aim to build lasting partnerships by listening to the needs of our clients and striving for operational excellence.</p>
                                <p className="text-xs">Saltbox Solutions is located in Raleigh, North Carolina. We primarily work with clients in B2B Software, Health and Fitness, and B2C Services like HVAC and automotive repair.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Hero>
            <div id="story" className="bg-white mt-96">
                {/* <div className="max-w-4xl mx-auto flex items-center px-6 md:px-16 pt-16">
                    <div className="flex flex-col text-gray-800 text-sm md:text-base">
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                </div> */}
                <div id="team" className="container mx-auto flex items-center p-16 pt-8 md:pt-16">
                    <div className="flex flex-col text-gray-800">
                        <h2 className="text-blue-150">Our Team</h2>
                        <TeamMembers />
                    </div>
                </div>
                <div id="pets" className="container mx-auto flex items-center p-16 pt-8 md:pt-16">
                    <div className="flex flex-col text-gray-800">
                        <h2 className="text-blue-150">Our Support Staff</h2>
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