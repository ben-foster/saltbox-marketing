import React from "react";
import { Link, graphql } from "gatsby";

import SEO from "../components/layout/seo";
import Layout from "../components/layout/layout";
import Hero from "../components/content/hero";

const ThankYou = ({ data }) => {
	const { title, content, yoast_meta } = data.wordpressPage;
	return (
		<Layout>
			<SEO 
				title={yoast_meta.yoast_wpseo_title} 
				description={yoast_meta.yoast_wpseo_metadesc}
			/>
			<Hero className="bg-violet-300">
				<div className="max-w-4xl mx-auto flex flex-col items-center pt-40 pb-6">
					<div className="flex flex-col w-full text-white text-center items-center">
						<div className="w-full text-left">
							<Link to="/">&larr; Back to Home</Link>
						</div>
						<h1 className="font-bold mt-20 mb-10" dangerouslySetInnerHTML={{ __html: title }}></h1>
					</div>
				</div>
				<div className="max-w-lg mx-auto flex items-center px-8 pb-32 text-white">
					<div className="flex flex-col text-center">
						<div dangerouslySetInnerHTML={{ __html: content }}></div>
					</div>
				</div>
			</Hero>
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

export default ThankYou;