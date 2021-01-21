import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "./header";
import Footer from "./footer";
import "./layout.css";

const Layout = ({ children }) => (
    <>
        <Helmet>
            <script defer type="text/javascript">{`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WWXBKHH');
            `}</script>
        </Helmet>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WWXBKHH" height="0" width="0" style={{ display: "none", visibility:"hidden" }}></iframe></noscript>
        <Header />
        <div>
            <main>{children}</main>
        </div>
        <Footer />
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
