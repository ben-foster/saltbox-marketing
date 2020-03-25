import React from "react";
import { navigate } from "gatsby-link";

const ContactForm = () => {
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
            className="flex flex-col py-6"
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="bot-field" onChange={handleChange} />
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                className="py-3 px-6 mt-4 border-2 border-teal-400 bg-teal-400 text-white font-bold rounded shadow hover:shadow-inner focus:shadow-inner hover:bg-teal-600 focus:bg-teal-600 outline-none"
            >
                Get In Touch
            </button>
        </form>
    );
};

export default ContactForm;