import React, { Component } from "react";
import { Link } from "gatsby";
import { InView } from "react-intersection-observer"

import AnalyticsAnimation from "../svg/analytics-animation";
import PPCAnimation from "../svg/ppc-animation";
import SEOAnimation from "../svg/seo-animation";

class ServicePreview extends Component {
	constructor(props) {
		super(props);
		this.state = { windowWidth: 0, windowHeight: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
	}

	render() {
		const { windowWidth } = this.state
        const { service } = this.props

        let animateOnHover = true;
        windowWidth <= 767 && (animateOnHover = false);

        let mouseEnterScript;
        if(service.title === "Web Analytics Solutions"){
            mouseEnterScript = () => { 
                var elem = document.getElementById('Top_Box_1_fill_width');
                var parentElem = document.getElementById('Web_Analytics_Solutions_Animated');
                var lastAnimationElem = document.getElementById('Pie_Large_with_Label_turn_opaque');
                lastAnimationElem.onend = () => document.getElementById('Web_Analytics_Solutions_Animated').classList.remove('on');
                if(!parentElem.classList.contains("on")){
                    parentElem.classList.add("on");
                    elem.beginElement();
                }
            }
        } else if (service.title === "Pay-per-Click Advertising") {
            mouseEnterScript = () => { 
                var elem = document.getElementById('Organic_Results_translate');
                var parentElem = document.getElementById('PPC_Animated');
                var lastAnimationElem = document.getElementById('Ad_Indicator_turn_opaque');
                lastAnimationElem.onend = () => document.getElementById('PPC_Animated').classList.remove('on');
                if(!parentElem.classList.contains("on")){
                    parentElem.classList.add("on");
                    elem.beginElement();
                }
            }
        } else if(service.title === "Search Engine Optimization") {
            mouseEnterScript = () => { 
                var elem = document.getElementById('Client_Search_Result_pull_out');
                var parentElem = document.getElementById('SEO_Animated');
                var lastAnimationElem = document.getElementById('Client_Sitelink_Extensions_turn_opaque');
                lastAnimationElem.onend = () => document.getElementById('SEO_Animated').classList.remove('on');
                if(!parentElem.classList.contains("on")){
                    parentElem.classList.add("on");
                    elem.beginElement();
                }
            }
        }

        return(
            <div id={service.slug} className="flex flex-col w-full md:w-1/3 px-2 pt-8 xl:pt-4 pb-8" onMouseEnter={mouseEnterScript}>
                <div className="flex flex-col w-full">
                    <Link 
                        className="w-full h-full flex items-center justify-start"
                        to={service.link.replace("https://wordpress.saltbox.solutions", "")}
                    >
                        <InView rootMargin="-250px 0px -250px 0px">
                            {({ inView, ref, entry }) => (
                                <>
                                    { service.title === "Web Analytics Solutions" && (
                                        <div ref={ref} className="w-full">
                                            <AnalyticsAnimation className="w-72 md:w-96 h-auto mx-auto shadow-md mb-4" animateOnHover={animateOnHover} inView={inView} />
                                        </div>
                                    )}
                                    { service.title === "Pay-per-Click Advertising" && (
                                        <div ref={ref} className="w-full">
                                            <PPCAnimation className="w-72 md:w-96 h-auto mx-auto shadow-md mb-4" animateOnHover={animateOnHover} inView={inView} />
                                        </div>
                                    )}
                                    { service.title === "Search Engine Optimization" && (
                                        <div ref={ref} className="w-full">
                                            <SEOAnimation className="w-72 md:w-96 h-auto mx-auto shadow-md mb-4" animateOnHover={animateOnHover} inView={inView} />
                                        </div>
                                    )}
                                </>
                            )}
                        </InView>
                    </Link>
                    <div className="flex justify-start items-start w-full h-full">
                        <h3 className="mt-6 mb-4 w-full text-center">
                            <Link
                                className="font-bold text-2xl md:text-lg" 
                                to={service.link.replace("https://wordpress.saltbox.solutions", "")}
                                dangerouslySetInnerHTML={{ __html: service.title }}
                            />
                        </h3>
                    </div>
                </div>
                <div 
                    dangerouslySetInnerHTML={{ __html: service.excerpt }}
                    className="pt-3 xl:pt-0 pb-2 px-3 text-gray-700 text-base md:text-sm text-left md:text-center"
                />
                <Link className="w-full text-blue-800 hover:text-teal-500 text-center font-bold text-sm" to={service.link.replace("https://wordpress.saltbox.solutions", "")}>
                    Learn More &rarr;
                </Link>
            </div>
        )
    }
};

export default ServicePreview;