import React from "react";
import { navigate } from "gatsby-link";

const ContactForm = ({ onDark }) => {
    const [state, setState] = React.useState({})

    const encode = (data) => (
        Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
    )

    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error))
    }

    return (
        <form 
            name="Contact" 
            method="POST"
            action="/thank-you/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="flex flex-col py-6 w-full"
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="bot-field" onChange={handleChange} />
            <label 
                for="name"
                className={`flex flex-col w-full text-sm ${onDark ? "text-gray-100" : "text-gray-800"} uppercase font-bold`}
            >
                Your Name 
                <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name"
                    className={`p-2 mt-1 mb-4 w-full ${onDark ? "border-2" : "border"} border-teal-100 text-gray-800 rounded ${onDark ? "shadow-inner hover:shadow-none focus:shadow" : "shadow-sm hover:shadow focus:shadow"} hover:border-teal-500 focus:border-teal-200 outline-none`}
                    required
                    onChange={handleChange}
                />
            </label>
            <label 
                for="email"
                className={`flex flex-col w-full text-sm ${onDark ? "text-gray-100" : "text-gray-800"} uppercase font-bold`}
            >
                Your Email 
                <input 
                    type="text" 
                    name="email"
                    placeholder="you@company.com"
                    className={`p-2 mt-1 mb-4 w-full ${onDark ? "border-2" : "border"} border-teal-100 text-gray-800 rounded ${onDark ? "shadow-inner hover:shadow-none focus:shadow" : "shadow-sm hover:shadow focus:shadow"} hover:border-teal-500 focus:border-teal-200 outline-none`}
                    required
                    onChange={handleChange}
                />
            </label>
            <label 
                for="company"
                className={`flex flex-col w-full text-sm ${onDark ? "text-gray-100" : "text-gray-800"} uppercase font-bold`}
            >
                Company Name 
                <input 
                    type="text" 
                    name="company"
                    placeholder="Company Name"
                    className={`p-2 mt-1 mb-4 w-full ${onDark ? "border-2" : "border"} border-teal-100 text-gray-800 rounded ${onDark ? "shadow-inner hover:shadow-none focus:shadow" : "shadow-sm hover:shadow focus:shadow"} hover:border-teal-500 focus:border-teal-200 outline-none`}
                    required 
                    onChange={handleChange}
                />
            </label>

            <input 
                type="hidden" 
                name="firstTouchSource"
                id="firstTouchSource"
                onChange={handleChange}
            />
            <input 
                type="hidden" 
                name="firstTouchMedium"
                id="firstTouchMedium"
                onChange={handleChange}
            />
            <input 
                type="hidden" 
                name="firstTouchCampaign"
                id="firstTouchCampaign"
                onChange={handleChange}
            />
            <input 
                type="hidden" 
                name="firstTouchContent"
                id="firstTouchContent"
                onChange={handleChange}
            />
            <input 
                type="hidden" 
                name="firstTouchTerm"
                id="firstTouchTerm"
                onChange={handleChange}
            />
            <input 
                type="hidden" 
                name="lastTouchSource"
                id="lastTouchSource"
                onChange={handleChange}
            />
            <input 
                type="hidden" 
                name="lastTouchMedium"
                id="lastTouchMedium"
                onChange={handleChange}
            />
            <input 
                type="hidden" 
                name="lastTouchCampaign"
                id="lastTouchCampaign"
                onChange={handleChange}
            />
            <input 
                type="hidden" 
                name="lastTouchContent"
                id="lastTouchContent"
                onChange={handleChange}
            />
            <input 
                type="hidden" 
                name="lastTouchTerm"
                id="lastTouchTerm"
                onChange={handleChange}
            />
            <input 
                type="hidden" 
                name="sessionHistory"
                id="sessionHistory"
                onChange={handleChange}
            />

            <button 
                type="submit"
                className="py-3 px-6 mt-4 border-2 border-teal-400 bg-teal-400 text-white font-bold rounded shadow hover:shadow-inner focus:shadow-inner hover:bg-teal-600 focus:bg-teal-600 focus:outline-none"
            >
                Get In Touch
            </button>
        </form>
    );
};

export default ContactForm;