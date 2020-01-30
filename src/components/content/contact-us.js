import React from "react";

const ContactUs = (props) => {
    const { title, description } = props;
    return (
        <div>
            <div className="container mx-auto flex flex-col flex-no-wrap items-center p-12">
                { title && <h2>{title}</h2>}
                { description && <p>{description}</p>}
                </div>
        </div>
    );
};

export default ContactUs;