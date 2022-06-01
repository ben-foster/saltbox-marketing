import React from "react";

import ContactForm from "../forms/contact-form";

const ContactUs = (props) => {
    const { bgColor, contactColor } = props;

    return (
        <div className={`${bgColor} relative py-16 sm:py-24 p-24`}>
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>

            <div className={`relative rounded-2xl ${contactColor} bg-auto bg-center shadow-xl max-w-5xl mx-auto lg:grid lg:grid-cols-5 p-10`}>
                <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 justify-content-center">
                    <div className="max-w-lg mx-auto text-white">
                        <h3 className="text-2xl font-extrabold sm:text-3xl">Don’t get lost in the crowd. </h3>
                        <p className="mt-3 text-xs leading-6">
                            With so many brands screaming for attention on search engines, it can be tough to stand out. We’ll give you the competitive edge that you need to start making search engines work for you. 
                        </p>

                        <p className="mt-3 text-xs leading-6">
                        Contact us today to get a free assessment from our expert staff. Let’s work together to find the right search solution for you and your business. 
                        </p>
                    </div>
                </div>
                <div className="sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12">
                    <h2 className="text-lg text-center text-white">Get a free assessment.</h2>
                    <div className="max-w-lg mx-auto lg:max-w-none">
                        <ContactForm onDark />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
