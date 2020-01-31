import React from "react";

import FeaturedImage from "../lib/featured-image";

const Testimonial = ({ testimonial }) => (
    <div className="flex flex-col items-center w-full p-4">
        <blockquote className="flex flex-col items-center w-full max-w-2xl">
            <div 
                className="flex justify-center w-full h-24 text-center" 
                dangerouslySetInnerHTML={{ __html: testimonial.content }}
            />
            <cite className="flex flex-row w-auto px-2">
                <div className="flex flex-grow-0 w-16 h-16 mr-4 rounded-full overflow-hidden">
                    <FeaturedImage 
                        featuredImage={testimonial.featured_media}
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col items-start justify-center w-auto">
                    <p><span className="font-semibold">{ testimonial.acf.testimonial_author_name }</span>,</p>
                    <p><span className="text-sm">{ testimonial.acf.testimonial_company_name }</span></p>
                </div>
            </cite>
        </blockquote>
    </div>
);

export default Testimonial;