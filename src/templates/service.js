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

const Service = ({ data }) => {
    const { title, content, acf, yoast_meta } = data.wordpressWpServices;
    const animateOnHover = false;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero>
                <div className="container mx-auto flex items-center pt-40 py-32">
                    <div className="flex flex-col w-full text-white relative">
                        <h1 className="text-center font-bold mb-40" dangerouslySetInnerHTML={{ __html: title }}></h1>
                        <InView rootMargin="-250px 0px -250px 0px">
                            {({ inView, ref, entry }) => (
                                <>
                                    { title === "Web Analytics Solutions" && (
                                        <div ref={ref} className="z-50 -mt-16 -mb-48">
                                            <AnalyticsAnimation className="w-72 md:w-1/2 h-auto mx-auto shadow-md mb-4" animateOnHover={animateOnHover} inView={inView} />
                                        </div>
                                    )}
                                    { title === "Pay-per-Click Advertising" && (
                                        <div ref={ref} className="z-50 -mt-16 -mb-48">
                                            <PPCAnimation className="w-72 md:w-1/2 h-auto mx-auto shadow-md mb-4" animateOnHover={animateOnHover} inView={inView} />
                                        </div>
                                    )}
                                    { title === "Search Engine Optimization" && (
                                        <div ref={ref} className="z-50 -mt-16 -mb-48">
                                            <SEOAnimation className="w-72 md:w-1/2 h-auto mx-auto shadow-md mb-4" animateOnHover={animateOnHover} inView={inView} />
                                        </div>
                                    )}
                                </>
                            )}
                        </InView>
                    </div>
                </div>
            </Hero>
            <div className="bg-white">
                <div className="container mx-auto flex items-center pt-20">
                    <div className="max-w-4xl mx-auto flex items-center px-6 md:px-16 py-8 text-gray-800 text-base">
                        <p className="w-full" dangerouslySetInnerHTML={{ __html: acf.subheader }}></p>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center">
                    <div className="flex items-center justify-center w-full md:w-auto px-6 py-12">
                        <FeaturedImage className="w-128 rounded shadow-lg" featuredImage={acf.subservice_one_image} />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                        <h2 className="font-bold text-2xl md:text-3xl text-left mb-2" dangerouslySetInnerHTML={{ __html: acf.subservice_one_title }}></h2>
                        <div className="max-w-sm" dangerouslySetInnerHTML={{ __html: acf.subservice_one_description }}></div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center">
                    <div className="flex items-center justify-center w-full md:w-auto px-6 py-12 order-first md:order-last">
                        <FeaturedImage className="w-128 rounded shadow-lg" featuredImage={acf.subservice_two_image} />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                        <h2 className="font-bold text-2xl md:text-3xl text-left mb-2" dangerouslySetInnerHTML={{ __html: acf.subservice_two_title }}></h2>
                        <div className="max-w-sm" dangerouslySetInnerHTML={{ __html: acf.subservice_two_description }}></div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center">
                    <div className="flex items-center justify-center w-full md:w-auto px-6 py-12">
                        <FeaturedImage className="w-128 rounded shadow-lg" featuredImage={acf.subservice_three_image} />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full md:w-1/3 px-6 md:px-0 pb-3 md:pb-0">
                        <h2 className="font-bold text-2xl md:text-3xl text-left mb-2" dangerouslySetInnerHTML={{ __html: acf.subservice_three_title }}></h2>
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