import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";

const Whitepaper = ({ pageContext }) => (
	<Layout pageContext={pageContext}>
        <SEO 
            title={pageContext.yoast_meta.yoast_wpseo_title} 
            description={pageContext.yoast_meta.yoast_wpseo_metadesc}
        />
		
	</Layout>
);

export default Whitepaper;
