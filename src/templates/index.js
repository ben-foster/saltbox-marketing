import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../images/hexagons.svg"

const IndexPage = ({ data }) => {
	const { title, acf, yoast_meta } = data.wordpressPage;
	return ( 
		<Layout>
			<SEO 
				title={yoast_meta.yoast_wpseo_title} 
				description={yoast_meta.yoast_wpseo_metadesc} 
			/>
			<div style={{ backgroundImage: `url(${background})` }}>
				<div className="container mx-auto flex flex-row flex-wrap items-center py-64 px-20">
					<div className="flex flex-row-reverse w-1/2 p-24">
						<Img 
							className="w-64"
							fluid={acf.hero.hero_logo.localFile.childImageSharp.fluid}
							alt="Saltbox logo"
						/>
					</div>
					<div className="flex flex-col w-1/2 text-gray-800">
						<h1 className="font-light">{acf.hero.hero_tagline}</h1>
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
					hero_tagline
					hero_logo {
						localFile {
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
