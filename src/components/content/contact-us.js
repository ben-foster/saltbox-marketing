import React from "react";

import ContactForm from "../forms/contact-form";

const ContactUs = (props) => {
    const { bgColor } = props;
    return (
        <div className={`${bgColor} relative`}>
            <div className="container mx-auto flex flex-col flex-no-wrap items-center px-12 py-16">
                <div className="w-72 md:w-80">
                    <ContactForm onDark />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
