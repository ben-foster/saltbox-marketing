import React from "react";

import ContactForm from "../forms/contact-form";

const ContactUs = (props) => {
    const { title, description } = props;
    return (
        <div className="bg-blue-800 relative">
            <div className="container mx-auto flex flex-col flex-no-wrap items-center px-12 py-16">
                { title && <h2 className="text-white font-bold text-4xl" dangerouslySetInnerHTML={{ __html: title }}></h2>}
                { description && <p dangerouslySetInnerHTML={{ __html: description }}></p>}
                <div className="w-80">
                    <ContactForm onDark />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;