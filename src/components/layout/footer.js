import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import logo from "../../images/saltbox-logo-horizontal-white.svg";
import footerBg from "../../images/footer-bg.svg";
import FooterNavOne from "./footer-nav-one";
import FooterNavTwo from "./footer-nav-two";
import FooterNavThree from "./footer-nav-three";

const Footer = () => (
	<footer className="bg-footer-texture">
		<div className="md:grid grid-cols-3 gap-4 py-12 md:mx-32">
			<div className="flex flex-col items-center md:block col-span-2 pr-3 md:pr-0">
				<Link to="/">
					<LazyLoadImage
						src={logo}
						alt="saltbox logo"
						className="w-40"
					/>
				</Link>
				<p className="text-gray-500 text-xs md:pl-3">
					<span>© {new Date().getFullYear()} Saltbox Group LLC</span>
				</p>
			</div>

			<div className="flex flex-row flex-wrap md:grid grid-cols-3">
				<div className="w-1/2 md:w-auto flex flex-col items-start justify-start">
					<h4 className="px-3 py-1 text-xs font-bold text-white text-left md:text-left">Services</h4>
					<FooterNavOne />
				</div>
				<div className="w-1/2 md:w-auto flex flex-col items-start justify-start">
					<h4 className="px-3 py-1 text-xs font-bold text-white text-left md:text-left">Company</h4>
					<FooterNavTwo />
				</div>
				<div className="w-1/2 md:w-auto flex flex-col items-start justify-start">
					<h4 className="px-3 py-1 text-xs font-bold text-white text-left md:text-left">Resources</h4>
					<FooterNavThree />
				</div>
			</div>
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
