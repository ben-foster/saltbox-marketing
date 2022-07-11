import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import HeadScripts from "./head-scripts";
import Footer from "./footer";
import "./layout.css";

const Layout = ({ children, logo }) => (
    <>
        <HeadScripts />
        <Header logo={logo}/>
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
