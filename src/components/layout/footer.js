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
		<div className="grid grid-cols-3 gap-4 py-12 mx-32">
			<div className="col-span-2">
				<Link to="/">
					<LazyLoadImage
						src={logo}
						alt="saltbox logo"
						className="w-40"
					/>
				</Link>
				<p className="text-gray-500 text-xs pl-3">
					<span>© {new Date().getFullYear()} Saltbox Group LLC</span>
				</p>
			</div>

			<div className="grid grid-cols-3">
				<div className="flex flex-col items-start justify-start">
					<h4 className="px-3 py-1 text-xs font-bold text-white text-center md:text-left uppercase">Services</h4>
					<FooterNavOne />
				</div>
				<div className="flex flex-col items-start justify-start">
					<h4 className="px-3 py-1 text-xs font-bold text-white text-center md:text-left uppercase">Company</h4>
					<FooterNavTwo />
				</div>
				<div className="flex flex-col items-start justify-start">
					<h4 className="px-3 py-1 text-xs font-bold text-white text-center md:text-left uppercase">Resources</h4>
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
