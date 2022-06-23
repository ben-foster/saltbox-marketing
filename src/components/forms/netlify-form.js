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

    const handleSelectChange = (e) => {
        e.target.classList.add("text-gray-800")

        setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;

        setState({ 
            ...state,
         })

         console.log(state)

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
                firstTouchSource: form.querySelector("#firstTouchSource" + form.getAttribute("name")).value,
                firstTouchMedium: form.querySelector("#firstTouchMedium" + form.getAttribute("name")).value,
                firstTouchCampaign: form.querySelector("#firstTouchCampaign" + form.getAttribute("name")).value,
                firstTouchContent: form.querySelector("#firstTouchContent" + form.getAttribute("name")).value,
                firstTouchTerm: form.querySelector("#firstTouchTerm" + form.getAttribute("name")).value,
                firstTouchGclid: form.querySelector("#firstTouchGclid" + form.getAttribute("name")).value,
                lastTouchSource: form.querySelector("#lastTouchSource" + form.getAttribute("name")).value,
                lastTouchMedium: form.querySelector("#lastTouchMedium" + form.getAttribute("name")).value,
                lastTouchCampaign: form.querySelector("#lastTouchCampaign" + form.getAttribute("name")).value,
                lastTouchContent: form.querySelector("#lastTouchContent" + form.getAttribute("name")).value,
                lastTouchTerm: form.querySelector("#lastTouchTerm" + form.getAttribute("name")).value,
                lastTouchGclid: form.querySelector("#lastTouchGclid" + form.getAttribute("name")).value,
                sessionHistory: form.querySelector("#sessionHistory" + form.getAttribute("name")).value,
            }),
        })
            .then(() => {
                window.history.pushState({}, window.document.title)
                window.location.replace(form.getAttribute('action'));
            })
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
            { inputs.map(({ name: inputName, type, label, placeholder, required, options }) => {
                if(type !== "select" && type !== "textarea") {
					return (
						<label key={inputName} htmlFor={inputName}>
							{ label }
							<input 
								type={type}
								name={inputName}
								id={`inputName${name.replace(/\s/g, '')}`}
								placeholder={placeholder}
								required={required}
								onChange={handleChange}
							/>
						</label>
					)
				} else if(type === "select") {
					return (
						<label key={inputName} htmlFor={inputName}>
							{ label }
							<select
								name={inputName}
								id={`inputName${name.replace(/\s/g, '')}`}
								placeholder={placeholder}
								required={required}
                                onChange={handleSelectChange}
                                className="text-gray-400"
							>
								<option disabled="disabled" selected="selected"> -- Select an option --</option>
								{ options.map(({ value, text }) => (
									<option value={value}>{text}</option>
								))}
							</select>
						</label>
					)
				} else if(type === "textarea") {
					return (
						<label key={inputName} htmlFor={inputName}>
							{ label }
							<textarea 
								type={type}
								name={inputName}
								id={`inputName${name.replace(/\s/g, '')}`}
								placeholder={placeholder}
								required={required}
                                onChange={handleChange}
                                rows="4"
							/>
						</label>
					)
				}
            })}
            <button 
                type="submit"
                id="contactBtn"
            >
                { buttonCTA }
            </button>
            { !noAttr &&
                <>
                    <input 
                        type="hidden" 
                        name="firstTouchSource"
                        id={`firstTouchSource${name.replace(/\s/g, '')}`}
                        className="firstTouchSource"
                        onChange={handleChange}
                    />
                    <input 
                        type="hidden" 
                        name="firstTouchMedium"
                        id={`firstTouchMedium${name.replace(/\s/g, '')}`}
                        className="firstTouchMedium"
                        onChange={handleChange}
                    />
                    <input 
                        type="hidden" 
                        name="firstTouchCampaign"
                        id={`firstTouchCampaign${name.replace(/\s/g, '')}`}
                        className="firstTouchCampaign"
                        onChange={handleChange}
                    />
                    <input 
                        type="hidden" 
                        name="firstTouchContent"
                        id={`firstTouchContent${name.replace(/\s/g, '')}`}
                        className="firstTouchContent"
                        onChange={handleChange}
                    />
                    <input 
                        type="hidden" 
                        name="firstTouchTerm"
                        id={`firstTouchTerm${name.replace(/\s/g, '')}`}
                        className="firstTouchTerm"
                        onChange={handleChange}
                    />
                    <input 
                        type="hidden" 
                        name="firstTouchGclid"
                        id={`firstTouchGclid${name.replace(/\s/g, '')}`}
                        className="firstTouchGclid"
                        onChange={handleChange}
                    />
                    <input 
                        type="hidden" 
                        name="lastTouchSource"
                        id={`lastTouchSource${name.replace(/\s/g, '')}`}
                        className="lastTouchSource"
                        onChange={handleChange}
                    />
                    <input 
                        type="hidden" 
                        name="lastTouchMedium"
                        id={`lastTouchMedium${name.replace(/\s/g, '')}`}
                        className="lastTouchMedium"
                        onChange={handleChange}
                    />
                    <input 
                        type="hidden" 
                        name="lastTouchCampaign"
                        id={`lastTouchCampaign${name.replace(/\s/g, '')}`}
                        className="lastTouchCampaign"
                        onChange={handleChange}
                    />
                    <input 
                        type="hidden" 
                        name="lastTouchContent"
                        id={`lastTouchContent${name.replace(/\s/g, '')}`}
                        className="lastTouchContent"
                        onChange={handleChange}
                    />
                    <input 
                        type="hidden" 
                        name="lastTouchTerm"
                        id={`lastTouchTerm${name.replace(/\s/g, '')}`}
                        className="lastTouchTerm"
                        onChange={handleChange}
                    />
                    <input 
                        type="hidden" 
                        name="lastTouchGclid"
                        id={`lastTouchGclid${name.replace(/\s/g, '')}`}
                        className="lastTouchGclid"
                        onChange={handleChange}
                    />
                    <input 
                        type="hidden" 
                        name="sessionHistory"
                        id={`sessionHistory${name.replace(/\s/g, '')}`}
                        className="sessionHistory"
                        onChange={handleChange}
                    />
                </>
            }
        </form>
    );
};

export default NetlifyForm;