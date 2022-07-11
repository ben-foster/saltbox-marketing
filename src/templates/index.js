import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import HomeHero from "../components/content/home-hero";
import FeaturedClients from "../components/content/featured-clients";
import HomeFeaturedPosts from "../components/content/home-featured-posts";
import ContactUs from "../components/content/contact-us";
import HomeCallout from "../components/content/home-callout";
import HomePricing from "../components/content/home-pricing";

import expertsCube from "../images/experts-cube.svg"
import noCommitmentsCube from "../images/no-commitments-cube.svg"
import noVariableFeesCube from "../images/no-variable-fees-cube.svg"
import blueLogo from "../images/blue-logo.svg"
import homeBg from "../images/home-bg.svg"
import mobileHomeBg from "../images/mobile-home-bg.svg"

const IndexPage = ({ data }) => {
	const { acf, yoast_meta } = data.wordpressPage;
	return ( 
		<Layout logo={blueLogo}>
			<SEO
				title={yoast_meta.yoast_wpseo_title} 
				description={yoast_meta.yoast_wpseo_metadesc} 
			/>
			<div className="relative w-full">
				<img className="home-hero absolute right-0 top-0 hidden md:block" style={{ width: typeof window !== "undefined" ? window.innerWidth * 0.55 : "auto", zIndex: -1 }} src={homeBg}/>
				<img className="home-hero absolute left-0 right-0 top-0 block md:hidden" style={{ width: typeof window !== "undefined" ? window.innerWidth : "auto", zIndex: -1 }} src={mobileHomeBg}/>
			</div>
			<HomeHero title={acf.hero_title} subtitle={acf.hero_subtitle} link={acf.hero_link} />
			<FeaturedClients title={acf.testimonials_title} /> 
			<HomeCallout title={acf.callout_title} subtitle={acf.callout_subtitle} link={acf.callout_link} />

			<div className="flex flex-col items-center justify-center w-full py-12 md:py-32">
                <h2 className="text-2xl md:text-4xl tracking-wide text-blue-150 mb-20">{acf.uniques_title}</h2>
				<div className="flex flex-col md:flex-row justify-between mt-0 md:mt-16">
					<div className="bg-uniques-blue bg-cover rounded-xl mx-4 md:mx-12 mt-12 md:mt-0">
						<div className="relative px-8 py-10 md:p-10">
							<div className="md:w-48">
								<img
									className="absolute w-40 left-0 right-0 text-center mx-auto"
									style={{ top: "-6.5rem"}}
									src={noVariableFeesCube}
									alt="no variable fees"
								/>
								<h3 className="mt-8 md:mt-12 mb-8 text-center text-white font-bold text-lg normal-case" dangerouslySetInnerHTML={{ __html: acf.unique_one_title }}/>
								<div className="text-center text-white text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: acf.unique_one_description }} />
							</div>
						</div>
					</div>
					<div className="bg-uniques-purple bg-cover rounded-xl mx-4 md:mx-12 mt-32 md:mt-0">
						<div className="relative px-8 py-10 md:p-10">
							<div className="md:w-48">
								<img
									className="absolute w-40 left-0 right-0 text-center mx-auto"
									style={{ top: "-6.5rem"}}
									src={noCommitmentsCube}
									alt="no commitments"
								/>
								<h3 className="mt-8 md:mt-12 mb-8 text-center text-white font-bold text-lg normal-case" dangerouslySetInnerHTML={{ __html: acf.unique_two_title }}/>
								<div className="text-center text-white text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: acf.unique_two_description }} />
							</div>
						</div>
					</div>
					<div className="bg-uniques-light-blue bg-cover rounded-xl mx-4 md:mx-12 mt-32 md:mt-0">
						<div className="relative px-8 py-10 md:p-10">
							<div className="md:w-48">
								<img
									className="absolute w-40 left-0 right-0 text-center mx-auto"
									style={{ top: "-6.5rem"}}
									src={expertsCube}
									alt="experts"
								/>
								<h3 className="mt-8 md:mt-12 mb-8 text-center text-white font-bold text-lg normal-case" dangerouslySetInnerHTML={{ __html: acf.unique_three_title }}/>
								<div className="text-center text-white text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: acf.unique_three_description }} />	
							</div>
						</div>
					</div>
				</div>
            </div>
			
			<HomePricing acf={acf} />
			<HomeFeaturedPosts
				title={acf.featured_posts_title}
				description={acf.featured_posts_subtitle}
			/>
			<ContactUs bgColor="bg-blue-150 md:bg-blue-violet" contactColor="bg-contact-purple"/>
		</Layout>
	)
}


export const query = graphql`
	query($id: String!) {
		wordpressPage(id: { eq: $id }) {
			id
			path
			acf {
				hero_title
				hero_subtitle
				hero_link {
					title
					url
					target
				}
				
				testimonials_header
				testimonials_list {
					testimonials_client_company
				}
				
				callout_title
				callout_subtitle
				callout_link {
					title
					url
					target
				}
				
				uniques_title
				unique_one_title
				unique_one_description
				unique_two_title
				unique_two_description
				unique_three_title
				unique_three_description

				pricing_title
				pricing_subtitle
				pricing_description
				ppc_pricing_title
				ppc_pricing_starting_at
				ppc_pricing_features {
					ppc_pricing_feature
				}
				seo_pricing_title
				seo_pricing_starting_at
				seo_pricing_features {
					seo_pricing_feature
				}

				featured_posts_title
				featured_posts_subtitle
			}
			yoast_meta {
				yoast_wpseo_title
				yoast_wpseo_metadesc
			}
		}
	}
`

export default IndexPage
