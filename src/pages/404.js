import React from "react";
import { Link } from "gatsby";

import SEO from "../components/layout/seo";
import Hero from "../components/content/hero";
import Layout from "../components/layout/layout";

const NotFoundPage = () => (
	<Layout>
		<SEO 
			title="404 - Not Found | Saltbox Solutions"
			description="The page you're looking for does not exist."
		/>
		<Hero noCurve>
			<div className="max-w-4xl mx-auto flex flex-col items-center pt-40 pb-6">
				<div className="flex flex-col w-full text-white text-center items-center">
					<div className="w-full text-left">
						<Link to="/">&larr; Back to Home</Link>
					</div>
					<h1 className="font-bold pt-32">404: Not Found</h1>
				</div>
			</div>
			<div className="max-w-2xl mx-auto flex items-center px-8 pb-48 text-white">
				<p className="w-full text-center">The page you're looking for does not exist.</p>
			</div>
		</Hero>
	</Layout>
)

export default NotFoundPage
