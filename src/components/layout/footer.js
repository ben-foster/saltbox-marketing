import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import logo from "../../images/saltbox-logo-horizontal-white.svg";
import FooterNavOne from "./footer-nav-one";
import FooterNavTwo from "./footer-nav-two";
import FooterNavThree from "./footer-nav-three";

const Footer = () => (
	<footer className="py-8 flex flex-col flex-wrap items-start justify-center bg-blue-900 text-white">
		<div className="container pt-8 pb-12 mx-auto flex flex-col md:flex-row">
			<div className="flex flex-col items-center justify-center w-full md:w-1/4">
				<Link to="/">
					<img className="w-40 mb-6" src={logo} alt="saltbox logo"/>
				</Link>
			</div>
			<div className="flex flex-col items-start justify-start w-full md:w-1/4">
				<h4 className="px-3 py-1 text-xs font-bold text-white uppercase">Services</h4>
				<FooterNavOne />
			</div>
			<div className="flex flex-col items-start justify-start w-full md:w-1/4">
				<h4 className="px-3 py-1 text-xs font-bold text-white uppercase">Company</h4>
				<FooterNavTwo />
			</div>
			<div className="flex flex-col items-start justify-start w-full md:w-1/4">
				<h4 className="px-3 py-1 text-xs font-bold text-white uppercase">Resources</h4>
				<FooterNavThree />
			</div>
		</div>
		<div className="container mx-auto text-center text-xs">
			<span>© {new Date().getFullYear()} Saltbox Group LLC</span>
		</div>
	</footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer