import React from "react";
import NetlifyForm from "./netlify-form";

const inputs = [
    {
        name: "email",
        type: "email",
        label: "Enter Your Email:",
        placeholder: "you@company.com",
        required: true,
    },
]

const WhitepaperForm = ({ whitepaper, buttonCTA, onDark, noAttr }) => {
    return (
        <NetlifyForm 
            name="Whitepaper"
            action={whitepaper.acf.whitepaper_download.link}
            inputs={inputs}
            buttonCTA={buttonCTA ? buttonCTA : "View the Whitepaper"}
            onDark={onDark}
            noAttr={noAttr}
        />
    );
};

export default WhitepaperForm;