import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import HomeHero from "../components/content/home-hero";
import FeaturedServices from "../components/content/featured-services";
import FeaturedClients from "../components/content/featured-clients";
import FeaturedCaseStudies from "../components/content/featured-case-studies";
import FeaturedTestimonials from "../components/content/featured-testimonials";
import FeaturedWhitepaper from "../components/content/featured-whitepaper";
import FeaturedPosts from "../components/content/featured-posts";
import ContactUs from "../components/content/contact-us";


const IndexPage = ({ data }) => {
	const { acf, yoast_meta } = data.wordpressPage;
	return ( 
		<Layout>
			<SEO
				title={yoast_meta.yoast_wpseo_title} 
				description={yoast_meta.yoast_wpseo_metadesc} 
			/>
			<HomeHero
				taglineLineOne={acf.hero.hero_tagline_line_one}
				taglineLineTwo={acf.hero.hero_tagline_line_two}
			/>
			<FeaturedServices
				title={acf.services.services_title}
				description={acf.services.services_description}
			/> 
			<FeaturedCaseStudies
				title={acf.case_studies.case_studies_title}
				description={acf.case_studies.case_studies_description}
			/>
			<FeaturedTestimonials
				title={acf.testimonials.testimonials_title}
				description={acf.testimonials.testimonials_description}
			/>
			<FeaturedWhitepaper
				title={acf.whitepaper.whitepaper_title}
				description={acf.whitepaper.whitepaper_description}
			/>
			<FeaturedClients
				title={acf.clients.featured_clients_title}
				description={acf.clients.clients_description}
			/>
			<FeaturedPosts
				title={acf.recent_posts.recent_posts_title}
				description={acf.recent_posts.recent_posts_description}
			/>
			<ContactUs
				title={acf.contact_us.contact_us_title}
				description={acf.contact_us.contact_us_description}
			/>
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
					# hero_background_image {
					# 	localFile {
					# 		childImageSharp {
					# 			resolutions(width: 1800) {
					# 				...GatsbyImageSharpResolutions_withWebp
					# 			}
					# 		}
					# 	}
					# }
					hero_tagline_line_one
					hero_tagline_line_two
					hero_logo {
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