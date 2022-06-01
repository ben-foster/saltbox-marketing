import React from "react";
import { graphql } from "gatsby";
import { InView } from "react-intersection-observer"

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import ContactUs from "../components/content/contact-us";
import FeaturedImage from "../components/lib/featured-image";
import WhySaltbox from "../components/content/why-saltbox";
import HowToGetStarted from "../components/content/how-to-get-started";
import AnalyticsAnimation from "../components/svg/analytics-animation";
import PPCAnimation from "../components/svg/ppc-animation";
import SEOAnimation from "../components/svg/seo-animation";
import ppcBox from "../images/ppc-cube.svg"
import seoBox from "../images/seo-cube.svg"
import PPCComponent from "../components/content/ppc";
import SEOComponent from "../components/content/seo";

const Service = ({ data }) => {
    const { title, content, acf, yoast_meta } = data.wordpressWpServices;
    const animateOnHover = false;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />

            <InView rootMargin="-250px 0px -250px 0px">
                {({ inView, ref, entry }) => (
                <Hero className={`${title === "Pay-per-Click Advertising" ? 'bg-ppc-bg' : title === "Search Engine Optimization" ? "bg-seo-bg" : "bg-careers-bg"} bg-cover bg-no-repeat bg-center overflow-visible`}>
                    <div className="container mx-auto flex items-center pt-40 py-32">
                        <div className="flex flex-col w-full text-white relative">
                            <>
                                { title === "Web Analytics Solutions" && (
                                    <div className="container mx-auto flex flex-col md:flex-row justify-center">
                                        <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                                            <h2 className="font-bold text-2xl md:text-3xl text-left mb-0">Pay-per-Click (PPC)</h2>
                                            <small className="font-bolder mb-2">Google and Microsoft Advertising</small>
                                            <div className="max-w-sm text-xs">
                                                <span>We believe you should manage your money like it's your money. We treat our advertising campaigns with the rigor that we would treat managing our retirement accounts. Succeeding at real-time auction-based advertising requires strong analytics and diligent execution of a recurring set of optimization tactics.</span>
                                            </div>

                                            <button type="button" className="mt-3 inline-flex items-center px-4 py-2 rounded-sm border border-transparent text-sm leading-4 font-medium shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                                Get started
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-center w-full md:w-auto px-6 py-12">
                                            <img className="md:w-96 lg:w-96 sm:w-40 xs:w-40" src={ppcBox}/>
                                        </div>
                                    </div>
                                )}
                                { title === "Pay-per-Click Advertising" && (
                                    <>
                                        <div className="container mx-auto flex flex-col md:flex-row justify-center">
                                            <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                                                <h2 className="font-bold text-2xl md:text-3xl text-left mb-0">Pay-per-Click (PPC)</h2>
                                                <small className="font-bolder mb-2">Google and Microsoft Advertising</small>
                                                <div className="max-w-sm text-xs">
                                                    <span>We believe you should manage your money like it's your money. We treat our advertising campaigns with the rigor that we would treat managing our retirement accounts. Succeeding at real-time auction-based advertising requires strong analytics and diligent execution of a recurring set of optimization tactics.</span>
                                                </div>

                                                <button type="button" className="mt-3 inline-flex items-center px-4 py-2 rounded-sm border border-transparent text-sm leading-4 font-medium shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                                    Get started
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-center w-full md:w-auto px-6 py-12">
                                                <img className="md:w-96 lg:w-96 sm:w-40 xs:w-40" src={ppcBox}/>
                                            </div>
                                        </div>
                                    </>
                                )}
                                { title === "Search Engine Optimization" && (
                                    <>
                                        <div className="container mx-auto flex flex-col md:flex-row justify-center">
                                            <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                                                <h2 className="font-bold text-2xl md:text-3xl text-left mb-0">Search Engine Optimization (SEO)</h2>
                                                <small className="font-bolder mb-2">Search Engine Optimization Program</small>
                                                <div className="max-w-sm text-xs">
                                                    <span>SEO is a great way to earn traffic and leads from platforms like Google and Bing. Winning page-one ranks for competitive queries is no easy task. It takes a strong strategy and rigorous execution of technical optimization strategies, content production, content optimization, and promotion.</span>
                                                </div>

                                                <button type="button" className="mt-3 inline-flex items-center px-4 py-2 rounded-sm border border-transparent text-sm leading-4 font-medium shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                                    Get started
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-center w-full md:w-auto px-6 py-12">
                                                <img className="md:w-96 lg:w-96 sm:w-40 xs:w-40" src={seoBox}/>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        </div>
                    </div>
                </Hero>
            )}
            </InView>
            <div className="bg-white">
                <InView rootMargin="-250px 0px -250px 0px">
                    {({ inView, ref, entry }) => (
                        <>
                            { title === "Pay-per-Click Advertising" && (
                                <PPCComponent/>
                            )}
                            { title === "Search Engine Optimization" && (
                                <SEOComponent/>
                            )}
                        </>
                    )}
                </InView>
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
