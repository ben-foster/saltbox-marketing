import React from "react";

import ContactForm from "../forms/contact-form";

const ContactUs = (props) => {
    const { bgColor, contactColor, title, description } = props;

    return (
        <div className={`${bgColor} relative px-2 py-4 md:py-16 md:p-24`}>
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>

            <div className={`flex flex-col md:flex-row relative rounded-2xl  md:rounded-3xl ${contactColor} bg-cover bg-no-repeat max-w-5xl mx-auto px-4 md:p-10`}>
                <div className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 lg:py-24 xl:pr-12 justify-content-center w-full md:w-1/2">
                    <div className="max-w-lg mx-auto text-white">
                        <h3 className="text-center md:text-left text-xl md:text-3xl tracking-wide font-bold sm:text-3xl normal-case mb-6">Don’t get lost in the crowd.</h3>
                        <p className="text-center md:text-left mt-3 tracking-wide text-xs md:text-sm leading-6 mb-6 font-normal">
                            With so many brands screaming for attention on search engines, it can be tough to stand out. We’ll give you the competitive edge that you need to start making search engines work for you. 
                        </p>

                        <p className="text-center md:text-left mt-3 tracking-wide text-xs md:text-sm leading-6 mb-6 font-normal">
                        Contact us today to get a free assessment from our expert staff. Let’s work together to find the right search solution for you and your business. 
                        </p>
                    </div>
                </div>
                <div className="pb-12 md:pb-0 sm:px-6 lg:px-8 xl:pl-12 w-full md:w-1/2">
                    <h2 className="text-xl text-center text-white mb-2">Get a free assessment.</h2>
                    <div className="max-w-lg mx-auto lg:max-w-none">
                        <ContactForm onDark />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
