import React from "react";

import ContactForm from "../forms/contact-form";
import CurveTop from "../svg/curve-top";

const ContactUs = (props) => {
    const { title, description, fillColor } = props;
    return (
        <div className="bg-blue-800 relative">
            <div className="container mx-auto flex flex-col flex-no-wrap items-center px-12 pt-32 pb-16">
                { title && <h2 className="text-white font-bold text-4xl" dangerouslySetInnerHTML={{ __html: title }}></h2>}
                { description && <p dangerouslySetInnerHTML={{ __html: description }}></p>}
                <div>
                    <ContactForm />
                </div>
            </div>
            <CurveTop fillColor={ fillColor ? fillColor : "text-blue-100"} />
        </div>
    );
};

export default ContactUs;