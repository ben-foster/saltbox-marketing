import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import careersBox from "../images/careers-cube.svg"
import cubeLightBlue from "../images/cube-light-blue.svg"
import cubeBlue from "../images/cube-blue.svg"
import cubePurple from "../images/cube-purple.svg"

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


            <div className="bg-white p-10">

                <div>
                    <h3 className="text-lg leading-6 font-medium text-blue-250">ANALYTICS</h3>

                    <div className="shadow-2xl rounded-lg p-10 relative border border-gray-300 bg-white px-6 py-5 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <div className="flex-shrink-0 text-center">
                            <img className="w-100" src={cubeLightBlue} alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">Web Analytics Manager</p>
                            <p className="text-sm text-gray-500 truncate">6/21/2020 Full-time, Remote</p>
                            <button type="button" className="inline-flex items-center p-2 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Apply Now
                            </button>
                        </div>

                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-gray-150">The Web Analytics Manager is responsible for managing all tracking configuration and reporting for our clients, including event tracking in Google Tag Manager, integrating clients’ systems for lead attribution data flow, creating and maintaining Google Data Studio dashboards.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg leading-6 font-medium text-blue-150">SEO</h3>

                    <div className="shadow-2xl rounded-lg p-10 relative border border-gray-300 bg-white px-6 py-5 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <div className="flex-shrink-0 text-center">
                            <img className="w-100" src={cubeBlue} alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">SEO Analyst</p>
                            <p className="text-sm text-gray-500 truncate">6/21/2020 Full-time, Remote</p>
                            <button type="button" className="inline-flex items-center p-2 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Apply Now
                            </button>
                        </div>

                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-gray-150">The SEO analyst is responsible for managing all search engine optimization strategies for our clients, including keyword research, on-site optimization, competitive analysis, and link-building outreach.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg leading-6 font-medium text-blue-250">PPC</h3>

                    <div className="shadow-2xl rounded-lg p-10 relative border border-gray-300 bg-white px-6 py-5 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <div className="flex-shrink-0 text-center">
                            <img className="w-100" src={cubePurple} alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">PPC Analyst</p>
                            <p className="text-sm text-gray-500 truncate">6/21/2020 Full-time, Remote</p>
                            <button type="button" className="inline-flex items-center p-2 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Apply Now
                            </button>
                        </div>

                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-gray-150">The pay-per-click analyst is responsible for managing online advertising campaigns for our clients including paid search, display advertising, social advertising, and video advertising.</p>
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

export default Careers;