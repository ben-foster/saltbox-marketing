import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import logo from "../../images/saltbox-logo-horizontal-white.svg";
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

		<script 
            type="text/javascript"
            dangerouslySetInnerHTML={{
                __html: `
                    (function(){
                        document.querySelectorAll(".hero").forEach(elem => elem.style.width = (window.innerWidth).toString() + "px");
                        document.querySelectorAll(".home-hero").forEach(elem => window.innerWidth >= 767 ? elem.style.width = (window.innerWidth * 0.55).toString() + "px" : elem.style.width = (window.innerWidth).toString() + "px");
                    })()
                `,
            }}
        />

        <script 
            type="text/javascript"
            dangerouslySetInnerHTML={{
                __html: `
                    function writeAttrToForms(){
                        // Don't run if no forms on page
                        if (document.querySelector("form")){
                            var ftSourceInputs = document.querySelectorAll(".firstTouchSource");
                            var ftMediumInputs = document.querySelectorAll(".firstTouchMedium");
                            var ftCampaignInputs = document.querySelectorAll(".firstTouchCampaign");
                            var ftContentInputs = document.querySelectorAll(".firstTouchContent");
                            var ftTermInputs = document.querySelectorAll(".firstTouchTerm");
                            var ftGclidInputs = document.querySelectorAll(".firstTouchGclid");
                            var ltSourceInputs = document.querySelectorAll(".lastTouchSource");
                            var ltMediumInputs = document.querySelectorAll(".lastTouchMedium");
                            var ltCampaignInputs = document.querySelectorAll(".lastTouchCampaign");
                            var ltContentInputs = document.querySelectorAll(".lastTouchContent");
                            var ltTermInputs = document.querySelectorAll(".lastTouchTerm");
                            var ltGclidInputs = document.querySelectorAll(".lastTouchGclid");
                            
                            ftSourceInputs.forEach(function(input){
                                input.value = getSaltboxLocalStorage("original_source");
                                var event = new Event('change');
                                input.dispatchEvent(event);
                            });
                            ftMediumInputs.forEach(function(input){
                                input.value = getSaltboxLocalStorage("original_medium");
                                var event = new Event('change');
                                input.dispatchEvent(event);
                            });
                            ftCampaignInputs.forEach(function(input){
                                input.value = getSaltboxLocalStorage("original_campaign");
                                var event = new Event('change');
                                input.dispatchEvent(event);
                            });
                            ftContentInputs.forEach(function(input){
                                input.value = getSaltboxLocalStorage("original_content");
                                var event = new Event('change');
                                input.dispatchEvent(event);
                            });
                            ftTermInputs.forEach(function(input){
                                input.value = getSaltboxLocalStorage("original_term");
                                var event = new Event('change');
                                input.dispatchEvent(event);
                            });
                            ftGclidInputs.forEach(function(input){
                                input.value = getSaltboxLocalStorage("original_gclid");
                                var event = new Event('change');
                                input.dispatchEvent(event);
                            });
                            ltSourceInputs.forEach(function(input){
                                input.value = getSaltboxLocalStorage("source");
                                var event = new Event('change');
                                input.dispatchEvent(event);
                            });
                            ltMediumInputs.forEach(function(input){
                                input.value = getSaltboxLocalStorage("medium");
                                var event = new Event('change');
                                input.dispatchEvent(event);
                            });
                            ltCampaignInputs.forEach(function(input){
                                input.value = getSaltboxLocalStorage("campaign");
                                var event = new Event('change');
                                input.dispatchEvent(event);
                            });
                            ltContentInputs.forEach(function(input){
                                input.value = getSaltboxLocalStorage("content");
                                var event = new Event('change');
                                input.dispatchEvent(event);
                            });
                            ltTermInputs.forEach(function(input){
                                input.value = getSaltboxLocalStorage("term");
                                var event = new Event('change');
                                input.dispatchEvent(event);
                            });
                            ltGclidInputs.forEach(function(input){
                                input.value = getSaltboxLocalStorage("gclid");
                                var event = new Event('change');
                                input.dispatchEvent(event);
                            });
                        }
                    };

                    function writeSessionHistoryToForms(){
                        // Don't run if no forms on page
                        if (document.querySelector("form")){
                            var sessionHistoryInputs = document.querySelectorAll(".sessionHistory");
                            
                            sessionHistoryInputs.forEach(function(input){
                                input.value = getSaltboxLocalStorage("session_history");
                                var event = new Event('change');
                                input.dispatchEvent(event);
                            });
                        }
                    };
                `
            }}
        />
	</footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
