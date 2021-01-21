import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "./header";
import Footer from "./footer";
import "./layout.css";

const Layout = ({ children }) => (
    <>
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
