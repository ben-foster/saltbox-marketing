import React from "react";
import { navigate } from "gatsby-link";

const NetlifyForm = ({ name, action, inputs, buttonCTA, onDark, noAttr }) => {
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
            name={name} 
            method="POST"
            action={action}
            className={`${onDark ? "on-dark" : ""}`}
            onSubmit={handleSubmit}
            data-netlify="true"
            netlify-honeypot="bot-field"
        >
            <input type="hidden" name="bot-field" onChange={handleChange} />
            { inputs.map(({ name, type, label, placeholder, required }) => (
                <label key={name} htmlFor={name}>
                    { label }
                    <input 
                        type={type}
                        name={name}
                        id={name}
                        placeholder={placeholder}
                        required={required}
                        onChange={handleChange}
                    />
                </label>
            ))}
            <button 
                type="submit"
            >
                { buttonCTA }
            </button>
            { !noAttr &&
                <>
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
                </>
            }
        </form>
    );
};

export default NetlifyForm;