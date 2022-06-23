import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import HomeHero from "../components/content/home-hero";
import FeaturedServices from "../components/content/featured-services";
import FeaturedClients from "../components/content/featured-clients";
import FeaturedCaseStudies from "../components/content/featured-case-studies";
import FeaturedWhitepaper from "../components/content/featured-whitepaper";
import HomeFeaturedPosts from "../components/content/home-featured-posts";
import ContactUs from "../components/content/contact-us";
import HomeBanner from "../components/content/home-banner";
import HomeBannerTwo from "../components/content/home-banner-two";

import blueLogo from "../images/blue-logo.svg"
import pricing from "../images/pricing.png"
import option from "../images/options.png"

const IndexPage = ({ data }) => {
	const { acf, yoast_meta } = data.wordpressPage;
	return ( 
		<Layout logo={blueLogo}>
			<SEO
				title={yoast_meta.yoast_wpseo_title} 
				description={yoast_meta.yoast_wpseo_metadesc} 
			/>
			<HomeHero
				background={acf.hero.hero_background_image}
				taglineLineOne={acf.hero.hero_tagline_line_one}
				taglineLineTwo={acf.hero.hero_tagline_line_two}
			/>

			<FeaturedClients className="bg-white"/> 

			<HomeBanner/>

			<div className="flex items-center justify-center w-full px-36">
                <img className="" src={pricing}/>
            </div>
			
			<HomeBannerTwo/>
			{/* <FeaturedServices
				title={acf.services.services_title}
				description={acf.services.services_description}
				className="bg-white"
			/> 
			<FeaturedClients
				title={acf.clients.featured_clients_title}
				description={acf.clients.clients_description}
				className="bg-white"
			/> */}
			{/* <div className="bg-white">
				<div className="container mx-auto">
					<WhySaltbox />
				</div>
			</div> */}
			{/* <FeaturedCaseStudies
				title={acf.case_studies.case_studies_title}
				description={acf.case_studies.case_studies_description}
			/> */}
			{/* <FeaturedTestimonials
				title={acf.testimonials.testimonials_title}
				description={acf.testimonials.testimonials_description}
			/> */}
			{/* <FeaturedWhitepaper
				title={acf.whitepaper.whitepaper_title}
				description={acf.whitepaper.whitepaper_description}
			/>*/}
			<HomeFeaturedPosts
				title={"Learn the tools of the trade."}
				description={"Unlock the secrets to search engine acquisition."}
			/>

			<ContactUs bgColor="bg-blue-violet" contactColor="bg-contact-purple"/>
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
