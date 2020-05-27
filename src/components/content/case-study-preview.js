import React from "react";

import FeaturedImage from "../lib/featured-image";

const CaseStudyPreview = ({ caseStudy }) => {
    return (
        <div className="flex flex-col items-center bg-blue-800 w-full max-w-4xl mx-auto p-12 rounded-lg z-10 shadow-lg">
            {/* <h3 className="mt-0">{caseStudy.title}</h3>
            <p>{caseStudy.excerpt}</p> */}
            <div className="flex flex-col w-full">
                <div className="flex flex-row items-center justify-center mx-auto">
                    <div className="flex flex-row items-center px-6 py-2">
                        <div className="flex flex-col items-center justify-center w-full p-2 mb-8">
                            <span className="mono text-white text-5xl" dangerouslySetInnerHTML={{ __html: caseStudy.acf.metric_one_number }}></span>
                            <span className="mono text-gray-100 text-sm w-40 text-center" dangerouslySetInnerHTML={{ __html: caseStudy.acf.metric_one_title }}></span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center px-6 py-2">
                        <div className="flex flex-col items-center justify-center w-full p-2 mb-8">
                            <span className="mono text-white text-5xl" dangerouslySetInnerHTML={{ __html: caseStudy.acf.metric_two_number }}></span>
                            <span className="mono text-gray-100 text-sm w-40 text-center" dangerouslySetInnerHTML={{ __html: caseStudy.acf.metric_two_title }}></span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center px-6 py-2">
                        <div className="flex flex-col items-center justify-center w-full p-2 mb-8">
                            <span className="mono text-white text-5xl" dangerouslySetInnerHTML={{ __html: caseStudy.acf.metric_three_number }}></span>
                            <span className="mono text-gray-100 text-sm w-40 text-center" dangerouslySetInnerHTML={{ __html: caseStudy.acf.metric_three_title }}></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-full bg-white rounded shadow-inner-lg">
                <div className="flex flex-col items-center justify-center">
                    <blockquote className="pt-6 px-20 text-sm w-full text-center" dangerouslySetInnerHTML={{ __html: caseStudy.acf.testimonial}}></blockquote>
                    <div className="flex justify-center">
                        <div className="flex flex-row flex-no-wrap items-center p-4">
                            <FeaturedImage featuredImage={caseStudy.acf.company_logo} className="w-12 h-12 rounded-full" />
                            <div className="flex flex-col flex-no-wrap justify-center pl-4">
                                <p className="m-0 leading-tight" dangerouslySetInnerHTML={{ __html: caseStudy.acf.testimonial_author_name }}></p>
                                <p className="m-0 text-sm italic" dangerouslySetInnerHTML={{ __html: `${caseStudy.acf.testimonial_author_title}, ${caseStudy.title}` }}></p>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="pt-12">
                <Link className="font-bold text-blue-700" to={caseStudy.link.replace("https://wordpress.saltbox.solutions", "")}>
                    Learn more
                </Link>
            </div> */}
        </div>
    )
}

export default CaseStudyPreview;