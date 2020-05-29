import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";

const Page = ({ data }) => {
    const { title, content, acf, yoast_meta } = data.wordpressPage;
    return (
        <Layout>
            <SEO 
                title={yoast_meta.yoast_wpseo_title} 
                description={yoast_meta.yoast_wpseo_metadesc}
            />
            <Hero>
                <div className="container mx-auto flex items-center p-20 pt-40 pb-32">
                    <div className="flex flex-col w-full text-white text-center">
                        <h1 className="font-bold" dangerouslySetInnerHTML={{ __html: title }}></h1>
                        { acf.subheader && (
                            <p dangerouslySetInnerHTML={{ __html: acf.subheader }}></p>
                        )}
                    </div>
                </div>
            </Hero>
            <div className="bg-white">
                <div className="container mx-auto flex items-center p-20">
                    <div className="flex flex-col text-gray-800">
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>

                    </div>
                </div>
                <a href="/c/Saltbox-Solutions/Jobs?absolute=1&amp;hiring_company=9d9be086" id="jobs_widget_company_link" target="_blank">Job listings at Saltbox Solutions</a><script src="https://www.ziprecruiter.com/jobs-widget/v1/a364066d/all"></script><a href="https://www.ziprecruiter.com/" id="jobs_widget_link_split" target="_blank">Listing by ZipRecruiter</a>
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

export default Page;