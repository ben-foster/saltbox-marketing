import React from "react";
import { Link } from "gatsby";

import SEO from "../components/layout/seo";
import Hero from "../components/content/hero";
import Layout from "../components/layout/layout";

const NotFoundPage = () => (
	<Layout>
		<Hero className="bg-violet-300">
			<div className="max-w-4xl mx-auto flex flex-col items-center pt-40 pb-6">
				<div className="flex flex-col w-full text-white text-center items-center">
					<div className="w-full text-left">
						<Link to="/">&larr; Back to Home</Link>
					</div>
					<h1 className="font-bold mt-20 mb-10">404</h1>
					<div className="flex flex-col text-center px-8 pb-32 text-white">Sorry, we couldn't find that page.</div>
				</div>
			</div>
		</Hero>
	</Layout>
)

export default NotFoundPage
