import React from "react";
import { Link, graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";
import FeaturedImage from "../components/lib/featured-image";

const TeamMember = ({ data }) => {
    const { title, content, yoast_meta, acf, featured_media } = data.wordpressWpTeamMembers;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero className="bg-careers-bg bg-cover bg-no-repeat bg-center h-70 mb-96">
                <div className="max-w-4xl mx-auto flex flex-col items-center rounded-2xl py-16 px-8 md:p-16 bg-contact-blue bg-cover bg-no-repeat mt-20">
                    <div className="flex flex-col w-full text-white text-center items-center">
                        <div className="w-full text-left mb-4 md:mb-0 pl-4 md:pl-0 mr-8 md:mr-0">
                            <Link to="/about/#team">&larr; Back to Team</Link>
                        </div>
                        <div className="w-48 md:w-64 h-48 md:h-64 p-1 md:p-2 mt-4 md:mt-2 shadow-md rounded-full bg-white">
                            <img className="w-full h-full rounded-full shadow-inner" src={featured_media.localFile.publicURL}/>
                        </div>
                        <h1 className="font-bold mt-8 md:mt-4 text-2xl md:text-4xl" dangerouslySetInnerHTML={{ __html: title }}></h1>
                        { acf.job_title && (
                            <p className="text-xs md:text-base" dangerouslySetInnerHTML={{ __html: acf.job_title }}></p>
                        )}
                    </div>

                    <div className="max-w-2xl mx-auto flex items-center text-white">
                        <div className="flex flex-col text-left">
                            <div className="text-xs md:text-base" dangerouslySetInnerHTML={{ __html: content }}></div>
                        </div>
                    </div>
                </div>
            </Hero>
        </Layout>
    )
}

export const query = graphql`
	query($id: String!) {
		wordpressWpTeamMembers(id: { eq: $id }) {
			id
			title
            content
			yoast_meta {
                yoast_wpseo_title
                yoast_wpseo_metadesc
            }
            featured_media {
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
            acf {
                job_title
            }
		}
	}
`

export default TeamMember;