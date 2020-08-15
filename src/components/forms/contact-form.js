import React from "react";
import NetlifyForm from "./netlify-form";

const inputs = [
    {
        name: "name",
        type: "text",
        label: "Your Name",
        placeholder: "Your Name",
        required: true,
    },
    {
        name: "email",
        type: "email",
        label: "Your Email",
        placeholder: "you@company.com",
        required: true,
    },
    {
        name: "company",
        type: "text",
        label: "Company Name",
        placeholder: "Company Name",
        required: true,
    },
    {
        name: "inquiry_type",
        type: "select",
        label: "Reason",
        placeholder: "",
        required: false,
        options: [
            {
                value: "Inquire about services",
                text: "Inquire about services",
            },
            {
                value: "Apply for a job",
                text: "Apply for a job",
            },
            {
                value: "Other",
                text: "Other",
            },
        ]
    },
    {
        name: "message",
        type: "textarea",
        label: "Message",
        placeholder: "Your message",
        required: false,
    },
]

const ContactForm = ({ buttonCTA, onDark, noAttr }) => {
    return (
        <NetlifyForm 
            name="Contact"
            action="/thank-you/"
            inputs={inputs}
            buttonCTA={buttonCTA ? buttonCTA : "Get in Touch"}
            onDark={onDark}
            noAttr={noAttr}
        />
    );
};

export default ContactForm;