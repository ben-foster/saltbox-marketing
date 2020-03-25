import React from "react";

import AttributionHiddenFields from "./attribution-hidden-fields";

const ContactForm = () => {
    return (
        <form 
            name="Contact" 
            netlify
            netlify-honeypot="bot-field"
            className="flex flex-col py-6"
        >
            <input type="hidden" name="form-name" value="Contact" />
            <input type="hidden" name="bot-field" />
            <label 
                for="name"
                className="flex flex-col text-sm text-gray-100 uppercase font-bold"
            >
                Your Name 
                <input 
                    type="text" 
                    name="name"
                    className="p-2 mt-1 mb-4 w-64 border-2 border-white text-gray-800 rounded shadow-inner hover:shadow-none focus:shadow hover:border-teal-200 focus:border-teal-200 outline-none"
                    required 
                />
            </label>
            <label 
                for="email"
                className="flex flex-col text-sm text-gray-100 uppercase font-bold"
            >
                Your Email 
                <input 
                    type="text" 
                    name="email"
                    className="p-2 mt-1 mb-4 w-64 border-2 border-white text-gray-800 rounded shadow-inner hover:shadow-none focus:shadow hover:border-teal-200 focus:border-teal-200 outline-none"
                    required 
                />
            </label>
            <label 
                for="company"
                className="flex flex-col text-sm text-gray-100 uppercase font-bold"
            >
                Company Name 
                <input 
                    type="text" 
                    name="company"
                    className="p-2 mt-1 mb-4 w-64 border-2 border-white text-gray-800 rounded shadow-inner hover:shadow-none focus:shadow hover:border-teal-200 focus:border-teal-200 outline-none"
                    required 
                />
            </label>
            <AttributionHiddenFields />
            <button 
                type="submit"
                className="py-3 px-6 mt-4 border-2 border-teal-400 bg-teal-400 text-white font-bold rounded shadow hover:shadow-inner focus:shadow-inner hover:bg-teal-600 focus:bg-teal-600 outline-none"
            >
                Get In Touch
            </button>
        </form>
    );
};

export default ContactForm;