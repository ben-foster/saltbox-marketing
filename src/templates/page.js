import React, { Children } from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";

const Page = ({ pageContext, children }) => (
	<Layout pageContext={pageContext}>
        {/* <SEO 
            title={pageContext.yoast_meta.yoast_wpseo_title} 
            description={pageContext.yoast_meta.yoast_wpseo_metadesc}
        /> */}
		"test"
	</Layout>
);

export default Page;
