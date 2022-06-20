import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import careersBox from "../images/careers-cube.svg"
import cubeLightBlue from "../images/cube-light-blue.svg"
import cubeBlue from "../images/cube-blue.svg"
import cubePurple from "../images/cube-purple.svg"

import ServiceItem from "./service-item";

const Careers = ({ data }) => {
    const { title, content, acf, yoast_meta } = data.wordpressPage;

    const ppcText = {
        'title': "Pay-per-Click (PPC)",
        'secondary': "Google and Microsoft Advertising",
        'body': "We believe you should manage your money like it's your money. We treat our advertising campaigns with the rigor that we would treat managing our retirement accounts. Succeeding at real-time auction-based advertising requires strong analytics and diligent execution of a recurring set of optimization tactics."
    };

    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero className="bg-careers-bg bg-cover bg-no-repeat bg-center">
                <div className="container mx-auto flex items-center pt-40 py-32">
                    <div className="flex flex-col w-full text-white relative">
                        <ServiceItem itemImg={careersBox} itemText={ppcText}/>
                    </div>
                </div>
            </Hero>

            <div className="container mx-auto bg-white px-32 py-10">
                <div>
                    <p className="text-2xl leading-6 text-blue-250 font-bold">ANALYTICS</p>

                    <div className="shadow-2xl rounded-lg px-10 bg-white flex items-center space-x-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <div className="flex-shrink-0 text-center mt-12">
                            <img className="w-100" src={cubeLightBlue} alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">Web Analytics Manager</p>
                            <p className="text-sm text-gray-500 truncate">6/21/2020 Full-time, Remote</p>
                            <button type="button" className="inline-flex items-center px-8 h-10 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-green-100 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Apply Now
                            </button>
                        </div>

                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-gray-150">The Web Analytics Manager is responsible for managing all tracking configuration and reporting for our clients, including event tracking in Google Tag Manager, integrating clients’ systems for lead attribution data flow, creating and maintaining Google Data Studio dashboards.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <p className="text-2xl leading-6 text-blue-250 font-bold">SEO</p>

                    <div className="shadow-2xl rounded-lg px-10 bg-white flex items-center space-x-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <div className="flex-shrink-0 text-center mt-12">
                            <img className="w-100" src={cubeBlue} alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">SEO Analyst</p>
                            <p className="text-sm text-gray-500 truncate">6/21/2020 Full-time, Remote</p>
                            <button type="button" className="inline-flex items-center px-8 h-10 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-green-100 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Apply Now
                            </button>
                        </div>

                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-gray-150">The SEO analyst is responsible for managing all search engine optimization strategies for our clients, including keyword research, on-site optimization, competitive analysis, and link-building outreach.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <p className="text-2xl leading-6 text-blue-250 font-bold">PPC</p>

                    <div className="shadow-2xl rounded-lg px-10 bg-white flex items-center space-x-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <div className="flex-shrink-0 text-center mt-12">
                            <img className="w-100" src={cubePurple} alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">PPC Analyst</p>
                            <p className="text-sm text-gray-500 truncate">6/21/2020 Full-time, Remote</p>
                            <button type="button" className="inline-flex items-center px-8 h-10 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-green-100 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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