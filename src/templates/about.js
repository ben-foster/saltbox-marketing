import React from "react";
import { Link, graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import TeamMembers from "../components/content/team-members";
import Pets from "../components/content/pets";
import blogCube from "../images/blog-cube.svg";
import ctaBg from "../images/blog-post-cta-bg.svg"

const Page = ({ data }) => {
    const { title, yoast_meta } = data.wordpressPage;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero page={title} className="bg-cover bg-mobile-about md:bg-none">
                <div className="container mx-auto flex items-center md:p-16 pt-20 md:pt-40">
                    <div className="md:bg-white relative rounded-2xl shadow-xl max-w-5xl mx-auto lg:grid lg:grid-cols-5 md:p-16">
                        <div className="md:py-16 px-4 md:bg-about-bg-s bg-auto bg-center bg-no-repeat  sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 justify-content-center rounded-xl">
                            <div className="max-w-lg mx-auto text-white">
                                <img className="w-40 mx-auto md:mx-0 md:w-96" width="300" height="300" src={blogCube}/>
                            </div>
                        </div>
                        <div className="sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12 text-white md:text-violet-100">
                            <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-center md:text-left text-white md:text-blue-350 mb-8 mt-2">About Us</h1>
                            <p className="text-sm md:font-light leading-snug">We believe that many businesses struggle to consistently and profitably acquire customers from search engines. The landscape is always evolving and successful tactical execution requires both domain knowledge and niche technical skillsets. Working with agency partners can also be frustrating – businesses can often end up feeling like they don’t have the right level transparency into their data, they don’t understand the decision-making process of their partners, or they are being underserved by cookie-cutter service solutions.</p>
                            <p className="text-sm md:font-light leading-snug">In 2018, Saltbox Solutions was founded in an attempt to provide a better solution for marketers looking to augment the strategy and execution of their current digital marketing initiatives. Saltbox focuses on client education and transparency around data, tools, and tactics. We feel like an educated client is a great client – and we aim to build lasting partnerships by listening to the needs of our clients and striving for operational excellence.</p>
                            <p className="text-sm md:font-light leading-snug">Saltbox Solutions is located in Raleigh, North Carolina. We primarily work with clients in B2B Software, Health and Fitness, and B2C Services like HVAC and automotive repair.</p>
                        </div>
                    </div>
                </div>
            </Hero>
            <div id="story" className="bg-white">
                {/* <div className="max-w-4xl mx-auto flex items-center px-6 md:px-16 pt-16">
                    <div className="flex flex-col text-gray-800 text-sm md:text-base">
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                </div> */}
                <div id="team" className="container mx-auto flex items-center p-16 pt-16 md:pt-0">
                    <div className="flex flex-col text-gray-800">
                        <h2 className="text-3xl text-blue-150">Our Team</h2>
                        <TeamMembers />
                    </div>
                </div>
                <div id="pets" className="container mx-auto flex items-center p-16 pt-0 md:pt-16">
                    <div className="flex flex-col text-gray-800">
                        <h2 className="text-3xl text-blue-150">Support Staff</h2>
                        <Pets />
                    </div>
                </div>
            </div>
            
            <div className="w-full relative">
                <div className="w-11/12 md:w-auto md:max-w-4xl mx-auto flex flex-col md:flex-row rounded-xl bg-cta bg-cover px-16 py-16 md:py-24">
                    <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
                        <h2 className="font-bold max-w-md text-white leading-tight tracking-wide text-2xl md:text-3xl text-left mb-0">Join Our Team.</h2>
                        <div className="max-w-sm text-white text-sm leading-relaxed mt-3">
                        Looking for a new position in PPC, SEO or analytics? Think your picture would look good on this page? Check out our open positions on our Careers page.
                        </div>
                        <Link 
                            type="button"
                            href="/contact/"
                            className="mt-3 inline-flex items-center px-6 py-3 rounded-lg border border-transparent text-sm leading-4 font-bold shadow-sm text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Careers
                        </Link>
                    </div>
                    <div className="hidden w-full md:w-1/2 md:flex items-center justify-center">
                        <img className="w-96 h-96" src={blogCube}/>
                    </div>
                </div>
                <div className="pt-8"></div>
				<img className="absolute left-0 right-0 bottom-0" style={{ width: typeof window !== "undefined" ? window.innerWidth : "auto", zIndex: -1 }} src={ctaBg}/>
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