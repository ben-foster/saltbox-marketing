import React from "react";
import { Link } from "gatsby";
import ppcH1 from "../../images/ppc-h1.svg"
import ppcH2 from "../../images/ppc-h2.svg"
import ppcH3 from "../../images/ppc-h3.svg"
import ppcH4 from "../../images/ppc-h4.svg"
import seoH1 from "../../images/seo-h1.svg"
import seoH2 from "../../images/seo-h2.svg"
import seoH3 from "../../images/seo-h3.svg"
import seoH4 from "../../images/seo-h4.svg"

const HowToGetStarted = (props) => {
    return (
        <div className="flex flex-col mb-8">
            <h2 className={`${props.type == 'ppc' ? 'text-violet-300' : 'text-blue-150'} font-bold text-center`}>How to Get Started</h2>
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center p-2 md:p-0">
                <div className="flex flex-col items-center bg-white rounded-lg px-5 py-8 mb-2 w-full max-w-sm">
                    {props.type == 'ppc' 
                        ? <img className="md:w-96 lg:w-96 sm:w-40 xs:w-40" src={ppcH1}/> 
                        : <img className="md:w-96 lg:w-96 sm:w-40 xs:w-40" src={seoH1}/>
                    }
                    
                    <div className="flex items-center justify-center text-center pt-6">
                        <p className="text-sm">Contact us using the form below to let us know how we can help your business.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white rounded-lg px-5 py-8 mb-2 w-full max-w-sm">
                    {props.type == 'ppc' 
                        ? <img className="md:w-96 lg:w-96 sm:w-40 xs:w-40" src={ppcH2}/> 
                        : <img className="md:w-96 lg:w-96 sm:w-40 xs:w-40" src={seoH2}/>
                    }

                    <div className="flex items-center justify-center text-center pt-6">
                        <p className="text-sm">We'll schedule a discovery call to talk about your business and goals.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white rounded-lg px-5 py-8 mb-2 w-full max-w-sm">
                    {props.type == 'ppc' 
                        ? <img className="md:w-96 lg:w-96 sm:w-40 xs:w-40" src={ppcH3}/> 
                        : <img className="md:w-96 lg:w-96 sm:w-40 xs:w-40" src={seoH3}/>
                    }

                    <div className="flex items-center justify-center text-center pt-6">
                        <p className="text-sm">We'll then perform a free strategy analysis using your current SEO and PPC data.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white rounded-lg px-5 py-8 mb-2 w-full max-w-sm">
                    {props.type == 'ppc' 
                        ? <img className="md:w-96 lg:w-96 sm:w-40 xs:w-40" src={ppcH4}/> 
                        : <img className="md:w-96 lg:w-96 sm:w-40 xs:w-40" src={seoH4}/>
                    }

                    <div className="flex items-center justify-center text-center pt-6">
                        <p className="text-sm">Finally, we'll review those insights with you and suggest the right scope for our services.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToGetStarted;