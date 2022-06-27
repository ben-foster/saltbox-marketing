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
				<img className="absolute right-0 top-0 hidden md:block" style={{ width: typeof window !== "undefined" ? window.innerWidth * 0.55 : "auto", zIndex: -1 }} src={homeBg}/>
				<img className="absolute left-0 right-0 top-0 block md:hidden" style={{ width: typeof window !== "undefined" ? window.innerWidth : "auto", zIndex: -1 }} src={mobileHomeBg}/>
			</div>
			<HomeHero
				taglineLineOne={acf.hero.hero_tagline_line_one}
				taglineLineTwo={acf.hero.hero_tagline_line_two}
			/>
			<FeaturedClients /> 
			<HomeCallout/>

			<div className="flex flex-col items-center justify-center w-full py-12 md:py-32">
                <h2 className="text-2xl md:text-4xl tracking-wide text-blue-150 mb-20">We do things a little differently.</h2>
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
								<h3 className="mt-8 md:mt-12 mb-8 text-center text-white font-bold text-lg normal-case">No Variable Fees</h3>
								<div className="text-center">
									<p className="md:mb-8 text-white text-sm leading-relaxed">We manage PPC using a flat-rate service fee, so we aren’t incentivized to just spend money.</p>
									<p className="md:mb-8 text-white text-sm leading-relaxed">We are incentivized to see measurable returns from your investment in our partnership.</p>
								</div>	
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
								<h3 className="mt-8 md:mt-12 mb-8 text-center text-white font-bold text-lg normal-case">No Commitments</h3>
								<div className="text-center">
									<p className="md:mb-8 text-white text-sm leading-relaxed">We don’t lock you into minimum terms and we enable scope flexibility month-to-month.</p>
									<p className="md:mb-8 text-white text-sm leading-relaxed">We want to work together, but only if it’s working for you too.</p>
								</div>	
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
								<h3 className="mt-8 md:mt-12 mb-8 text-center text-white font-bold text-lg normal-case">No Account Managers</h3>
								<div className="text-center">
									<p className="md:mb-8 text-white text-sm leading-relaxed">We don’t pay people to answer the phone, send emails, or set meetings.</p>
									<p className="md:mb-8 text-white text-sm leading-relaxed">We want you to benefit from working directly with the analysts executing the work.</p>
								</div>	
							</div>
						</div>
					</div>
				</div>
            </div>
			
			<HomePricing/>
			<HomeFeaturedPosts
				title={"Learn the tools of the trade."}
				description={"Unlock the secrets to search engine acquisition."}
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
				hero {
					hero_background_image {
						localFile {
							publicURL
							extension
							childImageSharp {
								resolutions(width: 1800) {
									...GatsbyImageSharpResolutions_withWebp
								}
							}
						}
					}
					hero_tagline_line_one
					hero_tagline_line_two
				}
				services {
					services_title
					services_description
				}
				clients {
					featured_clients_title
					clients_description
				}
				case_studies {
					case_studies_title
					case_studies_description
				}
				testimonials {
					testimonials_title
					testimonials_description
				}
				whitepaper {
					whitepaper_title
					whitepaper_description
				}
				recent_posts {
					recent_posts_title
					recent_posts_description
				}
				contact_us {
					contact_us_title
					contact_us_description
				}
			}
			yoast_meta {
				yoast_wpseo_title
				yoast_wpseo_metadesc
			}
		}
	}
`

export default IndexPage
